"use client";

import { Button } from "@/app/ui/elements/Button";
import { flex } from "@/styled-system/patterns";
import Image from "next/image";

import sol from "../../../public/solana.png";

type StakeInputProps = {
	balance: string;
	onChange: (event: any) => void;
	amtToStake: string;
	setMaxAmtToStake: () => void;
};

export function StakeInput({
	balance,
	onChange,
	amtToStake,
	setMaxAmtToStake,
}: StakeInputProps) {
	return (
		<section
			className={flex({
				background: "backgroundNeutral",
				borderRadius: "18px",
				flexDir: "column",
				gap: 6,
				paddingX: 8,
				paddingY: 6,
				boxShadow:
					"0px 4px 6px -2px #0000000D, 0px 10px 15px -3px #0000001A",
			})}
		>
			<SOLBalanceColumn balance={balance} />
			<InputColumn
				onChange={onChange}
				amtToStake={amtToStake}
				setMaxAmtToStake={setMaxAmtToStake}
			/>
		</section>
	);
}

type SOLBalanceColumnProps = {
	balance: string;
};
export const SOLBalanceColumn = ({ balance }: SOLBalanceColumnProps) => {
	return (
		<section
			className={flex({
				background: "primaryBackground",
				padding: 2,
				borderRadius: "16px",
				gap: 4,
			})}
		>
			<section
				className={flex({
					maxW: "60px",
					height: "60px",
					justifyContent: "center",
				})}
			>
				<Image
					style={{
						height: "60px",
						width: "fit-content",
						objectFit: "cover",
						borderRadius: "16px",
					}}
					src={sol}
					quality={100}
					alt="solana logo"
					objectFit="cover"
				/>
			</section>
			<section
				className={flex({
					color: "textSecondary",
					flexDir: "column",
					justifyContent: "space-between",
				})}
			>
				<section
					className={flex({
						color: "textSecondary",
						fontSize: "regular24",
					})}
				>
					Solana
				</section>
				<section
					className={flex({
						color: "textTertiary",
						fontSize: "regular14",
					})}
				>
					Balance: {balance} SOL
				</section>
			</section>
		</section>
	);
};

type InputColumnProps = {
	onChange: (e: any) => void;
	amtToStake: string;
	setMaxAmtToStake: () => void;
};
export const InputColumn = ({
	onChange,
	amtToStake,
	setMaxAmtToStake,
}: InputColumnProps) => {
	return (
		<section
			className={flex({
				background: "inherit",
				border: "1px solid token(colors.borderPrimary)",
				gap: 4,
				padding: 2,
				flexDir: "column",
				borderRadius: "16px",
				alignItems: "center",
			})}
		>
			<section className={flex({})}>
				<span>
					<input
						type="number"
						className={flex({
							fontSize: "headline40",
							padding: 2,
							gap: 4,
							lineHeight: 0,
							outline: "none",
							textAlign: "center",
							// width: "20vw", //! this will cause all element to shrink
						})}
						value={amtToStake}
						placeholder="0.0 SOL"
						onChange={(event) => onChange(event)}
					/>
				</span>
				{/* <span
					className={flex({
						margin: "auto 0",
					})}
				>
					SOL
				</span> */}
			</section>

			<section
				className={flex({
					fontSize: "regular12",
				})}
			>
				~$0.00
			</section>

			<section>
				<MaxBadge onClick={setMaxAmtToStake} label="max" />
			</section>
		</section>
	);
};

type MaxBadgeProps = {
	label: string;
	onClick: () => void;
};
const MaxBadge = ({ label, onClick }: MaxBadgeProps) => {
	return (
		<button
			onClick={onClick}
			className={flex({
				backgroundColor: "backgroundSecondary",
				borderRadius: "15px",
				color: "textFixedLight  ",
				margin: "auto 0",
				paddingX: 3,
				paddingY: 0.5,
				_hover: {
					cursor: "pointer",
				},
			})}
		>
			{label}{" "}
		</button>
	);
};
