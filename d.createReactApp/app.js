import React from 'react'
import ReactDOM from 'react-dom/client'


const heading = React.createElement("h1", {
        "id": "heading"
    }, "Hello from react.js")
const dom = ReactDOM.createRoot(document.getElementById("root"))

/**
 * <div id="parent">
 * <div id="child">
 *  <h1>hello from react js</h1>
 * </div>
 * </div>
 */
//above example is quiet simple , but in html we can have very complex looking structure as well 
const parent = React.createElement('div', {
    id: 'parent'
}, [React.createElement('div', {id: 'child'}, 
[React.createElement('h1', 
{id: 'heading'},
"i am h1 tag"), React.createElement('h2', 
{id: 'heading2'},
"i am h2 tag")]), React.createElement('div', {id: 'child2'}, 
[React.createElement('h1', 
{id: 'heading2'},
"i am h1 tag"), React.createElement('h2', 
{id: 'heading2'},
"i am h2 tag")])])
dom.render(parent)

console.log(parent);
