import env from '$lib/constants/env';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';

/** @type {import('./[id]').RequestHandler} */
export async function get({ url }) {
	// TODO: better error handling here
	const contractAddress = url.searchParams.get('contractAddress');
	const tokenId = url.searchParams.get('tokenId');

	const web3 = createAlchemyWeb3(`https://eth-mainnet.alchemyapi.io/v2/${env.alchemyApiKey}`);

	const result = await web3.alchemy.getNftMetadata({
		contractAddress: contractAddress,
		tokenId: tokenId
	});

	return {
		status: 200,
		body: {
			alchemyResponse: result
		}
	};
}
