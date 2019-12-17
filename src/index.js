import React, { Component } from 'react' ;
import ReactDOM from 'react-dom'
// import  './style.scss'

//mutants fx使用
// import App from 'mutants-microfx';
// import {
//   registerRoutes,
//   registerStores,
//   history
// } from 'mutants-microfx';


const css = require('./style.less')
console.log('css===',css); // {String}
// window.css=css

// registerRoutes( [{
//   path:'/',
//   component:()=><div>aaa</div>
// }]);
// registerRoutes( [{
//   path:'/b',
//   component:()=><div>bbb</div>
// }]);

// ReactDOM.render(<App />, document.getElementById('app'));

// setTimeout(()=>{
//   history.push('/a')
//   setTimeout(()=>{
//     history.push('b')
//   },2000)
// },2000)





 /**
  * 自定义  promise 使用  
  * @step1   index.html  >  <script> window.Promise = undefined;</script>
  * @step2  config/webpack.base.js  >  new promisePlugin()
  * @step3  测试代码
  */

new Promise((resolve)=>{
  console.log('start')
  setTimeout(() => {
    resolve(23432432432)
  }, 1000);
}).then((data)=>{
  console.log('then',data)
},()=>{})
