import * as React from "react"
import { observer, inject } from "mobx-react"
import { Button } from "antd"
import { ComponentExt } from "@utils/reactExt"
import { GlobalStore } from "@models/globalStore"
import * as style from "./index.scss"

interface IProps {
    globalStore?: GlobalStore
}
@inject("globalStore")
@observer
export default class Counter extends ComponentExt<IProps> {
    increase = () => {
        this.props.globalStore.increase()
    }
    decrease = () => {
        this.props.globalStore.decrease()
    }

    render() {
        const { num } = this.props.globalStore
        return (
            <div className={style.counter}>
                <div className={style.title}>mobx + mobx-react + typescript 简单测试</div>
                <div className={style.num}>{num}</div>
                <Button onClick={this.increase}>增加</Button>
                <Button onClick={this.decrease}>减少--</Button>
            </div>
        )
    }
}
