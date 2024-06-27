 import { flex } from "@/styled-system/patterns";
 import { Stake } from "./components/Stake";

export default function Token() {
	return (
		<section
			className={flex({
				backgroundColor: "primaryBackground",
				flex: 1,
				justifyContent: "center",
 			})}
		>

			<Stake />
		</section>
	);
}
