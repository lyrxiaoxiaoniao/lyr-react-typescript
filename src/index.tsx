import "./index.scss"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { configure } from "mobx"
import { Provider } from "mobx-react"
import createBrowserHistory from "history/createBrowserHistory"
import { syncHistoryWithStore } from "mobx-react-router"
import { Router } from "react-router-dom"
import DevTools from "mobx-react-devtools"
import App from "@shared/App"
// import Index from "@router/index"
import * as store from "./store"
// 解决模块声明问题 这时候我们在根目录下新建一个typings文件夹，用于存放.scss的模块声明，以及后续需要用到的全局校验接口，然后新建typed-css-modules.d.ts文件用于存放.scss模块声明
// import * as styles from './index.scss';
const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, store.routerStore)

// 这里面的configure({enforceActions: 'observed'})
// 用于限制被observable(也就是store中添加了@observable)的数据的修改方式，让其只能添加了@action的函数中进行修改。
configure({ enforceActions: "observed" })
const render = (Component: any) => {
    ReactDOM.render(
        <Provider {...store}>
            <Router history={history}>
                <Component />
            </Router>
        </Provider>,
        document.querySelector("#app")
    )
}
const renderApp = (Component: any) => {
    ReactDOM.render(
        <>
            <Provider {...store}>
                <Router history={history}>
                    <Component />
                </Router>
            </Provider>
            {process.env.NODE_ENV === "development" ? <DevTools /> : null}
        </>,
        document.querySelector("#app")
    )
}

// render(App)
renderApp(App)
