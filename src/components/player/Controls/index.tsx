import * as React from "react"
import * as style from "./index.scss"
import { Icon } from "antd"
const Controls = (props: any) => {
    const { playStatus, onPrevious, onPlay, onNext } = props
    return (
        <div className={style.controls}>
            <div className={style.item} onClick={onPrevious}>
                <Icon type="step-backward" />
            </div>
            <div className={style.item} onClick={onPlay}>
                {playStatus ? (
                    <Icon type="pause" />
                ) : (
                    <Icon type="play-circle" />
                )}
            </div>
            <div className={style.item} onClick={onNext}>
                <Icon type="step-forward" />
            </div>
        </div>
    )
}

export default Controls
