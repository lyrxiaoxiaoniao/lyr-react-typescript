import * as React from "react"
import { hot } from "react-hot-loader"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Loadable from "react-loadable"

function Loading() {
    return <div>Loading......</div>
}
const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ "@views/Home"),
    loading: Loading
})
const Page = Loadable({
    loader: () => import(/* webpackChunkName: "page" */ "@views/Page"),
    loading: Loading
})
const Test = Loadable({
    loader: () => import(/* webpackChunkName: "page" */ "@views/Test"),
    loading: Loading
})
const Counter = Loadable({
    loader: () => import(/* webpackChunkName: "page" */ "@views/Counter"),
    loading: Loading
})

@hot(module)
class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/page" component={Page} />
                        <Route exact path="/test" component={Test} />
                        <Route exact path="/counter" component={Counter} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
