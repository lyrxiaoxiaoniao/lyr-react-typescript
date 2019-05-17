import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
// import * as style from "./index.scss"
import ArticleItem from "@components/articleItem"
import { inject, observer } from "mobx-react"
interface Iprops {
    articleStore: IArticleStore.ArticleStore
    routerStore: RouterStore
}
@inject("articleStore", "routerStore")
@observer
class Mine extends ComponentExt<Iprops> {
    public child: any = undefined
    componentDidMount() {
        this.props.articleStore.getList()
    }
    handleClick = (id: number) => {
        const { history } = this.props.routerStore
        history.push({
            pathname: `/detail/${id}`,
            state: { value: 123 }
        })
    }
    render() {
        const { listData } = this.props.articleStore
        return (
            <div>
                {listData.map(item => (
                    <ArticleItem
                        key={item.id}
                        list={item}
                        click={this.handleClick}
                    />
                ))}
            </div>
        )
    }
}
export default Mine
