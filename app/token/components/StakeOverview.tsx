import { Button } from "@/app/ui/elements/Button";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { CheckMark, StakeIcon } from "@/theme/icons";
import Image from "next/image";
import sol from "../../../public/solana.png";

type StakeOverviewProps = {
	onClick: () => void;
};

export function StakeOverview({ onClick }: StakeOverviewProps) {
	return (
		<section
			className={flex({
				borderRadius: "18px",
				flexDir: "column",
				gap: 6,
				paddingX: 8,
				paddingY: 6,
				background:
					"token(gradients.blackGradient) padding-box, token(gradients.stakeContainerBorderGrad) border-box",
				border: "2px solid transparent",
			})}
		>
			<OverviewHeading />

			<ApyColumn />

			<StakeInfoColumn />

			<StakeDetailsList />

			<Button onClick={onClick}>
				<span>
					<StakeIcon />
				</span>
				<span>STAKE</span>
			</Button>
		</section>
	);
}

const OverviewHeading = () => {
	return (
		<section
			className={css({
				color: "textPrimary",
				fontSize: "headline24",
				fontWeight: "headline24",
				textAlign: "center",
			})}
		>
			Staking Overview
		</section>
	);
};

const ApyColumn = () => {
	return (
		<section
			className={flex({
				backgroundColor: "primaryBackground",
				borderColor: "textPrimary",
				borderWidth: "1px",
				borderStyle: "solid",
				borderRadius: "15px",
				gap: 4,
				justifyContent: "space-between",
				padding: 4,
			})}
		>
			<section
				className={flex({
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
							fontSize: "regular14",
						})}
					>
						Strategy
					</section>
					<section
						className={flex({
							fontSize: "regular24",
						})}
					>
						Liquid
					</section>
				</section>
			</section>

			<Badge />
		</section>
	);
};

const Badge = () => {
	return (
		<section
			className={flex({
				backgroundColor: "backgroundTertiary",
				borderColor: "textPrimary",
				borderWidth: "1px",
				borderStyle: "solid",
				borderRadius: "15px",
				color: "textPrimary",
				margin: "auto 0",
				paddingX: 2,
				paddingY: 1,
			})}
		>
			7.12% APY
		</section>
	);
};

const StakeInfoColumn = () => {
	return (
		<section
			className={css({
				color: "textSecondary",
				maxW: { base: "40vw", mdDown: "70vw" },
			})}
		>
			Solana staking involves delegating SOL tokens to a selected
			validator while keeping full control over your keys. Validators use
			these as a bond for securing and validating the Solana blockchain,
			distributing rewards to you every epoch (about 2 days).
		</section>
	);
};

const StakeDetailsList = () => {
	return (
		<section
			className={flex({
				color: "textSecondary",
				flexDir: "column",
				gap: 4,
			})}
		>
			<section
				className={flex({
					gap: 4,
				})}
			>
				<span>
					<CheckMark />
				</span>
				<span>Automated stake delegation</span>
			</section>
			<section
				className={flex({
					gap: 4,
				})}
			>
				<span>
					{" "}
					<CheckMark />
				</span>
				<span>Protected staking rewards</span>
			</section>
		</section>
	);
};
