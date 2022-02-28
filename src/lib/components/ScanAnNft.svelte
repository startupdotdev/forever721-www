<script lang="ts">
  import env from '$lib/constants/env';

  let hasEvaluatedNft: boolean = false;

  // Default Azuki to display on load
	let openseaUrl: string = 'https://opensea.io/assets/0xed5af388653567af2f388e6224dc7c4b3241c544/1948';

  let imageUrl: string = '';
  let contractAddress: string = '';
  let tokenId: string = '';

  function openseaUrlPasted(e) {
		let url = e.clipboardData.getData('text');

    parseAndSetFromOpenseaUrl(url);
    fetchOpenseaImage(contractAddress, tokenId);
  }

  function parseAndSetFromOpenseaUrl(url: string) {
		// https://opensea.io/assets/:nftContractAddress/:tokenId
		let openseaAddressAndIdRe = /https:\/\/opensea.io\/assets\/(\w*)\/(\w*)/g;
		let [_, address, id] = openseaAddressAndIdRe.exec(url);

		if (address && id) {
			openseaUrl = url;
			contractAddress = address;
			tokenId = id;
		}
  }

  async function fetchOpenseaImage(_contractAddress: string, _tokenId: string) {
    console.log("fetchimage");

    try {
      const web3Alchemy = AlchemyWeb3.createAlchemyWeb3(env.alchemyApiKey);
      const result = await web3Alchemy.alchemy.getNftMetadata({
        contractAddress: _contractAddress,
        tokenId: _tokenId
      });

      if (result && result.metadata && result.metadata.image) {
        imageUrl = result.metadata.image;
      }
    } catch (error) {
      console.error("Error fetching image for ", url);
    }
  }

	async function evaluateNft(openseaUrl: string): Promise<void> {
    // TODO: Add try/catch here
    // TODO: reference this better
    const web3Alchemy = AlchemyWeb3.createAlchemyWeb3(env.alchemyApiKey);
    const result = await web3Alchemy.alchemy.getNftMetadata({
      contractAddress: contractAddress,
      tokenId: tokenId
    });

    console.log(result);

    hasEvaluatedNft = true;
	}
</script>

{#if hasEvaluatedNft === false}
  {#if imageUrl}
   <img src={imageUrl} class='w-full mb-8 rounded' />
  {:else}
    <div class='bg-gray-500 px-12 py-16 rounded flex flex-row justify-center mb-8'>
      <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
    </div>
  {/if}

  <form on:submit|preventDefault={() => evaluateNft('hi', 'hi') }>
    <div class='mb-4'>
      <p class='mb-1'>OpenSea URL</p>
      <input
        class='border border-gray-400 rounded px-2 py-1 w-full'
        on:paste={(e) => openseaUrlPasted(e)}
        value={openseaUrl}
      />
    </div>

    <div class='border border-t-1 border-gray-400 my-6'></div>

    <div class='mb-4'>
      <p class='mb-1'>NFT Contract Address</p>
      <input
        class='border border-gray-400 rounded px-2 py-1 w-full'
        value={contractAddress}
      />
    </div>

    <div class='mb-4'>
      <p class='mb-1'>Token ID</p>
      <input
        class='border border-gray-400 rounded px-2 py-1 w-full'
        value={tokenId}
      />
    </div>

    <input
      class:disabled={true}
      class='w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8'
      type="submit"
      value="Analyze NFT"
    />
  </form>
{:else}
  <!-- TODO: what if no image? -->
  <img src={imageUrl} class='w-full mb-8 rounded' />
  <p> your nft</p>
  <button
    on:click|preventDefault={ () => hasEvaluatedNft = false }
    class='w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8'
  >
    Analyze Another NFT
  </button>
{/if}