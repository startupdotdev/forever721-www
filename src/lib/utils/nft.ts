import type { Nft } from 'src/global';

export function nftName(nft: Nft): string {
	return nft?.metadata?.name || `#${nft?.id?.tokenId}`;
}
