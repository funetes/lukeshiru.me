import postCSSPurgeCSS from "@fullhuman/postcss-purgecss";
import autoPrefixer from "autoprefixer";
import tailwindCSS from "tailwindcss";

/**
 * Tailwind and Purge CSS setup.
 * @param {import("webpack").Configuration} webpackConfiguration
 * @param {Record<string, unknown>} environment
 * @param {import("../preact").WebpackConfigHelpers} preactWebpackHelpers
 **/
export const tailwindSetup = (
	webpackConfiguration,
	environment,
	preactWebpackHelpers
) =>
	preactWebpackHelpers
		.getLoadersByName(webpackConfiguration, "postcss-loader")
		.forEach(postCSSLoader => {
			// eslint-disable-next-line functional/no-conditional-statement
			if (
				typeof postCSSLoader.loader !== "string" &&
				postCSSLoader.loader.options
			) {
				// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
				postCSSLoader.loader.options.plugins = [
					tailwindCSS,
					autoPrefixer,
					...postCSSLoader.loader.options.plugins,
					...(environment.production
						? [
								postCSSPurgeCSS({
									content: [
										"./src/**/*.tsx",
										"./src/**/*.js",
										"./src/**/*.html"
									],
									defaultExtractor: content => {
										const broadMatches =
											content.match(
												/[^<>"'`\s]*[^<>"'`\s:]/gu
											) || [];

										const innerMatches =
											content.match(
												/[^<>"'`\s.()]*[^<>"'`\s.():]/gu
											) || [];

										return [
											...broadMatches,
											...innerMatches
										];
									}
								})
						  ]
						: [])
				];
			}
		});
