import { resolve } from "path";
import { tailwindSetup } from "./preact/tailwindSetup";
import { templateSetup } from "./preact/templateSetup";

export default {
	/**
	 * @param {import("webpack").Configuration} webpackConfiguration
	 * @param {Record<string, unknown>} environment
	 * @param {import("./preact").WebpackConfigHelpers} preactWebpackHelpers
	 **/
	webpack: (webpackConfiguration, environment, preactWebpackHelpers) => {
		/* Set entry point ****************************************************/

		// eslint-disable-next-line functional/no-conditional-statement
		if (
			webpackConfiguration &&
			webpackConfiguration.resolve &&
			webpackConfiguration.resolve.alias
		) {
			// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
			webpackConfiguration.resolve.alias[
				"preact-cli-entrypoint"
			] = resolve(process.cwd(), "src", "index");
		}

		templateSetup(webpackConfiguration, preactWebpackHelpers);

		tailwindSetup(webpackConfiguration, environment, preactWebpackHelpers);

		return webpackConfiguration;
	}
};
