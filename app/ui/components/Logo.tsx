"use client";

import {
	LogoDarkTheme,
	LogoDarkThemeLg,
	LogoLightTheme,
	LogoLightThemeLg,
} from "@/theme/icons";
import { useTheme } from "next-themes";

export const LogoLg = () => {
	const { theme } = useTheme();

	return (
		<section>
			{theme === "light" ? <LogoDarkThemeLg /> : <LogoLightThemeLg />}
		</section>
	);
};

export const LogoSm = () => {
	const { theme } = useTheme();

	return (
		<section>
			{theme === "light" ? <LogoDarkTheme /> : <LogoLightTheme />}
		</section>
	);
};
