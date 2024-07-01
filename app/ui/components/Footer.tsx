import { flex } from "@/styled-system/patterns";
import { GitHubIcon, HeartIcon } from "@/theme/icons";
import { css } from "@styled-system/css";
import { LogoLg, LogoSm } from "./Logo";
import BottomNav from "./nav/BottomNav";

export default function Footer() {
	return (
		<section
			className={css({
				backgroundColor: "primaryBackground",
				// height: "20vh",
				paddingBottom: 6,
			})}
		>
			<section
				className={flex({
					justifyContent: "center",
					paddingY: 10,
				})}
			>
				<hr
					className={css({
						border: "none",
						bgGradient: "footerDividerGrad",
						height: "2px",
						width: "80vw",
					})}
				/>
			</section>

			<section
				className={flex({
					justifyContent: "center",
					flexDir: "column",
					alignItems: "center",
					gap: 10,
				})}
			>
				<section
					className={css({
						display: { base: "block", mdDown: "none" },
					})}
				>
					<LogoLg />
				</section>

				<section
					className={css({
						display: { base: "none", mdDown: "block" },
					})}
				>
					<LogoSm />
				</section>

				<section className={flex({ gap: 2, flexWrap: "wrap" })}>
					<section
						className={flex({
							gap: 2,
							_hover: {
								cursor: "pointer",
							},
						})}
					>
						<span>
							<GitHubIcon />
						</span>
						<span>Fork Me</span> {/* //fixme: add link to GH */}
					</section>

					<span
						className={css({
							borderColor: "textTertiary",
							borderWidth: "1px",
						})}
					/>

					<section
						className={flex({
							gap: 2,
						})}
					>
						<span>Built with</span>
						<span>
							<HeartIcon />
						</span>
						<span>at Solana Quest</span>
					</section>
				</section>
			</section>

			<section
				className={flex({
					display: { base: "none", smDown: "flex" },
					justifyContent: "center",
					marginY: 10,
				})}
			>
				<BottomNav />
			</section>
		</section>
	);
}
