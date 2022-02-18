<script lang="ts">
	let openseaUrl: string;

	async function evaluateNft(openseaUrl: string): Promise<void> {
		console.log("boop");

	}
</script>

<svelte:head>
	<title>Forever721</title>
</svelte:head>

<div>
	<div class='px-4'>
		<!-- placeholder image -->
		<img class='rounded mb-8' src="https://upload.wikimedia.org/wikipedia/en/0/07/Cryptopunks_general.jpg" />

		<div class='mb-12 text-center'>
			<h1 class='text-left text-3xl heading mb-2'>Forever721 NFT Analysis</h1>
			<h2 class='text-left text-xl semi-bold mb-2'>NFTs are permanent. Sometimes their contents are not.</h2>
			<p class='text-left text-sm mb-12'>Know exactly what's inside your NFT, and how permanent it really is.</p>

			<button class='bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8'>Install Forever721 browser extension</button>
			<button class='text-center w-full'>Or try it out below 👇</button>
		</div>
	</div>

	<div class='bg-gray-100 p-4 pt-12'>
		<div class='mb-4'>
			<h2 class='text-3xl heading mb-1'>Scan an NFT</h2>
			<p>Audit an NFT by address</p>
		</div>

		<div class='bg-gray-500 px-12 py-16 rounded flex flex-row justify-center mb-8'>
			<svg xmlns="http://www.w3.org/2000/svg" class="text-white h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
		</div>

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
	</div>

	<div>
		<h2>What if your BAYC became a 💩 emoji?</h2>
		<p>NFT ownership is permanently recorded on the blockchain.</p>
		<p>However, for some NFTs, the metadata that we all recognize and love (the image, name, rarity attributes) could change at any time. It all depends on how the developers’ setup the NFTs.</p>
	</div>

	<div>
		<h2>How does Forever721 work?</h2>
		<p>The Forever721 browser extension shows you exactly what is in the NFT you see while browsing OpenSea.</p>
		<p>See our letter grade evaluation alongside with the durability of that NFT in real time.</p>

		<!-- placeholder image -->
		<img src="https://upload.wikimedia.org/wikipedia/en/0/07/Cryptopunks_general.jpg" />
	</div>
</div>