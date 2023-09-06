## let's create the hello world in react 
> - we first need React.createElement and we want a heading tag inside the id root and then we will put this element inside the root div  

* Instead of writing the js in html let's seperate it and create a js file where we can write the js code 

* so we created a seperate file called app.js 

###  what is React.createElement 
> - it is just js object, it not an element yet , once we used dom.render then only it will pass it as an object which will be props , and thus a h1 tag will be created 

### complex struct for element in react
> - above example in app.js we just created a h1 tag which is quiet simple , but in html we can have very complex looking structure as well
> - how can we create some complex structure 
```js
const parent = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {id: 'child'}, 
React.createElement('h1', 
{id: 'heading'},
"this is h1 tag")))
dom.render(parent)
``` 

* let's see how we can add some more sibling to this h1 tag something like structure
```html
<div id='parent'>
    <div id='child'>
        <h1>
            this is h1 tag
        </h1>
        <h2>
            this is h2 tag
        </h2>
    </div>
</div>
```
* react code to create above 
```js
const parent = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {id: 'child'}, 
[React.createElement('h1', 
{id: 'heading'},
"i am h1 tag"), React.createElement('h2', 
{id: 'heading2'},
"i am h2 tag")]))
dom.render(parent)
```

* let's add a child2 to parent div  
```js
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
```

* what happens if we change the order of script in html file , what if we move script that has app.js file before react cdn , will it work 
> -  no it will not work as html file will be executed one by one and thus it will not work 

* what is dom.render doing in our code 
> -  is it simply putting the element we are passing inside the root div , what if we have something inside that div already what will happen, it is going to replace with whatever you pass , it will not append just replaces it 
> - we have two scripts file to for react cdv it loads , react then it loads react dom and then it sees to load our file app.js and then it will read js file and at the end it sees dom.render whil just render inside the root div and whatever inside it will be replaced

* what is the purpose of the  crossorigin 
> - The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. 


## sumary 
> - when we use createElment it simply creates an object then we createElement take tag , then object for the attributes , and then finally it will take elment it can be simply a string or another elment , or it can be array of elements 
> - dom.render will render the element into the root div (or any div you named) and then react will render that element
