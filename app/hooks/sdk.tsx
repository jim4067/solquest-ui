import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

import { AnchorProvider } from "@coral-xyz/anchor";
import { SolquestNFT, SolquestToken } from "@jimii/solquest-sdk";

export const useSolquestSDK = () => {
	const wallet = useAnchorWallet();
	const { connection } = useConnection();

	const [solquestNFT, setSolquestNFT] = useState<SolquestNFT>();
	const [solquestToken, setSolquestToken] = useState<SolquestToken>();
	const [error, setError] = useState<null | unknown>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const instantiateSDK = async () => {
			setIsLoading(true);
			setError(null);

			try {
				if (!wallet) {
					throw new WalletNotConnectedError();
				}

				const provider = new AnchorProvider(
					connection,
					wallet,
					AnchorProvider.defaultOptions()
				);

				if (!provider) return;

				const nftSDK = new SolquestNFT(provider, connection);
				const tokenSDK = new SolquestToken(provider, connection);

				setSolquestNFT(nftSDK);
				setSolquestToken(tokenSDK);
			} catch (err: unknown) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		};

		instantiateSDK();
	}, [connection, wallet]);

	return { solquestNFT, solquestToken, error, isLoading };
};
