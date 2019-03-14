export interface MenuStore {
    userinfo?: object|any
    loginVisiable: boolean
    showIcon: boolean
    SelectedKey: string[]
    showIconChange?: () => void
    onCancel?: () => void
    setUserinfo?: (data: any) => void
}
