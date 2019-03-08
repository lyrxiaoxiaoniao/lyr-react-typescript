import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import { Icon } from "antd"
import * as style from "./index.scss"
import ArticleItem from "@components/articleItem"
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
            // <div className={style.iconsList}>
            //     {iconData.map(item => (
            //         <div className={style.iconsItem} key={item}>
            //             <Icon type={item} />
            //         </div>
            //     ))}
            // </div>
            <div className={style.iconsList}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 123].map(item => (
                        <ArticleItem key={item} list={{ src: 'adasd', title: '测试' }} />
                    ))
                }
            </div>
        )
    }
}
export default Page
