const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	devServer: {
		static: path.join(__dirname, 'public'),
		host: '127.0.0.1',
		port: 9000,
	},
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx'],
	},
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'index.[chunkhash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.(le|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								// 仅对.module结尾启用css模块化
								auto: (resourcePath) => /\.module\.(le|c)ss$/.test(resourcePath),
								localIdentName: '[local]_[hash:base64:8]',
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('autoprefixer')],
							},
						},
					},
					'resolve-url-loader',
					{
						loader: 'less-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024, //对文件的大小做限制，1kb
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
		}),
	],
};
