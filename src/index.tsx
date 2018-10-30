import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import './index.scss';
// 解决模块声明问题 这时候我们在根目录下新建一个typings文件夹，用于存放.scss的模块声明，以及后续需要用到的全局校验接口，然后新建typed-css-modules.d.ts文件用于存放.scss模块声明
import * as styles from './index.scss';
import Test from '@components/Test';
const render = () => {
  ReactDOM.render(
    // <div className={styles.test}>123<span className={styles.test2}>678</span></div>
    <Test />,
    document.querySelector('#app')
  );
};

render();
