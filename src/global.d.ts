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
  name?: string;
  image?: string;
}

// TODO: Export this from forever721 package 

interface Grade {
  grade: GradeLetter;
  reasons: Reason[];
}

interface Reason {
  id: string;
  severity: Severity;
  message: string;
}