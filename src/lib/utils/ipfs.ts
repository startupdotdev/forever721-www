export function displayableIpfsUrl(url: string): string {
  if (url.startsWith('ipfs://') === false) {
    return url;
  }

  // Rewrites:
  // ipfs://abcde...xyz/1234.png
  //
  // To:
  // https://ipfs.io/ipfs/abcde...xyz/1234.png
  // 
  let ipfsRegex = /ipfs:\/\/(.+)/;
  let [_, urlData] = ipfsRegex.exec(url);

  return `https://ipfs.io/ipfs/${urlData}`;
}