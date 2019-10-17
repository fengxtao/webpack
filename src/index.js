// import React = require('react') ;
// import ReactDOM = require ('react-dom')
// import fengtao =require('./util/tools.js') 
import React from 'react' ;
import ReactDOM from 'react-dom'
// import './util/tools.js'
import  './style.scss'

import {Alert,Button,Affix,Checkbox} from 'antd'
import {fengtao} from './util/tools.js'
// interface HelloProps { compiler: string; framework: string; }

// // 'HelloProps' describes the shape of props.
// // State is never set so we use the '{}' type.
// class Hello extends React.Component<HelloProps, {}> {
//     render() {
//         return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//     }
// }

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />
//   , document.getElementById('app')
// );


fengtao("taotao")
// console.log("taotao2")
ReactDOM.render(
    <div>
      {/* <Alert message="aaa"/> */}
      <Button> aaa</Button>
      {/* <div>222</div> */}
      {/* <Affix style={{ position: 'absolute'}}>...</Affix>
      <Checkbox>Checkbox</Checkbox> */}
    </div> 
  , document.getElementById('app')
);
