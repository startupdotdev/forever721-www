<script lang="ts">
	import { onMount } from 'svelte';
	import { parseOpenseaUrl } from '$lib/utils/opensea';
	import { displayableIpfsUrl } from '$lib/utils/ipfs';
	import NftAnalysis from '$lib/components/NftAnalysis.svelte';
	import { getNftMetadata } from '$lib/utils/alchemy';
	import type { Nft, OpenseaDataParse } from 'src/global';

	let isEvaluatingNft: boolean = false;

	let openseaUrl: string = '';
	let contractAddress: string = '';
	let tokenId: string = '';

	let nft: Nft;
	$: displayableImage = displayableIpfsUrl(nft?.metadata?.image);
	$: name = nft?.metadata?.name || `#${nft?.id?.tokenId}`;

	function evaluateOpenseaUrl(url: string) {
		const result: OpenseaDataParse = parseOpenseaUrl(url);

		nft = null;
		contractAddress = '';
		tokenId = '';

		if (result) {
			openseaUrl = result.url;
			contractAddress = result.contractAddress;
			tokenId = result.tokenId;

			loadMetadata(contractAddress, tokenId);
		}
	}

	async function loadMetadata(_contractAddress: string, _tokenId: string): Promise<void> {
		console.log('loadMetadata()');

		try {
			nft = null;

			const nftData: Nft = await getNftMetadata(_contractAddress, _tokenId);

			console.log('loadMetadata result:', nftData);

			nft = nftData;
		} catch (error) {
			console.error(
				'Error fetching image for contractAddress:',
				contractAddress,
				', tokenId:',
				tokenId
			);
		}
	}

	function onSubmit() {
		evaluateOpenseaUrl(openseaUrl);
		isEvaluatingNft = true;
	}

	function onInputChange(e) {
		openseaUrl = e.target.value;
		evaluateOpenseaUrl(openseaUrl);
	}

	function clearInputFields() {
		openseaUrl = '';
		contractAddress = '';
		tokenId = '';
	}

	onMount(() => {
		// Default Azuki to display on load
		let url: string = 'https://opensea.io/assets/0xed5af388653567af2f388e6224dc7c4b3241c544/1948';
		evaluateOpenseaUrl(url);
	});
</script>

{#if isEvaluatingNft === false}
	<div class="md:flex md:flex-row md:items-center">
		<div class="md:w-1/2">
			{#if nft}
				<img src={displayableImage} class="w-full mb-4 rounded" />
			{:else}
				<div class="bg-gray-500 px-12 py-16 rounded flex flex-row justify-center items-center mb-4">
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
		</div>

		<div class="md:w-1/2 md:ml-4 lg:ml-12">
			{#if nft}
				<p class="text-xl font-bold mb-8">{name}</p>
			{/if}

			<form on:submit|preventDefault={onSubmit}>
				<div class="mb-4">
					<p class="mb-1">OpenSea URL</p>
					<input
						class="border border-gray-400 rounded px-2 py-1 w-full"
						on:input={onInputChange}
						bind:value={openseaUrl}
					/>
				</div>

				<input
					class="w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mt-4 mb-4"
					type="submit"
					value="Analyze NFT"
				/>

				<input
					class="w-full text-gray-900 rounded-full mb-8 mt-2"
					type="submit"
					value="Clear"
					on:click|preventDefault={() => clearInputFields()}
				/>
			</form>
		</div>
	</div>
{:else}
	<NftAnalysis {contractAddress} {tokenId} clear={() => (isEvaluatingNft = false)} />
{/if}
