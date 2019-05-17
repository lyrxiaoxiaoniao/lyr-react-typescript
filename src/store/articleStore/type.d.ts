import { ArticleStore as ArticleStoreModel } from "./index"

export as namespace IArticleStore

export interface ArticleStore extends ArticleStoreModel {}

export interface IArticle {
    id?: string | number
    title: string
    content: string
    head_url: string
    Tags?: Array<any>
    User?: Iuser
    [key: string]: any
}
interface Iuser {
    username: string
}

export interface IArticleID {
    id: string | number
}
