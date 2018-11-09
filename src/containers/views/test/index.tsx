import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import {
    withRouter,
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import * as style from "./index.scss"
const Data = [
    {
        id: 1,
        title: "React + TS 2.8：终极组件设计模式指南",
        url: "https://segmentfault.com/a/1190000015326439"
    },
    { id: 2, title: "Apple Blog", url: "http://132.232.34.190/" },
    {
        id: 3,
        title: "awesome-react",
        url: "https://github.com/enaqx/awesome-react"
    }
]
@(withRouter as any)
class Test extends ComponentExt<any> {
    renterLink(item: any) {
        return (
            // <li key={item.id} className={style.link}>
                <Link
                    key={item.id}
                    className={style.link}
                    to={{
                        pathname: `${this.props.match.url}/${item.id}`,
                        state: item
                    }}
                >
                    {item.title}
                </Link>
            // </li>
        )
    }
    render() {
        console.log(this.props, "test")
        return (
            <div style={{ color: "#fff" }}>
                <span>主题列表</span>
                <ul>
                    {Data.map(item => {
                        return this.renterLink(item)
                    })}
                    {/* <li>
                        <Link to={`${this.props.match.url}/使用 React 渲染`}>
                            使用 React 渲染
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/组件`}>组件</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/ 属性 v. 状态`}>
                            属性 v. 状态
                        </Link>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Test
