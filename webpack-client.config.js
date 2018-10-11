const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const rootDir = path.join(__dirname, './');
const srcDir = path.join(__dirname, './src/');
const serverDir = path.join(__dirname, './src/server/');
const appDir = path.join(__dirname, './src/client/');

module.exports = {
	target: 'mopde',
	mode: 'development',
	entry: {
		server: serverDir + 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	output: {
    filename: '[name].js',
    path: rootDir + '/.built'
	},
	externals: [nodeExternals()]
}