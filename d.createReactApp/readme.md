## Create our app

* why do we need npm 
> npm is managing the packages we will be using inside our project 
> we will create package.json file using npm init 
> package.json is basically the configuration of npm 

* Let's see the most important package 
> - which is bundler , when we html css js code then our whole code needs to be bundled together before it is sent to the production 
> -  we will use parcel as a bundler 

* How can we download the parcel in to our application 
> we can just npm , npm i -D parcel , -D is for devDependecies as we only need for development

* now if you see a package-lock.json file was created , what is that file 
> - well package.json file is npm configuration , and it helps in keeping track of versions of dependencies , whereas package-lock.json file keeps the exact version of the dependecies that will be used inside your local and plus on your server , 
> - you will see package.json file will have something like ^2.3.3 this caret sign means that any new patch changes comes will automatically be updated and ~ is used for any major updates, if any major version occurs it will update automatically 
> - now that we have installed the parcel we can execute the package using npx  .... use npx parcel index.html now parcel host your application on the server http://localhost:1234

* previously we were using react cdn but we dont want that as that would be pretty slow , it will make extra network call to fetch the react , so it better to keep react in our application it self 

* let's download react using npm i react 

* now once we downloaded the react we can simply remove cdn from our code and we can use import in our app.js file , but you will see that browser will throw error `Browser scripts cannot have imports or exports.` to solve this issue we need to add type="module" while adding app.js file in the index.html file , this tells browser that the app.js is not a simple file it is a type of module 

* parcel is doing a lot of things (see documentation) parcel gives a power, it creates dev build , local settings , hosts app to server , parcel also refreshes the browser , how does it happen , it happens due to HMR , hot module replacement , and it uses the file watching algorithm which is written in c++
* parcel also does caching so that it reloads faster
* it does image optimization
* minification of the files 
* Bundling of the files 
* compressing 
* code splitting 
* error handling 
* diagnostic 

* we can add browserlist (visit browserlist ) which our app can suppport , we can decide based on the application browserlist website can give you the proper picture 

* for creating the production build we can use `npx parcel build index.html`