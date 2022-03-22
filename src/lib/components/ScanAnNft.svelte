<script lang="ts">
	import { onMount } from 'svelte';
	import env from '$lib/constants/env';
	import { parseOpenseaUrl } from '$lib/utils/opensea';
	import { displayableIpfsUrl } from '$lib/utils/ipfs';
	import NftAnalysis from '$lib/components/NftAnalysis.svelte';

	let isEvaluatingNft: boolean = false;

	let openseaUrl: string = '';
	let contractAddress: string = '';
	let tokenId: string = '';

	let currentMetadata: NftMetadata;
	$: displayableImage = displayableIpfsUrl(currentMetadata?.image);

	function openseaUrlPasted(url: string) {
		const result: OpenseaDataParse = parseOpenseaUrl(url);

		if (result) {
			openseaUrl = result.url;
			contractAddress = result.contractAddress;
			tokenId = result.tokenId;

			loadMetadata(contractAddress, tokenId);
		}
	}

	async function getNftMetadata(_contractAddress: string, _tokenId: string): Promise<Nft> {
		// TODO: reference this better
		const web3Alchemy = AlchemyWeb3.createAlchemyWeb3(env.alchemyApiKey);

		return await web3Alchemy.alchemy.getNftMetadata({
			contractAddress: _contractAddress,
			tokenId: _tokenId
		});
	}

	async function loadMetadata(_contractAddress: string, _tokenId: string): Promise<void> {
		console.log('loadMetadata()');

		try {
			currentMetadata = null;

			const nft: Nft = await getNftMetadata(_contractAddress, _tokenId);

			console.log('loadMetadata result:', nft);

			currentMetadata = nft.metadata;
		} catch (error) {
			console.error(
				'Error fetching image for contractAddress:',
				contractAddress,
				', tokenId:',
				tokenId
			);
		}
	}

	function clearInputFields() {
		openseaUrl = '';
		contractAddress = '';
		tokenId = '';
	}

	onMount(() => {
		// Default Azuki to display on load
		let url: string = 'https://opensea.io/assets/0xed5af388653567af2f388e6224dc7c4b3241c544/1948';
		openseaUrlPasted(url);
	});
</script>

{#if isEvaluatingNft === false}
	{#if currentMetadata}
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

	{#if currentMetadata}
		<p class="text-xl font-bold mb-8">{currentMetadata.name}</p>
	{/if}

	<form on:submit|preventDefault={() => (isEvaluatingNft = true)}>
		<div class="mb-4">
			<p class="mb-1">OpenSea URL</p>
			<input
				class="border border-gray-400 rounded px-2 py-1 w-full"
				on:paste={(e) => openseaUrlPasted(e.clipboardData.getData('text'))}
				value={openseaUrl}
			/>
		</div>

		<div class="flex flex-row items-center my-2">
			<div class="border border-t-1 border-gray-300 my-6 flex-grow" />
			<p class="mx-2 text-gray-600">Or</p>
			<div class="border border-t-1 border-gray-300 my-6 flex-grow" />
		</div>

		<div class="mb-4">
			<p class="mb-1">NFT Contract Address</p>
			<input
				class="border border-gray-400 rounded px-2 py-1 w-full"
				on:change={(e) => true}
				value={contractAddress}
			/>
		</div>

		<div class="mb-4">
			<p class="mb-1">Token ID</p>
			<input class="border border-gray-400 rounded px-2 py-1 w-full" value={tokenId} />
		</div>

		<input
			class="w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mt-4 mb-4"
			type="submit"
			value="Analyze NFT"
		/>

		<input
			class="w-full bg-white border border-gray-500 text-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8"
			type="submit"
			value="Clear Fields"
			on:click|preventDefault={() => clearInputFields()}
		/>
	</form>
{:else}
	<NftAnalysis {contractAddress} {tokenId} clear={() => (isEvaluatingNft = false)} />
{/if}
