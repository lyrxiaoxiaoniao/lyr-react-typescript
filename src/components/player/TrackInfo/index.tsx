import * as React from "react"
import * as style from "./index.scss"
const TrackInfo = (props: any) => {
    const { picUrl, title } = props.info
    return (
        <div className={style.trackinfo}>
            <img className={style.image} src={picUrl} alt="" />
            <div className={style.title}>{title}</div>
        </div>
    )
}

export default TrackInfo
