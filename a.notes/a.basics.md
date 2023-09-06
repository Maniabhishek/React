
# React basics 

* we first created a hello world project using html and js 
* then we created hello world using react but how does the browser understand the react code , in simple html file we used js inside it then how did it understand document and all , because of browser , browser has js engine to execute js code. but how about react code how will it understand 

> ways we can inject react into our project
>> we can use cdn link directly to use react into our project

## what happens when we inject react code into our project
* we will see react code into the browser console coming up 

### Why do we have two link or two file (https://unpkg.com/react@18/umd/react.development.js and https://unpkg.com/react-dom@18/umd/react-dom.development.js) react and react dom
* the first react.development.js is the core of the react and another file is used for dom , modifying the DOM , then the question raises why do we need two files here , its because  react doesn't only work on browser but also on mobile and there are many other react flavours as well like react 3d thus , react.development.js is the core of the react and react-dom acts as a bridge for browser and the react 

## let's create the hello world in react 
> - we first need React.createElement and we want a heading tag inside the id root and then we will put this element inside the root div  
