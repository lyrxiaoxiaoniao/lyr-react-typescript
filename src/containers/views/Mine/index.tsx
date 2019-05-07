import * as React from "react"
import * as style from "./index.scss"
import ArticleItem from "@components/articleItem"
import { ComponentExt } from "@utils/reactExt"
import { inject, observer } from "mobx-react"

interface Iprops {
    articleStore: IArticleStore.ArticleStore
}
@inject("articleStore")
@observer
class Mine extends ComponentExt<Iprops> {
    componentDidMount() {
        this.props.articleStore.getList()
    }
    render() {
        const { listData } = this.props.articleStore
        console.log(listData)
        return (
            <div className={style.mine}>
                {listData.map(item => (
                    <ArticleItem key={item.id} list={item} />
                ))}
            </div>
        )
    }
}

export default Mine
