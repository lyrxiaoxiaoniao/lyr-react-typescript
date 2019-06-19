const isDev = process.env.NODE_ENV === "development"
const uri = process.env.NODE_ENV === "development" ? "http://192.168.40.156:3000/api" : "http://www.liuyouren.top/api"
export default {
    // baseURL: "http://localhost:3000/api"
    baseURL: uri
    // baseURL: "http://www.liuyouren.top/api"
}
