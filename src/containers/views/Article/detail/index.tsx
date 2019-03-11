import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import * as style from "./index.scss"

class One extends ComponentExt<any> {
    render() {
        console.log(this.props, "this.props.match")
        const { state } = this.props.location
        return (
            <div className={style.detail} style={{ color: "#333" }}>
                文章详情：
                <a href={state.url} target="_blank">
                    {state.title}
                </a>
            </div>
        )
    }
}

export default One
