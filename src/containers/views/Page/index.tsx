import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
// import { Icon } from "antd"
import * as style from "./index.scss"
import ArticleItem from "@components/articleItem"
class Page extends ComponentExt {
    render() {
        return (
            <div className={style.iconsList}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 123].map(item => (
                    <ArticleItem
                        key={item}
                        list={{ src: "adasd", title: "测试" }}
                    />
                ))}
            </div>
        )
    }
}
export default Page
