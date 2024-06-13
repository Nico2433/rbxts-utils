import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{
		languageOptions: { globals: globals.node },
		plugins: {
			tseslint,
			eslintPluginPrettierRecommended,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginPrettierRecommended,
	{
		rules: {
			"prettier/prettier": "warn",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-unused-vars": "warn",
		},
	},
];
