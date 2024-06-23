
import { css } from "@/styled-system/css";

export default function NFT() {
	return (
		<section
			className={css({
				backgroundColor: "primaryBackground",
				flex: 1,
			})}
		>
			<div className={css({ fontSize: "9xl", fontWeight: "bold" })}>
				Hello 🐼!
			</div>
		</section>
	);
}
