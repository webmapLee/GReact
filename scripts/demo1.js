var element = {
    type:'h1',
    props:{
        title:'liyb',
        children:'hello'
    }
}

var h1 = document.createElement(element.type)
h1.title = element.props.title
const text = document.createTextNode('')
text.nodeValue = element.props.children
h1.appendChild(text)

var root = document.getElementById('root')
root.appendChild(h1)



