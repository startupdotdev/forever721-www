/// <reference types="@sveltejs/kit" />

import type { TokenUri } from '@alch/alchemy-web3';

interface OpenseaDataParse {
	url: string;
	contractAddress: string;
	tokenId: string;
}

interface NftId {
	tokenId: string;
}

interface Nft {
	id: NftId;
	metadata: NftMetadata;
	tokenUri: TokenUri;
}

interface NftMetadata {
	name?: string;
	image?: string;
}
