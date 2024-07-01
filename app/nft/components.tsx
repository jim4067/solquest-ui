"use client";

import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { Card } from "../ui/components/Card";
import TabRoot, {
	TabContent,
	TabHeader,
	TabHeaderList,
} from "../ui/components/Tabs";
import { SelectAllBtn, StakeBtn } from "../ui/elements/Button";

export function Header() {
	return (
		<section
			className={flex({
				flexDir: "column",
				gap: 2,
			})}
		>
			<section
				className={flex({
					justifyContent: "space-between",
					flexWrap: "wrap",
					gap: 8,
				})}
			>
				<section
					className={css({
						color: "textSecondary",
						fontSize: "headline40",
						whiteSpace: "nowrap",
					})}
				>
					NFT Staking
				</section>
				<section
					className={flex({
						gap: 4,
					})}
				>
					<Rewards label="Claimable Rewards" value="93.47 FORGE" />
					<span
						className={css({
							borderColor: "borderTertiary",
							borderWidth: "0.5px",
						})}
					/>
					<Rewards label="Daily Rewards" value="30 FORGE" />
				</section>
			</section>
			<section>
				<hr
					className={css({
						borderColor: "borderTertiary",
						borderWidth: "0.5px",
					})}
				/>
			</section>
		</section>
	);
}

type RewardsProps = {
	label: string;
	value: string;
};
export function Rewards({ label, value }: RewardsProps) {
	return (
		<section>
			<section
				className={css({
					color: "textTertiary",
					fontSize: "regular14",
				})}
			>
				{label}
			</section>
			<section
				className={css({
					color: "textSecondary",
					fontSize: "regular24",
				})}
			>
				{value}
			</section>
		</section>
	);
}

type CardListProps = {
	nfts: Array<{
		title: string;
		image: string;
		collection?: string;
	}>;
};
function CardList({ nfts }: CardListProps) {
	return (
		<section
			className={flex({
				gap: 12,
				justifyContent: "space-between",
				flexWrap: "wrap",
			})}
		>
			{nfts.map((nft, index) => (
				<Card
					key={index}
					title={nft.title}
					collection={nft.collection ?? ""}
					image={nft.image}
				/>
			))}
		</section>
	);
}

export function NFTTabs({ nfts }: CardListProps) {
	return (
		<section>
			<TabRoot defaultTab="Staked">
				<TabHeaderList>
					<section className={flex({ gap: 4 })}>
						<TabHeader label="Staked" />
						<TabHeader label="Unstaked" />
					</section>
					<section className={flex({ gap: 4, margin: "auto 0" })}>
						<SelectAllBtn
							onClick={() => console.log("select all button")}
						/>
						<StakeBtn onClick={() => console.log("stake button")} />
					</section>
				</TabHeaderList>
				<TabContent value="Staked">
					<CardList nfts={nfts} />
				</TabContent>
				<TabContent value="Unstaked">
					<CardList nfts={nfts} />
				</TabContent>
			</TabRoot>
		</section>
	);
}
