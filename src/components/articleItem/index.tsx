import * as React from "react"
import * as style from "./index.scss"
interface PropsList {
    list: IArticleStore.IArticle
    [key: string]: any
}
const ArticleItem = (props: PropsList) => {
    return (
        <div className={style.articleitem}>
            <div className={style.left}>
                <a href='#' className={style.leftTitle}>
                    {props.list.title}
                </a>
                <div className={style.leftContent}>
                    {props.list.content}
                </div>
                <div className={style.leftTip}>{props.list.createdAt}</div>
            </div>
            <div className={style.right}>
                <img className={style.img} src={props.list.head_url} />
            </div>
        </div>
        // <div className={style.articleitem}>
        //     <div className={style.left}>
        //         <a href="#" className={style.leftTitle}>js 实现上下改变父 div 的高度，左右上下动态分割孩子的宽高js 实现上下改变父 div 的高度，左右上下动态分割孩子的宽高</a>
        //         <div className={style.leftContent}>
        //             We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficientlyto help people create their product prototypes beautifully and efficiently.
        //         </div>
        //         <div className={style.leftTip}>2019-03-08 16:16:30</div>
        //     </div>
        //     <div className={style.right}>
        //         <img src="http://placehold.it/150X110/f5f5f5.png"/>
        //     </div>
        // </div>
    )
}

export default ArticleItem
