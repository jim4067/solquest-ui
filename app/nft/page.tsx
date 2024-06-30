import { css } from "@/styled-system/css";
import { container, flex } from "@/styled-system/patterns";
import { Card } from "../ui/components/Card";
import TabRoot, {
	TabContent,
	TabHeader,
	TabHeaderList,
} from "../ui/components/Tabs";

let dummyNFTs = new Array(6).fill({
	title: "#1000",
	collection: "this SOL NFT has a long name",
	image: "https://s3-alpha-sig.figma.com/img/82e9/6d96/cedb304aa33425a560249d862e797ccf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EBj-jpVMfxze01i8eZgieNJDhtvg9GY1WzGmEKlW8TQj5cFJAzdkuO2aIgWnRiLPZjDbHUGv8d~AIX9SFwFdL7NP6tUr41-PnXVyBZzZ-d5z4xapshTCdK8R0WAghwv2mTBLGXxWxaY-4hBSDX~SSvBKfAZJbSap8PHe0gJfXRu5tG9w4tGEYhW9fN6-uQ6SsgWhPG-XbAvTuE07sQ9~TUu66C4vp39n2orFYMigocb2gqG3iARObML1RA0KQR57g4RtAVCUQw6Z3vpbZHkmsWWlpmL4toqeAwZoQXgLH0B6AoGVP389b6YMoZvGbrYGTXHgoWGJAbjESHi8U6gX4A__",
});

export default function NFT() {
	return (
		<section
			className={css({
				backgroundColor: "primaryBackground",
				flex: 1,
			})}
		>
			<section
				className={container({
					display: "flex",
					gap: 10,
					flexDir: "column",
				})}
			>
				<Header />
				{/* <CardList nfts={dummyNFTs} /> */}
				<NFTTabs />
			</section>
		</section>
	);
}

async function Header() {
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
async function Rewards({ label, value }: RewardsProps) {
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

function NFTTabs() {
	return (
		<section>
			<TabRoot defaultTab="staked">
				<TabHeaderList>
					<TabHeader label="Staked" />
					<TabHeader label="Unstaked" />
				</TabHeaderList>
				<TabContent value="Staked">Staked nfts</TabContent>
				<TabContent value="Unstaked">Unstaked NFTs</TabContent>
			</TabRoot>
		</section>
	);
}
