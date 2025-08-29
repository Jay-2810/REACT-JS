import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// custom react create
function MyApp(){
  return(
    <div>
      <h1>Custom App | Jay</h1>
    </div>
  )
}
// not working becuase render don't understad this object 
const ReactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const username="jay-2810"
const react_Element=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit Google',
  // direct inject in object
  username
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // <MyApp />
    // ReactElement
    // anotherElement 
    // react_Element
)
