import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Loadable from "react-loadable"
import loading from "./Loadding"
import Home from "@views/Home"
const RouterList: any[] = [
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
        path: "/test",
        component: () => import("@views/Test"),
        exact: true
    },
    {
        path: "/test/:topicId",
        component: () => import("@views/Test/one"),
        exact: false
    }
]

const RouterMap = () => (
    <Router>
        <Home>
            <Switch>
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
            </Switch>
        </Home>
    </Router>
)

export default RouterMap
