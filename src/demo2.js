
import {createElement} from './createElement'

window.GReact = {
    createElement,
    render
}

function createDom(fiber){
    const dom = fiber.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        :document.createElement(fiber.type);
    const isProperty = key => key !== 'children';
    Object.keys(fiber.props).filter(isProperty).forEach(name => {
        dom[name] = fiber.props[name];
    })
    return dom;
}
//根节点，跟踪当前准备渲染的节点
let vipRoot = null;
//下一个工作单元
let nextUnitOfWork = null
let currentRoot = null;
function commitRoot(){
   commitWork(vipRoot.child);
   currentRoot = vipRoot;
   vipRoot = null;
}
function commitWork(fiber){
    if(!fiber){
        return;
    }
    const domParent = fiber.parent.dom;
    domParent.appendChild(fiber.dom);
    commitWork(fiber.child);
    commitWork(fiber.sibling);
}
function render(element,container){
    //第一个工作单元
    vipRoot = {
        dom:container,
        props:{
            children:[element]
        }
    }
    //下一个fiber节点（工作单元）跟节点
    nextUnitOfWork = vipRoot
}

function workLoop(deadline){
    //判断是否应该停止循环
    let shuoldYield = false;
    console.log('🐻🐻🐻🐻',deadline.timeRemaining())
    //如果存在下一个工作单元，且没有更高优先级得其它工作，执行循环
    //如果存在上述得情况，直接打断渲染
    while(nextUnitOfWork && !shuoldYield){
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        //如果截止时间到了，停止工作循环，更高优先级得任务来了
        shuoldYield = deadline.timeRemaining() < 1;
    }
    if(!nextUnitOfWork && vipRoot){
        commitRoot()    
    }
    requestIdleCallback(workLoop)
}
//告知浏览器空闲时间执行workLoop
requestIdleCallback(workLoop)

//承载了下一个得工作单元
function performUnitOfWork(fiber){
    //如果fiber没有dom节点，创建一个dom节点
    if(!fiber.dom){
        fiber.dom = createDom(fiber)
    }
    // if(fiber.parent){
    //     fiber.parent.dom.appendChild(fiber.dom);
    // }
    //处理children节点
    const elments = fiber.props.children;
    let index = 0; //起始节点
    let prevSibling = null; //兄弟节点


    while(index < elments.length){
        const elment  = elments[index];
        const newFiber = {
            type: elment.type,
            props: elment.props,
            parent: fiber,
            dom:null
        }
        if(index === 0){
            fiber.child = newFiber;
        }else{
            //这儿通过链把兄弟节点依次挂载到父节点下面的第一个子节点上
            //用于后面找到兄弟节点
            prevSibling.sibling = newFiber;
        }
        prevSibling = newFiber;
        index++;
    }

    //如果有子节点，返回子节点
    if(fiber.child){
        return fiber.child
    }

    let nextFiber = fiber;
    //这儿是重点，如果没有子节点，则判断有没有兄弟节点
    //如果没有判断父节点有没有兄弟节点，直至找到第一个有兄弟节点的父节点
    while(nextFiber){
        if(nextFiber.sibling){
            return nextFiber.sibling
        }
        nextFiber = nextFiber.parent;
    }

}

/* @jsx GReact.createElement */
const jsxElement = (
    <div id='div'> 
        <a>jsx</a>
        <img src='https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg'></img>
    </div>
)

const root = document.getElementById('root')
GReact.render(jsxElement,root)
