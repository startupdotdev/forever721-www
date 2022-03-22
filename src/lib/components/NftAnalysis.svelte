<script lang="ts">
	import { onMount } from 'svelte';
	import env from '$lib/constants/env';
	import { displayableIpfsUrl } from '$lib/utils/ipfs';
	import { analyzeTokenUri } from '@startupdotdev/forever721';
	import defaultAbi from '../../config/defaultAbi';

	import type { Grade, Reason } from '@startupdotdev/forever721';

	export let contractAddress: string;
	export let tokenId: string;
	export let clear: Function;

	let tokenUri: string;
	let metadata: NftMetadata;

	$: displayableImage = displayableIpfsUrl(metadata?.image);

	let grade: Grade = {
		grade: 'A',
		reasons: []
	};

	// TODO: get the analysis object and put it in the form

	async function getNftTokenUri(_contractAddress: string, _tokenId: string): Promise<string> {
		// TODO: reference this better
		const web3Alchemy = AlchemyWeb3.createAlchemyWeb3(env.alchemyApiKey);

		const basicNftContract = new web3Alchemy.eth.Contract(
			defaultAbi,
			_contractAddress,
			web3Alchemy.Provider
		);

		// TODO: try/catch ?
		const result = await basicNftContract.methods.tokenURI(_tokenId).call();

		console.log('result tokenURI', result);

		return result;
	}

	// TODO: Duplicate with ScanAnNft
	async function getNftMetadata(_contractAddress: string, _tokenId: string): Promise<Nft> {
		// TODO: reference this better
		const web3Alchemy = AlchemyWeb3.createAlchemyWeb3(env.alchemyApiKey);

		return await web3Alchemy.alchemy.getNftMetadata({
			contractAddress: _contractAddress,
			tokenId: _tokenId
		});
	}

	onMount(async () => {
		console.log('onMount analyze');

		tokenUri = await getNftTokenUri(contractAddress, tokenId);
		console.log('analyze tokenUri');

		const result = await analyzeTokenUri(tokenUri);
		console.log('analyze result', result);

		// TODO: if the package also returned the metadata, we wouldn't have to fetch this again
		const nft: Nft = await getNftMetadata(contractAddress, tokenId);
		metadata = nft.metadata;
	});
</script>

<div>
	{#if metadata}
		<img src={displayableImage} class="w-full mb-4 rounded" />
	{:else}
		<div class="bg-gray-500 px-12 py-16 rounded flex flex-row justify-center mb-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="text-white h-16 w-16"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
				/></svg
			>
		</div>
	{/if}

	{#if metadata}
		<p class="text-xl font-bold mb-8">{metadata.name}</p>
	{/if}

	<p class="heading mb-8">Analysis</p>

	<div class="grid">
		<p>We give this NFT an overall grade of</p>
		<p>A</p>
	</div>

	<button
		on:click|preventDefault={clear()}
		class="w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8"
	>
		Analyze Another NFT
	</button>
</div>
