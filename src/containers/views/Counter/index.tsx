import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import { ComponentExt } from '@utils/reactExt';
import { hot } from 'react-hot-loader';

interface IProps {
  globalStore?: IGlobalStore.GlobalStore;
}
@hot(module)
@inject('globalStore')
@observer
export default class Counter extends ComponentExt<IProps> {
  increase = () => {
    this.props.globalStore.increase();
  };
  decrease = () => {
    this.props.globalStore.decrease();
  };

  render() {
    console.log(this.props);
    const { num } = this.props.globalStore;
    return (
      <div>
        <div>{num}</div>
        <Button onClick={this.increase}>增加</Button>
        <Button onClick={this.decrease}>减少--</Button>
      </div>
    );
  }
}
