import {
	blackWalletIcon,
	LogoDarkTheme,
	LogoLightTheme,
	whiteWalletIcon,
} from "./icons";

export const customAssets = {
	wallet: {
		value: { type: "svg", base: whiteWalletIcon, _dark: blackWalletIcon },
	},

	logo: {
		value: { type: "svg", base: LogoLightTheme, _dark: LogoDarkTheme },
	},

	checkmark: {
		value: { type: "svg", value: "<svg>...</svg>" },
	},
};
