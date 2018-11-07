export interface BaseStore {
    is_loading: boolean
    changeLoading: (is_loading: boolean) => void
}
