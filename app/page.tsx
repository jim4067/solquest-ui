import { css } from "@/styled-system/css";
import { container, flex } from "@styled-system/patterns";
import Image from "next/image";

import landing from "../public/landing.png";

export default function Main() {
	return (
		<section
			className={css({
				backgroundColor: "primaryBackground",
				color: "textSecondary",
				flex: 1,
			})}
		>
			<section className={container({ marginY: 14, maxW: "70vw" })}>
				<section
					className={flex({
						flexDir: "column",
						gap: 10,
						justifyContent: "center",
						textAlign: "center",
					})}
				>
					<section
						className={css({
							color: "textTertiary",
							fontWeight: "regular14",
							fontSize: "regular14",
						})}
					>
						Challenge #1{" "}
					</section>
					<section
						className={css({
							fontWeight: "headline24",
							fontSize: "headline24",
						})}
					>
						🎟 Decentralized Staking App{" "}
					</section>
					<section
						className={flex({
							maxW: "80vw",
							height: "220px",
							justifyContent: "center",
							// overflow: "hidden",
						})}
					>
						<Image
							style={{
								height: "220px",
								objectFit: "cover",
								borderRadius: "16px",
							}}
							src={landing}
							quality={100}
							alt="background image"
							objectFit="cover"
						/>
					</section>
					<section
						className={flex({
							color: "textSecondary",
							fontSize: "regular14",
							fontWeight: "regular14",
							flexDir: "column",
							gap: 4,
						})}
					>
						<p>
							A superpower of Solana is allowing you, the builder,
							to create a simple set of rules that an adversarial
							group of players can use to work together. In this
							challenge, you create a decentralized application
							where users can coordinate a group funding effort.
							The users only have to trust the code.
						</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&apos;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It
							has survived not only five centuries, but also the
							leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
					</section>
				</section>
			</section>
		</section>
	);
}
