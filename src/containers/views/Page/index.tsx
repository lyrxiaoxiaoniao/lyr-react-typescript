import * as React from "react"
import { ComponentExt } from "@utils/reactExt"
import ArticleItem from "@components/articleItem"
import { inject, observer } from "mobx-react"
import * as styles from './index.scss'
interface Iprops {
    articleStore: IArticleStore.ArticleStore
    routerStore: RouterStore
}
@inject("articleStore", "routerStore")
@observer
class Page extends ComponentExt<Iprops> {
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
            <div className={styles.pContent}>
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
export default Page
