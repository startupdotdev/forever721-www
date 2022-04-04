import type { Nft } from 'src/global';

async function getAlchemyResponse(contractAddress: string, tokenId: string): Promise<Nft> {
	// TODO: better error handling here
	const paramsString: string = `contractAddress=${contractAddress}&tokenId=${tokenId}`;
	const response: Response = await fetch(`api/data?${paramsString}`);
	const { alchemyResponse } = await response.json();

	const nft: Nft = alchemyResponse;
	return nft;
}

export async function getNftMetadata(contractAddress: string, tokenId: string): Promise<Nft> {
	const alchemyResponse: Nft = await getAlchemyResponse(contractAddress, tokenId);
	return alchemyResponse;
}

export async function getNftTokenUri(contractAddress: string, tokenId: string): Promise<string> {
	const alchemyResponse: Nft = await getAlchemyResponse(contractAddress, tokenId);

	console.log('alchemyResponse', alchemyResponse);

	// TODO: probably better error handling here
	return alchemyResponse.tokenUri.raw;
}
