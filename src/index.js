import React, { Component } from 'react' ;
import ReactDOM from 'react-dom'

//mutants fx使用
import App from 'mutants-microfx';
import  './style.scss'
import {
  registerRoutes,
  registerStores,
  history
} from 'mutants-microfx';

registerRoutes( [{
  path:'/a',
  component:()=><div>aaa</div>
}]);
registerRoutes( [{
  path:'/b',
  component:()=><div>bbb</div>
}]);

ReactDOM.render(<App />, document.getElementById('app'));

setTimeout(()=>{
  history.push('a')
  setTimeout(()=>{
    history.push('b')
  },2000)
},2000)





 /**
  * 自定义  promise 使用  
  * @step1  解开 index.html  >  <script> window.Promise = undefined;</script>
  * @step2 解开 config/webpack.base.js  >  new promisePlugin()
  * @step3 解开 下边测试代码
  */
// new Promise((resolve)=>{
//   console.log('start')
//   setTimeout(() => {
//     resolve(23432432432)
//   }, 1000);
// }).then((data)=>{
//   console.log('then',data)
// },()=>{})
