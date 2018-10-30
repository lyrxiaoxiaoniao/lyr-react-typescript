import React, { Component } from 'react';
@log
class Test extends Component {
  render() {
    return <div>测试</div>;
  }
}

function log(target: any) {
  console.log(target);
}
export default Test;
