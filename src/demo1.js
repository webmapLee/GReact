
import {createElement} from './createElement'

window.GReact = {
    createElement
}

function render(element,container){
    const dom = element.type === 'TEXT_ELEMENT'
    ?document.createTextNode('')
    :document.createElement(element.type)
    element.props.children.forEach(child => {
        render(child,dom)
    });
    const isChildren = (key) => key !== 'children'
    Object.keys(element.props).filter(isChildren).forEach(key=>{
        dom[key] = element.props[key]
    })
    container.appendChild(dom)
}

let nextUnitOfWork = null

function workLoop(deadline){
    //判断是否应该停止循环
    let shuoldYield = false;
    //如果存在下一个工作单元，且没有更高优先级得其它工作，执行循环
    //如果存在上述得情况，直接打断渲染
    while(nextUnitOfWork && !shuoldYield){
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        //如果截止时间到了，停止工作循环，更高优先级得任务来了
        shuoldYield = deadline.timeRemaining() < 1;
    }
    requestIdleCallback(workLoop)
}
//告知浏览器空闲时间执行workLoop
requestIdleCallback(workLoop)

//承载了下一个得工作单元
function performUnitOfWork(){

}

/* @jsx GReact.createElement */
const jsxElement = (
    <div id='div'> 
        <a>jsx</a>
        <img src='https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg'></img>
    </div>
)

const root = document.getElementById('root')
render(jsxElement,root)
