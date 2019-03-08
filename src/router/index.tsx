import * as React from "react"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
// import { RouteProps } from "react-router"
import Loadable from "react-loadable"
import loading from "./Loadding"
import Home from "@views/Home"

export const RouterList: any[] = [
    {
        path: "/",
        component: () => import("@views/Page"),
        exact: true
    },
    {
        path: "/counter",
        component: () => import("@views/Counter"),
        exact: false
    },
    {
        path: "/mine",
        component: () => import("@views/Mine"),
        exact: true
    },
    {
        path: "/login",
        component: () => import("@views/Login"),
        exact: true
    },
    {
        path: "/topic",
        component: () => import("@views/Article"),
        exact: true
    },
    {
        path: "/topic/:topicId",
        component: () => import("@views/Article/detail"),
        exact: false
    }
]
// const Login = () => import("@views/Login")

const RouterMap = () => (
    <Router>
        <Switch>
            {/* <Route
                exact
                path="/login1"
                component={Loadable({
                    loader: Login,
                    loading
                })}
            /> */}
            <Home>
                {RouterList.map(item => (
                    <Route
                        key={item.path}
                        exact={item.exact}
                        path={item.path}
                        component={Loadable({
                            loader: item.component,
                            loading
                        })}
                    />
                ))}
            </Home>
        </Switch>
    </Router>
)

export default RouterMap
