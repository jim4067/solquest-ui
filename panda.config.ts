import { defineConfig } from "@pandacss/dev";
import { colours } from "./theme/colors";
import { fontSizes, fontWeights } from "./theme/font";
import { gradients } from "./theme/gradients";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
	],

	// Files to exclude
	exclude: [],

	conditions: {
		// light: "[data-color-mode=light] &",
		// dark: "[data-color-mode=dark] &",
		dark: ".dark &",
		light: ".light &",
	},

	// Useful for theme customization
	theme: {
		extend: {
			semanticTokens: {
				colors: colours,
				gradients,
				fontSizes,
				fontWeights,
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
	jsxFramework: "react",
});
