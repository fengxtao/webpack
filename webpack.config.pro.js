const path = require('path');
const fs = require('fs')
const clearWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const pwd = process.cwd();
const baseConfig=require('./webpack.base');

//config 扩展
let extendConfig={};
let extendConfigPath=path.join(pwd,process.env.extendConfig||'webpack.pro.extendConfig.js');
if( fs.existsSync(extendConfigPath) ){
  extendConfig= require(extendConfigPath);
}

let proConfig={
	//  optimization:{
	// 	splitChunks:{
	// 		chunks: "async",
	// 		minSize: 30000,
	// 		minChunks: 1,
	// 		maxAsyncRequests: 5,
	// 		maxInitialRequests: 3,
	// 		name: true,
	// 		cacheGroups: {
	// 				default: {
	// 						minChunks: 2,
	// 						priority: -20,
	// 						reuseExistingChunk: true,
	// 				},
	// 				vendors: {
	// 						test: /[\\/]node_modules[\\/]/,
	// 						priority: -10
	// 				}
	// 		}
	// 	},
	// 	runtimeChunk: {
	// 		name: 'manifest'
	// 	}
	//  }
	// ,	
	mode:'production',
	plugins: [
		new clearWebpackPlugin(['dist'],{root: pwd}),
	],
};
module.exports = merge(baseConfig,proConfig,extendConfig);