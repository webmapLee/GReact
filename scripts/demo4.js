
window.GReact = {
    createElement
}

function createTextElement(text){
    return {
        type:'TEXT_ELEMENT',
        props:{
            nodeValue:text,
            children:[]
        }
    }
}

function createElement(type,props,...children){
    return {
        type:type,
        props:{
            ...props,
            children:children.map((child)=>{
                return typeof child === 'object'?child:createTextElement(child)
            })
        }
    }
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

/* @jsx GReact.createElement */
const jsxElement = (
    <div id='div'> 
        <a>jsx</a>
        <b/>
    </div>
)

const root = document.getElementById('root')
render(jsxElement,root)
