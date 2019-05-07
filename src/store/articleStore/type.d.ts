import { ArticleStore as ArticleStoreModel } from "./index"

export as namespace IArticleStore

export interface ArticleStore extends ArticleStoreModel {}

export interface IArticle {
    id?: string | number
    title: string
    content: string
    head_url: string
    [key: string]: any
}
export interface IArticleID {
    id: string | number
}
