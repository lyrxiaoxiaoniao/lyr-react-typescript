import React, { Component } from 'react';
import {Button} from 'antd';
import * as styles from '../../index.scss';
import 'antd/lib/button/style/index.less'
@log
class Test extends Component {
  render() {
    return (
    <div className={styles.test}>
      <Button type="primary">ceshi</Button>
    </div>
    );
  }
}

function log(target: any) {
  console.log(target);
}
export default Test;
