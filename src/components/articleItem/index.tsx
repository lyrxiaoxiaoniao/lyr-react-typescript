import * as React from "react"
import * as style from "./index.scss"
import { Tag } from "antd"
import MarkdownHtml from "../MarkdownHtml/index"
interface PropsList {
    list: IArticleStore.IArticle
    [key: string]: any
}
const ArticleItem = (props: PropsList) => {
    return (
        <div
            onClick={() => props.click(props.list.id)}
            className={style.articleitem}
        >
            <div className={style.left}>
                <a className={style.leftTitle}>
                    {props.list.title}
                </a>
                <div className={style.leftContent}>
                    {/* {props.list.content} */}
                    <MarkdownHtml mdhtml={props.list.content} />
                </div>
                <div className={style.leftTip}>
                    {props.list.createdAt}
                    <div className={style.leftTipTag}>
                        {props.list.Tags.map(v => (
                            <Tag key={v.label} color='volcano'>
                                {v.label}
                            </Tag>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <img className={style.img} src={props.list.head_url} />
            </div>
        </div>
    )
}

export default ArticleItem
