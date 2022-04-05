/// <reference types="@sveltejs/kit" />

import type { TokenUri } from '@alch/alchemy-web3';

interface OpenseaDataParse {
	url: string;
	contractAddress: string;
	tokenId: string;
}

interface MetadataId {
	tokenId: string;
}

interface Nft {
	id: MetadataId;
	metadata: NftMetadata;
	tokenUri: TokenUri;
}

interface NftMetadata {
	name?: string;
	image?: string;
}
