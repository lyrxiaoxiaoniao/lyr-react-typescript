import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Loadable from "react-loadable"
import loading from "./Loadding"
import Home from "@views/Home"

export const RouterList: Array<any> = [
    {
        path: "/",
        component: () => import("@views/Page"),
        exact: true
    },
    {
        path: "/detail/:id",
        component: () => import("@views/Page/detail"),
        exact: false
    },
    {
        path: "/counter",
        component: () => import("@views/Counter"),
        exact: false
    },
    {
        path: "/mine",
        component: () => import("@views/Mine"),
        exact: false
    },
    {
        path: "/topic",
        component: () => import("@views/Article"),
        exact: false
    },
    {
        path: "/topic/:topicId",
        component: () => import("@views/Article/detail"),
        exact: false
    }
]

const RouterMap = () => (
    <Router>
        <Switch>
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
