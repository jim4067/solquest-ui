"use client";

import { css } from "@/styled-system/css";
import { MoonIcon, MoonIconSM, SunIcon, SunIconSM } from "@/theme/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	console.log("them in toggle", theme);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // Ensures we only render client side

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={css({
				_hover: {
					cursor: "pointer",
				},
			})}
		>
			<span
				className={css({
					display: { base: "none", mdTo2xl: "block", smDown: "none" },
				})}
			>
				{theme === "light" ? <MoonIcon /> : <SunIcon />}
			</span>

			<span
				className={css({
					display: { smOnly: "block", mdTo2xl: "none" },
				})}
			>
				{theme === "light" ? <MoonIconSM /> : <SunIconSM />}
			</span>
		</button>
	);
};

export default ThemeToggle;
