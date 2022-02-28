<script lang="ts">
  import env from '$lib/constants/env';

	let openseaUrl: string = '';

	async function evaluateNft(openseaUrl: string): Promise<void> {
		console.log("boop");

    const url = "https://opensea.io/assets/0x219b8ab790decc32444a6600971c7c3718252539/1870";
    const contractAddress = "0x5180db8F5c931aaE63c74266b211F580155ecac8";
    const tokenId = "1590";

    // TODO: reference this better
    const web3Alchemy = AlchemyWeb3.createAlchemyWeb3(env.alchemyApiKey);
    const result = await web3Alchemy.alchemy.getNftMetadata({
      contractAddress: contractAddress,
      tokenId: tokenId
    });

    console.log(result);
	}
</script>

<!-- todo make component -->
<form on:submit|preventDefault={() => evaluateNft('hi', 'hi') }>
  <div class='mb-4'>
    <p class='mb-1'>OpenSea URL</p>
    <input
      class='border border-gray-400 rounded px-2 py-1 w-full'
      value={openseaUrl}
    />
  </div>

  <div class='border border-t-1 border-gray-400 my-6'></div>

  <div class='mb-4'>
    <p class='mb-1'>NFT Contract Address</p>
    <input
      class='border border-gray-400 rounded px-2 py-1 w-full'
      value={openseaUrl}
    />
  </div>

  <div class='mb-4'>
    <p class='mb-1'>Token ID</p>
    <input
      class='border border-gray-400 rounded px-2 py-1 w-full'
      value={openseaUrl}
    />
  </div>

  <input
    class:disabled={true}
    class='w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8'
    type="submit"
    value="Analyze NFT"
  />
</form>