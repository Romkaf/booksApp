const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: { main: './index.js' },
	output: {
		filename: isProd ? '[name].js' : '[name].[contenthash:7].js',
		path: path.join(__dirname, 'dist'),
	},
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@models': path.resolve(__dirname, 'src/models'),
		},
	},
	optimization: {
		minimizer: isProd
			? [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()]
			: [],
	},
	devServer: {
		port: 4200,
		open: true,
		hot: isDev,
	},
	devtool: isDev ? 'source-map' : false,
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.ico'),
					to: path.resolve(__dirname, 'dist'),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: isProd ? '[name].css' : '[name].[contenthash:7].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['eslint-loader', 'babel-loader'],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								compileType: 'module',
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
					},
				],
			},
			{
				test: /\.(woff|woff2)$/,
				use: ['file-loader'],
			},
		],
	},
};
