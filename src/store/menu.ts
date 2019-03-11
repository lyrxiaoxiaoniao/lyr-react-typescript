import { observable, action } from "mobx"
export class MenuStore {
    @observable
    showIcon: boolean = true
    @observable
    SelectedKey: string[] = []

    @action
    showIconChange = () => {
        this.showIcon = !this.showIcon
    }
}
export default new MenuStore()
