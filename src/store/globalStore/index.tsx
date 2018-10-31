import { observable, action } from 'mobx';

export class GlobalStore {
  @observable
  num: number = 0;

  @action
  increase = () => {
    this.num++;
  };

  @action
  decrease = () => {
    this.num--;
  };
}
export default new GlobalStore();
