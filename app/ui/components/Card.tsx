import { flex } from "@/styled-system/patterns";
import { GitHubIcon, HeartIcon } from "@/theme/icons";
import { css } from "@styled-system/css";
import Image from "next/image";
import { CSSProperties } from "react";

type CardPops = {
	image: string;
	title: string;
	collection: string;
	onClick: () => void;
	isSelected: boolean;
	style?: CSSProperties;
};

export const Card = ({
	image,
	title,
	collection,
	onClick,
	isSelected,
	style,
}: CardPops) => {
	return (
		<section className={flex({ flexDir: "column", gap: 4 })} style={style}>
			<section
				className={flex({
					maxW: "220px",
					height: "220px",
					justifyContent: "center",
					opacity: isSelected ? 1 : 0.8,
					_hover: {
						cursor: "pointer",
						opacity: 1,
					},
				})}
				onClick={onClick}
			>
				<Image
					style={{
						height: "220px",
						width: "fit-content",
						objectFit: "cover",
						borderRadius: "16px",
					}}
					src={image}
					quality={100}
					width={220}
					height={220}
					alt="solana logo"
					objectFit="cover"
				/>
			</section>
			<section
				className={flex({
					justifyContent: "space-between",
					maxW: "220px",
				})}
			>
				<span
					className={css({
						color: "textSecondary",
						textOverflow: "ellipsis",
						textWrap: "pretty",
					})}
				>
					{collection}
				</span>
				<span
					className={css({
						color: "textTertiary",
						textOverflow: "ellipsis",
						// whiteSpace: "nowrap",
						textWrap: "pretty",
					})}
				>
					{isSelected ? "will be staked" : title}
				</span>
			</section>
		</section>
	);
};
