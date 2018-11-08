import * as React from "react"
import { Spin } from "antd"
import * as style from "./Loadding.scss"
const Loadding = () => {
    return (
        <div className={style.spin}>
            <Spin size="large" />
        </div>
    )
}
export default Loadding
