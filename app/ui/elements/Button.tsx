import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

type ButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => (
	<section
		className={css({
			background:
				"token(gradients.btnBackgroundGradient) padding-box, token(gradients.btnBorderGradient) border-box",
			border: "1.5px solid transparent",
			borderRadius: "100px",
			height: "48px",
			overflow: "hidden",
		})}
	>
		<button
			className={flex({
				bgGradient: "btnBackgroundGradient",
				height: "100%",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				width: "100%",
				_hover: {
					bgGradient: "blackGradient",
					cursor: "pointer",
				},
			})}
			onClick={onClick}
		>
			{children}
		</button>
	</section>
);
