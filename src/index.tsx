import * as React from "react"
import * as ReactDOM from "react-dom"
import { configure } from "mobx"
import { Provider } from "mobx-react"

// import './index.scss';
// 解决模块声明问题 这时候我们在根目录下新建一个typings文件夹，用于存放.scss的模块声明，以及后续需要用到的全局校验接口，然后新建typed-css-modules.d.ts文件用于存放.scss模块声明
// import * as styles from './index.scss';
import App from "@shared/App"
import * as store from "./store"

// 这里面的configure({enforceActions: 'observed'})
// 用于限制被observable(也就是store中添加了@observable)的数据的修改方式，让其只能添加了@action的函数中进行修改。
configure({ enforceActions: "observed" })
const render = () => {
    ReactDOM.render(
        <Provider {...store}>
            <App />
        </Provider>,
        document.querySelector("#app")
    )
}

render()
