import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
// import { ConnectMenu } from "./ConnectMenu";
import { NavLinkItem, NavLinksList } from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
	return (
		<nav
			className={css({
				background: "primaryBackground",
				padding: 7,
			})}
		>
			<section
				className={flex({
					background: "primaryBackground",
					flexDir: "row",
					justifyContent: "space-between",
				})}
			>
				<section
					className={css({
						fontSize: "x-large", // fixme: place holder
						margin: "auto 0",
						display: { smDown: "none" },
					})}
				>
					SOLANA LOGO
				</section>

				<section
					className={flex({
						margin: "auto 0",
						display: { mdDown: "none" },
					})}
				>
					<NavLinksList />
				</section>
				<section
					className={css({
						display: "flex",
						margin: "auto 0",
					gap: 2
					})}
				>
					<div
						className={flex({
							fontWeight: {
								base: "headline18",
								smDown: "regular14",
							},
							fontSize: {
								base: "headline18",
								smDown: "headline16",
							},
							margin: "auto 0",
						})}
					>
						connect wallet
					</div>
					<div>
						<ThemeToggle />
					</div>
				</section>
			</section>
		</nav>
	);
}
