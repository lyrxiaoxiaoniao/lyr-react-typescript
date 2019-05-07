import { observable, action } from "mobx"
export class MenuStore {
    @observable
    userinfo?: object | any = {}
    @observable
    showIcon: boolean = true
    @observable
    loginVisiable: boolean = false
    @observable
    SelectedKey: string[] = []

    @action
    showIconChange = () => {
        this.showIcon = !this.showIcon
    }
    @action
    onCancel = () => {
        this.loginVisiable = !this.loginVisiable
    }
    @action
    setUserinfo = (data: object) => {
        this.userinfo = data
    }
}
export default new MenuStore()
