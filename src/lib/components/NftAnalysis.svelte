<script lang="ts">
	import { onMount } from 'svelte';
	import { displayableIpfsUrl } from '$lib/utils/ipfs';
	import { analyzeTokenUri } from '@startupdotdev/forever721';
	import { getNftMetadata, getNftTokenUri } from '$lib/utils/alchemy';

	import type { Nft, NftMetadata } from 'src/global';
	import type { Grade } from '@startupdotdev/forever721';

	export let contractAddress: string;
	export let tokenId: string;
	export let clear: Function;

	let tokenUri: string;
	let nft: Nft;
	let evaluation: Grade;

	$: displayableImage = displayableIpfsUrl(nft?.metadata?.image);
	$: name = nft?.metadata?.name || `#${nft?.id?.tokenId}`;

	onMount(async () => {
		console.log('onMount analyze');

		tokenUri = await getNftTokenUri(contractAddress, tokenId);
		console.log('analyze tokenUri');

		evaluation = await analyzeTokenUri(tokenUri);
		console.log('analyze evaluation', evaluation);

		// TODO: if the package also returned the metadata, we wouldn't have to fetch this again
		const nftData: Nft = await getNftMetadata(contractAddress, tokenId);
		nft = nftData;
	});
</script>

<div class="md:flex md:flex-row md:items-center">
	<div class="md:w-1/2">
		{#if nft}
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
	</div>

	<div class="md:w-1/2 md:ml-4 lg:ml-12">
		{#if nft}
			<p class="text-2xl font-bold mb-8">{name}</p>
		{/if}

		{#if evaluation}
			<p class="heading">Overall Grade</p>

			<p
				class="text-6xl heading mb-4"
				class:text-blue-900={evaluation.grade === 'A'}
				class:text-green-900={evaluation.grade === 'B'}
				class:text-yellow-500={evaluation.grade === 'C'}
				class:text-orange-500={evaluation.grade === 'D'}
				class:text-red-500={evaluation.grade === 'F'}
			>
				{evaluation.grade}
			</p>

			<p class="heading">Grade Reasons:</p>

			<ul class="list-disc mb-12">
				{#each evaluation.reasons as reason}
					<li class="ml-8 mt-2">{reason.message}</li>
				{/each}
			</ul>
		{:else}
			<p class="text-xl font-bold mb-8">Analyzing...</p>
		{/if}

		<button
			on:click|preventDefault={clear()}
			class="w-full bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8"
		>
			Analyze Another NFT
		</button>
	</div>
</div>
