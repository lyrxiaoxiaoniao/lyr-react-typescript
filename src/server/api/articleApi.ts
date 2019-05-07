import { Ajax } from "@server/axios"
export default {
    // 列表
    articleListGET(): Promise<any> {
        return Ajax.get("/pc/article/list")
    },
    // 查询
    articleFindGET(data: IArticleStore.IArticleID): Promise<any> {
        return Ajax.get("/pc/article/find", data)
    }
}
