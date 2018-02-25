import * as OfflinePlugin from "offline-plugin";
import * as OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import { resolve } from "path";
import * as postCssCssNext from "postcss-cssnext";
import { Configuration, DefinePlugin, LoaderOptionsPlugin } from "webpack";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const configuration: Configuration & { mode: string } = {
	devServer: {
		contentBase: resolve(__dirname, "./static"),
		historyApiFallback: true,
		noInfo: true
	},
	devtool: IS_PRODUCTION ? false : "cheap-module-eval-source-map",
	entry: {
		app: resolve(__dirname, "./src/front/index.ts")
	},
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				loader: "vue-loader",
				options: {
					extractCSS: false,
					postcss: [postCssCssNext()]
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
				loader: "vue-svg-symbol-loader",
				test: /\.svg$/
			},
			{
				loader: "url-loader?limit=1024",
				test: /\.(eot|ttf|woff|woff2)$/
			},
			{
				loader: "file-loader",
				test: /\.(png|jpg|gif)$/
			}
		]
	},
	output: {
		filename: "app.js",
		path: resolve(__dirname, "./build/front"),
		publicPath: "/assets/"
	},
	performance: {
		hints: false
	},
	plugins: IS_PRODUCTION
		? [
				new OptimizeCssAssetsPlugin(),
				new DefinePlugin({
					"process.env": { NODE_ENV: `"production"` }
				}),
				new LoaderOptionsPlugin({
					minimize: true
				}),
				new OfflinePlugin({
					ServiceWorker: {
						minify: false,
						output: "../sw.js"
					},
					externals: [
						"/index.html",
						"/images/photo.jpeg"
					]
				})
			]
		: [],
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js"
		},
		extensions: [".ts", ".js", ".vue", ".json"]
	}
};

export default configuration;
