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

export {createElement}