import { createElement } from "./createElement";
//alternate 这个桥接属性是全体fiber 都用的一个属性，保存了fiber更新前的fiber tree

window.GReact = {
    createElement,
    render,
};

function createDom(fiber) {
    const dom =
        fiber.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(fiber.type);
    // const isProperty = (key) => key !== "children";
    // Object.keys(fiber.props)
    //     .filter(isProperty)
    //     .forEach((name) => {
    //         dom[name] = fiber.props[name];
    //     });
    updateDom(dom,{},fiber.props)
    return dom;
}
//根节点，跟踪当前准备渲染的节点
let vipRoot = null;
//下一个工作单元
let nextUnitOfWork = null;
//当前渲染树 最后准备提交的渲染树
let currentRoot = null;

// domdiff 要删除的节点
let deletions = null

function commitRoot() {
    deletions.forEach(commitWork)
    commitWork(vipRoot.child);
    currentRoot = vipRoot;
    vipRoot = null;
}

//属性的更新
const isProperty = (key) => key !== 'children'
//是否是新属性
const isNew = (prev,next) => (key) => prev[key] !== next[key]
//是否是旧属性
const isGone = (next) => (key) => !(key in next)
//是否是事件
const isEvent = (key) => key.startsWith('on')
function updateDom(dom,prevProps,nextProps){
    Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(nextProps))
    .forEach((key)=>{
        dom[key] = ''
    })

    Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps,nextProps))
    .forEach((key)=>{
        dom[key] = nextProps[key]
    })

    Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps,nextProps)(key))
    .forEach((key)=>{
        const eventType = key.toLowerCase().substring(2)
        dom.removeEventListener(eventType,prevProps[key])
    })


    Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps,nextProps))
    .forEach((key)=>{
        const eventType = key.toLowerCase().substring(2)
        dom.addEventListener(eventType,nextProps[key])
    })
}

function commitWork(fiber) {
    //effectTag 判断节点是不是需要删除的节点
    if (!fiber) {
        return;
    }
    const domParent = fiber.parent.dom;
    if(fiber.effectTag === 'PLACEMENT' && fiber.dom !== null){
        domParent.appendChild(fiber.dom)
    }else if(fiber.effectTag === 'UPDATE' && fiber.dom !== null){
        updateDom(fiber.dom,fiber.alternate.props,fiber.props)
    }
    commitWork(fiber.child);
    commitWork(fiber.sibling);
}
function render(element, container) {
    //第一个工作单元
    vipRoot = {
        dom: container,
        props: {
            children: [element],
        },
        alternate: currentRoot,
    };
    deletions = []
    //下一个fiber节点（工作单元）跟节点
    nextUnitOfWork = vipRoot;
}

function workLoop(deadline) {
    //判断是否应该停止循环
    let shuoldYield = false;
    //如果存在下一个工作单元，且没有更高优先级得其它工作，执行循环
    //如果存在上述得情况，直接打断渲染
    while (nextUnitOfWork && !shuoldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        //如果截止时间到了，停止工作循环，更高优先级得任务来了
        shuoldYield = deadline.timeRemaining() < 1;
    }
    if (!nextUnitOfWork && vipRoot) {
        commitRoot();
    }
    requestIdleCallback(workLoop);
}
//告知浏览器空闲时间执行workLoop
requestIdleCallback(workLoop);

//承载了下一个得工作单元
function performUnitOfWork(fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber);
    }
    const elements = fiber.props.children
    reconcileChildren(fiber, elements)

    //如果有子节点，返回子节点
    if (fiber.child) {
        return fiber.child;
    }
    let nextFiber = fiber;
    //这儿是重点，如果没有子节点，则判断有没有兄弟节点
    //如果没有判断父节点有没有兄弟节点，直至找到第一个有兄弟节点的父节点
    while (nextFiber) {
        if (nextFiber.sibling) {
            return nextFiber.sibling;
        }
        nextFiber = nextFiber.parent;
    }
}

//这里对比新旧的fiber
function reconcileChildren(vipFiber, elements) {
    //如果fiber没有dom节点，创建一个dom节点
    // if(fiber.parent){
    //     fiber.parent.dom.appendChild(fiber.dom);
    // }
    //处理children节点
    let index = 0; //起始节点
    let oldFiber = vipFiber.alternate && vipFiber.alternate.child
    let prevSibling = null; //兄弟节点
    while (index < elements.length || !!oldFiber) {
        // while (index < elements.length)
        const element = elements[index];
        const newFiber = null;
        //判断fiber的类型是否一致
        const sameType = oldFiber && element && element.type === oldFiber.type
        if (sameType) {
            //如果类型一致 仅仅去更新props
            newFiber = {
                type: oldFiber.type,
                props: element.props,
                dom: oldFiber.dom,
                parent: vipFiber,
                alternate: oldFiber,
                effectTag: 'UPDATE',
            }
        }
        //添加新节点
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                parent: vipFiber,
                alternate: null,
                effectTag: 'PLACEMENT',
            }
        }
        //删除老节点
        if (oldFiber && !sameType) {
            oldFiber.effectTag = 'DELETION'
            deletions.push(oldFiber)
        }
        if(oldFiber){
            oldFiber = oldFiber.sibling
        }
        if (index === 0) {
            vipFiber.child = newFiber;
        } else {
            //这儿通过链把兄弟节点依次挂载到父节点下面的第一个子节点上
            //用于后面找到兄弟节点
            prevSibling.sibling = newFiber;
        }
        prevSibling = newFiber;
        index++;
    }

}

/* @jsx GReact.createElement */
// function App(props){
//     return <h1>{props.name}</h1>
// }
// const element = <App name='foo'/>
// const root = document.getElementById("root");
// GReact.render(jsxElement, root);


/* @jsx GReact.createElement */
const root = document.getElementById("root");
const updateValue = (e) => {
    console.log(e.target.value)
    rerender(e.target.value)
}
const rerender = (value)=>{
    const element = (
        <div>
            <input onInput={updateValue} value = {value}/>
            <h2>hello {value}</h2>
        </div>
    )
    GReact.render(element,root)
}

rerender('world')