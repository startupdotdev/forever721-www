/// <reference types="@sveltejs/kit" />

import type { TokenUri } from '@alch/alchemy-web3';

interface OpenseaDataParse {
	url: string;
	contractAddress: string;
	tokenId: string;
}

interface Nft {
	metadata: NftMetadata;
	tokenUri: TokenUri;
}

interface NftMetadata {
	name?: string;
	image?: string;
}
