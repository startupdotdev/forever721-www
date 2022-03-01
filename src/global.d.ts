/// <reference types="@sveltejs/kit" />

interface OpenseaDataParse {
  url: string;
  contractAddress: string;
  tokenId: string;
}

interface Nft {
  metadata: NftMetadata;
}

interface NftMetadata {
  image?: string;
}