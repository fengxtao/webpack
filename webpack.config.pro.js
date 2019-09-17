const path = require('path');
const webpack =require('webpack') ;
const clearWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')

const baseUrl=path.resolve(__dirname);
const baseConfig=require('./webpack.base');
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
		new clearWebpackPlugin(['dist'],{root: baseUrl}),
		new webpack.DefinePlugin({
            'a2': '__DEV__2'
        })
	],
};
module.exports = merge(baseConfig,proConfig);