// 带时间的本地存储获取
class LocStorage {
    private storage: Storage
    private prefix: string
    constructor() {
        this.storage = window.localStorage
        this.prefix = "jf_"
    }

    set(key:string, value:any) {
        this.storage.setItem(this.prefix + key, JSON.stringify(value))
    }

    get(key:string, fun?:(res:any)=>void):any {
        let value:any = this.storage.getItem(this.prefix + key)
        try {
            value = JSON.parse(value)
            if (!value && (value !== false && value !== 0)) value = null
        } catch (e) {
            value = null
        }
        return typeof fun === "function" ? fun.call(this, value) : value
    }
    setTime(key:string, value:any, time:number = 24) {
        const H = Number(time) * 3600000 // 默认24小时
        const now = new Date().getTime() + H
        const data = JSON.stringify({ time: String(now), value })

        this.storage.setItem(this.prefix + key, data)
    }
    getTime(key: string, fun?: (res: any) => void): any {
        let value = null
        let data = null
        try {
            data = this.storage.getItem(this.prefix + key) || null // 获取储存
            value = data ? JSON.parse(data) : null
            if (!value) {
                return null
            }
            if (value.value && !value.time) {
                console.error("获取的存储没有time字段!使用get方法!")
                return null
            }

            const now = new Date().getTime() // 当前时间

            if (Number(value.time) < now) {
                this.storage.removeItem(this.prefix + key)
                return null
            }
        } catch (e) {
            value = {}
        }
        return typeof fun === "function"
            ? fun.call(this, value.value)
            : value.value
    }
    remove(key:string) {
        this.storage.removeItem(this.prefix + key)
    }
    each(fun:(key:string,val:any)=>void) {
        let data = this.storage
        let val = null
        for (const k in data) {
            if (data.hasOwnProperty(k)) {
                try {
                    val = JSON.parse(data[k])
                    if (val.time) val = val.value
                    fun && fun(k, val)
                } catch (error) {
                    console.error(error + "--请使用 Storage 存储")
                }
            }
        }
    }
}
export default new LocStorage()
