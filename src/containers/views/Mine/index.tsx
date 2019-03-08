import * as React from "react"
import * as style from "./index.scss"
import ArticleItem from "@components/articleItem"
const Mine = (props: any) => {
    return (
        <div className={style.mine}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 123].map(item => (
                    <ArticleItem key={item} list={{ src: 'adasd', title: '测试' }} />
                ))
            }
        </div>
    )
}

export default Mine
