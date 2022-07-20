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

const node = GReact.createElement(
    'div',
    {id:'container'},
    GReact.createElement('a',{
        title:'a'
    },'a'),
    GReact.createElement('b'),
)

const root = document.getElementById('root')
render(node,root)
