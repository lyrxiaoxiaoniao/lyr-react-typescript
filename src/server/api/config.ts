const isPro = process.env.APP_ENV === "prod"
const baseURL = isPro
    ? "http://localhost:3000/api"
    : "http://www.liuyouren.top/api"
export default {
    baseURL
}
