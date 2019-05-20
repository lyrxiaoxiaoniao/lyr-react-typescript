import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import * as style from "./index.scss"
import MarkdownHtml from "@components/MarkdownHtml/index"
import { inject, observer } from "mobx-react"
interface Iprops {
    articleStore: IArticleStore.ArticleStore
    [key: string]: any
}
@inject("articleStore")
@observer
class One extends ComponentExt<Iprops> {
    componentDidMount() {
        const { params } = this.props.match
        const { findArticle } = this.props.articleStore
        findArticle({ id: params.id })
    }
    render() {
        const { article } = this.props.articleStore
        return (
            <div className={style.detail}>
                <MarkdownHtml mdhtml={article.content} />
            </div>
        )
    }
}

export default One
