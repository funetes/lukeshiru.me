// @ts-check

const cssNext = require("postcss-cssnext");
const OfflinePlugin = require("offline-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");
const { DefinePlugin, LoaderOptionsPlugin, optimize: { CommonsChunkPlugin, UglifyJsPlugin } } = require("webpack");
const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
	devServer: {
		compress: true,
		contentBase: resolve(__dirname, "./src/front"),
		historyApiFallback: true,
		noInfo: true
	},
	devtool: IS_PRODUCTION ? "" : "cheap-module-eval-source-map",
	entry: {
		app: resolve(__dirname, "./src/front/index.ts")
	},
	module: {
		rules: [
			{
				loader: "vue-loader",
				options: {
					extractCSS: false,
					postcss: [cssNext()]
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
		path: resolve(__dirname, "./dist/front"),
		publicPath: "/assets/"
	},
	performance: {
		hints: false
	},
	plugins: [].concat(
		IS_PRODUCTION
			? [
					new OptimizeCssAssetsPlugin(),
					new DefinePlugin({ "process.env": { NODE_ENV: `"production"` } }),
					new UglifyJsPlugin({
						comments: false,
						sourceMap: false,
						compress: {
							warnings: false,
							drop_console: true,
							drop_debugger: true
						}
					}),
					new LoaderOptionsPlugin({ minimize: true }),
					new OfflinePlugin({
						externals: ["/index.html"],
						ServiceWorker: {
							output: "../sw.js"
						}
					})
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
