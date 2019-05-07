import { RouterStore } from "mobx-react-router"
export { default as globalStore } from "./globalStore/index"
export { default as menuStore } from "./menu/index"
export { default as articleStore } from "./articleStore/index"
export const routerStore = new RouterStore()
