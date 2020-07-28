/* eslint-disable functional/no-mixed-type */

import webpack, { Configuration, Loader, Rule } from "webpack";

/**
 * Wrapper around webpack's loader entry.
 */
declare type LoaderWrapper = {
	/** Webpack rule. */
	readonly rule: Rule;
	/** Index of rule in config. */
	readonly ruleIndex: number;
	/** Webpack loader. */
	readonly loader: Loader;
	/** Index of loader in rule. */
	readonly loaderIndex: number;
};

/**
 * Wrapper around Webpack's plugin.
 */
declare type PluginWrapper = {
	/** Index of plugin in config. */
	readonly index: number;
	/** Webpack plugin. */
	readonly plugin: Record<string, any>;
};

/**
 * Wrapper around Webpack's rule.
 */
declare type RuleWrapper = {
	/** Webpack rule. */
	readonly rule: Rule;
	/** Index of rule in config. */
	readonly ruleIndex: number;
};

declare type WebpackConfigHelpers = {
	/**
	 * Webpack module used to create config.
	 */
	readonly webpack: typeof webpack;

	/**
	 * Returns wrapper around all loaders from config.
	 */
	readonly getLoaders: (config: Configuration) => readonly LoaderWrapper[];

	/**
	 * Returns wrapper around all rules from config.
	 */
	readonly getRules: (config: Configuration) => readonly RuleWrapper[];

	/**
	 * Returns wrapper around all plugins from config.
	 */
	readonly getPlugins: (config: Configuration) => readonly PluginWrapper[];

	/**
	 * @param file - path to test against loader. Resolved relatively to $PWD.
	 */
	readonly getRulesByMatchingFile: (
		config: Configuration,
		file: string
	) => readonly RuleWrapper[];

	/**
	 * Returns loaders that match provided name.
	 *
	 * @example
	 * helpers.getLoadersByName(config, 'less-loader')
	 * @param name - name of loader.
	 */
	readonly getLoadersByName: (
		config: Configuration,
		name: string
	) => readonly LoaderWrapper[];

	/**
	 * Returns plugins that match provided name.
	 *
	 * @example
	 * helpers.getPluginsByName(config, 'HtmlWebpackPlugin')
	 * @param name - name of loader.
	 */
	readonly getPluginsByName: (
		config: Configuration,
		name: string
	) => readonly PluginWrapper[];

	/**
	 * Returns plugins that match provided type.
	 *
	 * @example
	 * helpers.getPluginsByType(config, webpack.optimize.CommonsChunkPlugin)
	 * @param type - type of plugin.
	 */
	readonly getPluginsByType: <Type>(
		config: Configuration,
		type: Type
	) => readonly PluginWrapper[];

	/**
	 * Sets template used by HtmlWebpackPlugin.
	 * @param template - template path.
	 */
	// eslint-disable-next-line functional/no-return-void
	readonly setHtmlTemplate: (config: Configuration, template: string) => void;
};
