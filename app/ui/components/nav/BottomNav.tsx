import { flex } from "@styled-system/patterns";
import { NavLinksList } from "./NavLinks";

export default function BottomNav() {
	return (
		<>
			<nav
				className={flex({
					background: "primaryBackground",
					borderWidth: "1px",
					borderRadius: "15px",
					borderColor: "borderPrimary",
					flexDir: "row",
					justifyContent: "space-between",
					width: "fit-content",
					paddingY: 2,
					paddingX: 10,
				})}
			>
				<section
					className={flex({
						margin: "auto 0",
					})}
				>
					<NavLinksList />
				</section>
			</nav>
		</>
	);
}
