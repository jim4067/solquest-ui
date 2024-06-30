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
                // background: ""
				_selected: {
                    background: "backgroundSecondary",
					color: "token(colors.primaryText)",
					textDecoration: "underline",
					textUnderlineOffset: 8,
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
				gap: 4,
				overflowX: "scroll",
				"&::-webkit-scrollbar": {
					visibility: "hidden",
				},
				scrollbarWidth: "unset !important",
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
