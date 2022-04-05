import type { OpenseaDataParse } from 'src/global';

export function parseOpenseaUrl(url: string): OpenseaDataParse | null {
	// https://opensea.io/assets/:nftContractAddress/:tokenId
	let openseaAddressAndIdRe = /https:\/\/opensea.io\/assets\/(\w*)\/(\w*)/g;

	try {
		let [_, address, id] = openseaAddressAndIdRe.exec(url);

		console.log('result', address, id);

		if (address && id) {
			return {
				url: url,
				contractAddress: address,
				tokenId: id
			};
		} else {
			return null;
		}
	} catch (error) {
		return null;
	}
}
