const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./app/app.js',
	],
	output: {
		path: './build',
		filename: "bundle.js"
	},
	devtool: 'eval-source-map',
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	module: {
		loaders: [
			{ test: /\.jsx|\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
			{
				test: /\.jsx|\.js$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader?' +  JSON.stringify({presets: ['es2015', 'react']}),
				]
			},
			{
				test: /\.css$/,
				include: /stylesheets/,
				loader: 'style!css?outputStyle=expanded'
			},
			{
				test: /\.scss$/,
				include: /stylesheets/,
				loader: 'style!css!sass?outputStyle=expanded'
			},
			{
				test: /\.(jpg|png|gif|eot|woff|ttf|svg)/,
				loader: "file"
			}
		]
	},
	devServer: {
		contentBase: "./build",
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),
		devFlagPlugin,
		new webpack.NoErrorsPlugin()
	]

};
