import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { LogoLg } from "../Logo";
import ConnectWalletBtn from "./ConnectBtn";
import { NavLinksList } from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
	return (
		<nav
			className={css({
				background: "primaryBackground",
				// paddingTop: 10,
				// paddingX: 7,
				padding: "2.9rem 1.75rem 8rem 1.75rem",
			})}
		>
			<section
				className={flex({
					background: "primaryBackground",
					flexDir: "row",
					justifyContent: "space-between",
					flexWrap: "wrap",
				})}
			>
				<section
					className={css({
						margin: "auto 0",
						display: { mdDown: "none" },
						_hover: {
							cursor: "pointer",
						},
					})}
				>
					<LogoLg />
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
						gap: 2,
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
						<ConnectWalletBtn />
					</div>
					<div>
						<ThemeToggle />
					</div>
				</section>
			</section>
		</nav>
	);
}
