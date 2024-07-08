"use client";

import {
	DigitalAsset,
	fetchAllDigitalAssetByOwner,
} from "@metaplex-foundation/mpl-token-metadata";

import { isSome, publicKey as UmiPublicKey } from "@metaplex-foundation/umi";

import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useUmi } from "../hooks/umi";
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
	nfts: Array<Partial<DigitalAsset & { image: string; name: string }>>;
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
			{nfts?.map((nft, index) => (
				<Card
					key={index}
					title={nft?.name ?? "unknown"}
					collection={nft?.metadata?.name ?? ""}
					// collection={nft.metadata.collection ?? ""}
					image={nft?.image ?? ""}
				/>
			))}
		</section>
	);
}

let staked = new Array(6).fill({
	title: "#1000",
	collection: "this SOL NFT has a long name",
	image: "https://s3-alpha-sig.figma.com/img/82e9/6d96/cedb304aa33425a560249d862e797ccf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EBj-jpVMfxze01i8eZgieNJDhtvg9GY1WzGmEKlW8TQj5cFJAzdkuO2aIgWnRiLPZjDbHUGv8d~AIX9SFwFdL7NP6tUr41-PnXVyBZzZ-d5z4xapshTCdK8R0WAghwv2mTBLGXxWxaY-4hBSDX~SSvBKfAZJbSap8PHe0gJfXRu5tG9w4tGEYhW9fN6-uQ6SsgWhPG-XbAvTuE07sQ9~TUu66C4vp39n2orFYMigocb2gqG3iARObML1RA0KQR57g4RtAVCUQw6Z3vpbZHkmsWWlpmL4toqeAwZoQXgLH0B6AoGVP389b6YMoZvGbrYGTXHgoWGJAbjESHi8U6gX4A__",
});

export function NFTTabs() {
	const { publicKey } = useWallet();
	const { umiInstance } = useUmi();

	const [userAssets, setUserAssets] = useState<any>();

	const fetchAssets = useCallback(async () => {
		if (!publicKey || !umiInstance) {
			return;
		}

		const digitalAssets = await fetchAllDigitalAssetByOwner(
			umiInstance,
			UmiPublicKey(publicKey)
		);

		// filter out collections
		const res = await Promise.all(
			digitalAssets
				.filter((asset) => isSome(asset.metadata.collection))
				.map(async (asset) => {
					const offChainData = (await axios.get(asset.metadata.uri))
						.data;
					return {
						image: offChainData.image,
						name: offChainData.name,
						asset,
						offChainData,
					};
				})
		);

		return res;
	}, [publicKey, umiInstance]);

	useEffect(() => {
		if (!publicKey || !umiInstance) {
			return;
		}

		fetchAssets()
			.then((res) => setUserAssets(res))
			.catch(console.error);
	}, [fetchAssets, publicKey, umiInstance]);

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
					<CardList nfts={staked} />
				</TabContent>
				<TabContent value="Unstaked">
					<CardList nfts={userAssets} />
				</TabContent>
			</TabRoot>
		</section>
	);
}
