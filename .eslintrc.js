const { eslint } = require("@vangware/base");


module.exports = {
	...eslint,
	rules: {
		...eslint.rules,
		"react/jsx-key": "off", // Preact doesn't need this
		"react/no-unknown-property": "off", // Preact uses `class` instead of `className`
		"react/prop-types": "off", // This seems to not work with Preact
		"react/jsx-max-depth": ["error", { max: 5 }], // Let's go deeper!
	}
};
