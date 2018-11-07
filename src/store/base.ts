import { observable, action } from "mobx"

export class BaseStore {
    @observable
    is_loading: boolean

    constructor() {
        this.is_loading = false
    }

    @action
    changeLoading(is_loading: boolean) {
        this.is_loading = is_loading
    }
}
