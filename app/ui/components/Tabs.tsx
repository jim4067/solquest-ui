import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { ReactNode } from "react";

import { Tabs } from "@ark-ui/react";

type TabRootProps = {
	children: ReactNode;
	defaultTab: string;
};
export default function TabRoot({ children, defaultTab }: TabRootProps) {
	return <Tabs.Root defaultValue={defaultTab}>{children}</Tabs.Root>;
}

type TabHeaderProps = {
	label: string;
};
export function TabHeader({ label }: TabHeaderProps) {
	return (
		<Tabs.Trigger
			className={css({
				color: "token(colors.accentLight)",
				_selected: {
					background: "backgroundSecondary",
					borderRadius: "16px",
					color: "textFixedLight",
					padding: "8px 16px ",
				},
				_hover: {
					cursor: "pointer",
				},
			})}
			value={label}
		>
			{label}
		</Tabs.Trigger>
	);
}

type TabHeaderListProps = {
	children: ReactNode;
};
export function TabHeaderList({ children }: TabHeaderListProps) {
	return (
		<section
			className={flex({
				fontSize: "headline18",
				fontWeight: "headline18",
				gap: 4,
				justifyContent: "space-between",
				overflowX: "scroll",
				"&::-webkit-scrollbar": {
					visibility: "hidden",
				},
				scrollbarWidth: "unset !important",
				mb: 6,
			})}
		>
			{children}
		</section>
	);
}

type TabContentProps = {
	value: string;
	children: ReactNode;
};
export function TabContent({ value, children }: TabContentProps) {
	return <Tabs.Content value={value}>{children}</Tabs.Content>;
}
