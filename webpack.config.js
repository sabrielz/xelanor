const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	target: 'web',
	devServer: {
		port: '3000',
		static: ['./public'],
		open: true,
		hot: true,
		liveReload: true,
		historyApiFallback: true,
	}
}