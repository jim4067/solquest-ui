"use client";

import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { useState } from "react";
import { StakeInput } from "./StakeInput";
import { StakeOverview } from "./StakeOverview";

export function Stake() {
	// ui
	const [isStakeInputOpen, setIsStakeInputOpen] = useState(false);

	// input
	let balance = "10"; // todo: update me
	let [stakeAmount, setStakeAmt] = useState("");

	return (
		<section
			className={flex({
				paddingY: 14,
				flexDir: "column",
				gap: 8,
			})}
		>
			<section
				className={css({
					color: "textSecondary",
					fontSize: "headline40",
					fontWeight: "headline40",
					textAlign: "center",
				})}
			>
				Stake
			</section>

			{isStakeInputOpen && (
				<StakeInput
					onChange={({ target: { value } }: any) =>
						setStakeAmt(value)
					}
					balance={balance}
					amtToStake={stakeAmount}
					setMaxAmtToStake={() => setStakeAmt(balance)}
				/>
			)}

			<StakeOverview
				onClick={() =>
					isStakeInputOpen
						? console.log("call this function")
						: setIsStakeInputOpen(!isStakeInputOpen)
				}
			/>
		</section>
	);
}
