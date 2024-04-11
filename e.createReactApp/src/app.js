import React, {lazy, Suspense, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import ResMenu from "./components/ResMenu"
import UserContext from "./utils.js/userContext"
import { Provider } from "react-redux"
import store from "./utils.js/appStore"

const Grocery = lazy(() => import('./components/Grocery'))

const App = () => {

    const [userName, setUserName] = useState("Abhishek")

    return (
        <Provider store={store}>
            <UserContext.Provider value={{info:"", loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const routerBrowser = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body/>
            }
            ,
            {
            path: "/about",
            element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <ResMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading</h1>}><h1>preview</h1><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={routerBrowser} />)
