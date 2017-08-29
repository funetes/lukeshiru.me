// @ts-check

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");
const {
	DefinePlugin,
	LoaderOptionsPlugin,
	optimize: { CommonsChunkPlugin, UglifyJsPlugin }
} = require("webpack");
const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
	devServer: {
		compress: true,
		contentBase: resolve(__dirname, "./static"),
		historyApiFallback: true,
		noInfo: true
	},
	devtool: IS_PRODUCTION ? "" : "cheap-module-eval-source-map",
	entry: {
		app: resolve(__dirname, "./assets/index.ts"),
		vendor: ["vue", "vuex", "vue-class-component"]
	},
	module: {
		rules: [
			{
				loader: "vue-loader",
				options: {
					extractCSS: true,
					loaders: {
						less: ExtractTextPlugin.extract({
							fallback: "vue-style-loader",
							use: ["css-loader", "less-loader"]
						})
					}
				},
				test: /\.vue$/
			},
			{
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/]
				},
				test: /\.tsx?$/
			},
			{
				loader: "file-loader",
				options: {
					name: "[name].[ext]?[hash]"
				},
				test: /\.(png|jpg|gif|svg)$/
			}
		]
	},
	output: {
		filename: "app.js",
		path: resolve(__dirname, "./static/assets"),
		publicPath: "/assets/"
	},
	performance: {
		hints: false
	},
	plugins: [
		new ExtractTextPlugin("app.css"),
		new CommonsChunkPlugin({
			filename: "vendor.js",
			name: "vendor"
		})
	].concat(
		IS_PRODUCTION
			? [
					new OptimizeCssAssetsPlugin(),
					new DefinePlugin({ "process.env": { NODE_ENV: `"production"` } }),
					new UglifyJsPlugin({
						comments: false,
						sourceMap: false,
						compress: {
							warnings: false
						}
					}),
					new LoaderOptionsPlugin({ minimize: true })
				]
			: []
	),
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js"
		},
		extensions: [".ts", ".js", ".vue", ".json"]
	}
};
