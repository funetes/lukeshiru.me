import { linkTagsHTML } from "./linkTagsHTML";
import { metaTagsHTML } from "./metaTagsHTML";
import { openGraphHTML } from "./openGraphHTML";

/**
 * Add some variables to the template.
 * @param {import("webpack").Configuration} webpackConfiguration
 * @param {import("../preact").WebpackConfigHelpers} preactWebpackHelpers
 **/
export const templateSetup = (webpackConfiguration, preactWebpackHelpers) =>
	preactWebpackHelpers
		.getPluginsByName(webpackConfiguration, "HtmlWebpackPlugin")
		.forEach(({ plugin }) => {
			plugin.options.templateParameters = (
				compilation,
				assets,
				options
			) => ({
				compilation: compilation,
				webpack: compilation.getStats().toJson(),
				webpackConfig: compilation.options,
				htmlWebpackPlugin: {
					files: assets,
					options: options
				},
				metaTags: metaTagsHTML,
				openGraph: openGraphHTML,
				linkTags: linkTagsHTML
			});
		});
