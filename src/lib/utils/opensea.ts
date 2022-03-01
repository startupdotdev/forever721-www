
export function parseOpenseaUrl(url: string): OpenseaDataParse | null {
  // https://opensea.io/assets/:nftContractAddress/:tokenId
  let openseaAddressAndIdRe = /https:\/\/opensea.io\/assets\/(\w*)\/(\w*)/g;
  let [_, address, id] = openseaAddressAndIdRe.exec(url);

  if (address && id) {
    return {
      url: url,
      contractAddress: address,
      tokenId: id
    };
  }
  else {
    return null;
  }
}