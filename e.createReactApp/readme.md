## let's understand the basics 

- previously we saw creating the react element using React.createElement but creating the complex would become very clumsy 
- so in order to get the simpler way to create the react element we have jsx
- jsx is simply writing html like syntax 
- we can write code something like shown below
```js
const element = <h1>this is heading</h1>
```
- creating a element like above is as similar as React.createElement but this above syntax is very easy which is html like syntax ,
- since we are writing it in the js file then , is that a js syntax will js understand that syntax , definetly no then how does js read it and how does browser display these element 
- well the point is , even before the code reaches the browser or js engine it goes through parcel and then it has babel , babel is a javascript compiler which basically converts the jsx to the code which js engine can understand
- so the code you see in line 8 above is converted to React.createElement by babel and then it is rendered , React.createElement just creates an object and then it rendered using root.render (root is created using ReactDOM.createRoot())
- components , we can have functional or class compoents
- when we write one components in another components then that is known as component composition
- jsx also prevent cross site scripting , for example we make an api call and that has some malicious data jsx will remove those code 
-  For calling components we can simply use <Title /> or <Title></Title> functional components are nothing but js functions and js function can be called , so can also call these functional components inside a curly braces {Title()}
- funciton that returns react element is functional components

### let's improve the code and create a food app
- lets  first design think about what we are going to develop 
- a nav bar , body with multiple cards 
- a footer 

- checkout the code in app.js 

### why key is required when we are using map 
> - if we dont pass any key then if any new component comes in between then react will not be able to find out which one is new one and thus react will re render the whole component , if you dont pass the key then all the components will be same , and any new component comes react will not be able to identify the new one and thus it will re render the whole component again , but if you give each component a unique id , then react will not re render the whole component , as react will identify the new componet 

### can you use index as key 
> -  index as a key is anti pattern , but this is not recommended , use only when you dont have a unique id 

### Project Progress...
> - we first created the created the Header component and restructured it in a seperate folder called component, then similary we created a body component and then res card compoent now inside body compone when we were adding res card then we had used map in order to render multiple res cards 
> - then we created a feature to filter the restaurant with rating more than four , for that we implemented it using the filter on onClick and we update the state of a variable , if we had used a simple variable it wouldn't have updated the rescard , this is the problem react solves, react uses virtual dom in order update dom , so any time state updates react will re render the component so when state changes , react re-render that component 

### why react is so fast , let's understand some very important point , like dom manipluation, how react works behind the scenes 
> - how react work behind the scenes
>> react uses reaconsilation alg. also known as react fiber , for example we have a component and inside that component , it renders muliple Card component then after filteration state updates and only few card are rendered back , how does this happen , hence react creates , so react creates virtual dom for all the cards and the moment state updates , react will check the differences before and after then if there is any changes react will update the UI virtual dom is nothing but react.createElement which is an object similary the component you create (or in simple work html you write is virtual dom) Diff algorigthm will find the differences between the compoenent before and after , after state change, 
> - why is react fast , because it does efficient dom manipulation , react can find differeneces between before and after component , it has diff alg. , it find out the diff and update the UI 