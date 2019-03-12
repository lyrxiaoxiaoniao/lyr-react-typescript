/**
 * sessionStorage 存储
 */
class Session {
    private session: Storage
    private prefix: string
    constructor() {
        this.session = window.sessionStorage
        this.prefix = "xl_"
    }
    public set(key:string, value: any) {
        this.session.setItem(this.prefix + key, JSON.stringify(value))
    }
    public get(key:string, fun?: (res:any)=>any):any {
        let value = this.session.getItem(this.prefix + key)
        try {
            value = JSON.parse(value)
            if (!value) value = null
        } catch (e) {
            value = null
        }
        return typeof fun === "function" ? fun.call(this, value) : value
    }
}
export default new Session();
