import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import { Icon } from "antd"
import * as style from "./index.scss"
const iconData = [
    "android",
    "apple",
    "windows",
    "ie",
    "chrome",
    "github",
    "html5",
    "taobao",
    "youtube",
    "amazon",
    "zhihu",
    "wechat",
    "twitter",
    "weibo",
    "qq",
    "skype",
    "gitlab"
]
class Page extends ComponentExt {
    render() {
        return (
            <div className={style.iconsList}>
                {iconData.map(item => (
                    <div className={style.iconsItem} key={item}>
                        <Icon type={item} />
                    </div>
                ))}
            </div>
        )
    }
}
export default Page
