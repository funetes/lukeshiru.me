const { eslintrc } = require("@vangware/base");


module.exports = {
	...eslintrc,
	rules: {
		...eslintrc.rules,
		"react/jsx-key": "off", // Preact doesn't need this
		"react/no-unknown-property": "off", // Preact uses `class` instead of `className`
		"react/prop-types": "off" // This seems to not work with Preact
	}
};
