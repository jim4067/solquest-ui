import { css } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";

import { Header, NFTTabs } from "./components";

export default function NFT() {
	let dummyNFTs = new Array(6).fill({
		title: "#1000",
		collection: "this SOL NFT has a long name",
		image: "https://s3-alpha-sig.figma.com/img/82e9/6d96/cedb304aa33425a560249d862e797ccf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EBj-jpVMfxze01i8eZgieNJDhtvg9GY1WzGmEKlW8TQj5cFJAzdkuO2aIgWnRiLPZjDbHUGv8d~AIX9SFwFdL7NP6tUr41-PnXVyBZzZ-d5z4xapshTCdK8R0WAghwv2mTBLGXxWxaY-4hBSDX~SSvBKfAZJbSap8PHe0gJfXRu5tG9w4tGEYhW9fN6-uQ6SsgWhPG-XbAvTuE07sQ9~TUu66C4vp39n2orFYMigocb2gqG3iARObML1RA0KQR57g4RtAVCUQw6Z3vpbZHkmsWWlpmL4toqeAwZoQXgLH0B6AoGVP389b6YMoZvGbrYGTXHgoWGJAbjESHi8U6gX4A__",
	});

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
				<NFTTabs nfts={dummyNFTs} />
			</section>
		</section>
	);
}
