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
			<button class='text-center w-full'>Or analyze an NFT below 👇</button>
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

	<div class='p-4 mt-12'>
		<h2 class='text-3xl heading mb-1'>What if your BAYC became a 💩?</h2>
		<p class='mb-2'>NFT ownership is permanently recorded on the blockchain.</p>
		<p>However, for some NFTs, the metadata that we all recognize and love (the image, name, rarity attributes) could change at any time. It all depends on how the developers’ setup the NFTs.</p>
	</div>

	<div class='p-4 mt-8'>
		<h2 class='text-3xl heading mb-1'>How does Forever721 work?</h2>
		<p class='mb-2'>The Forever721 browser extension shows you exactly what is in the NFT you see while browsing OpenSea.</p>
		<p class='mb-2'>See our letter grade evaluation alongside with the durability of that NFT in real time.</p>
	</div>

	<div class='p-4 w-full mb-8'>
		<div class='flex flex-row justify-between items-center mb-4'>
			<p class='w-1/2 text-5xl text-center heading text-blue-900'>A</p>

			<div class='w-1/2'>
				<p>The gold standard with on-chain metadata</p>
			</div>
		</div>

		<div class='flex flex-row justify-between items-center mb-4'>
			<p class='w-1/2 text-5xl text-center heading text-green-900'>B</p>

			<div class='w-1/2'>
				<p>Metadata stored on a decentralized storage solution like IPFS</p>
			</div>
		</div>

		<div class='flex flex-row justify-between items-center mb-4'>
			<p class='w-1/2 text-5xl text-center heading text-yellow-500'>C</p>

			<div class='w-1/2'>
				<p>Metadata may be stored durably but core properties may use non-best practices.</p>
			</div>
		</div>

		<div class='flex flex-row justify-between items-center mb-4'>
			<p class='w-1/2 text-5xl text-center heading text-orange-500'>D</p>

			<div class='w-1/2'>
				<p>Metadata properties point to privately-owned servers, and could change at any time.</p>
			</div>
		</div>

		<div class='flex flex-row justify-between items-center mb-4'>
			<p class='w-1/2 text-5xl text-center heading text-red-500'>F</p>

			<div class='w-1/2'>
				<p>Metadata points to privately-owned server and can change at any time.</p>
			</div>
		</div>
	</div>

	<div class='text-center'>
		<button class='bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8'>Install Forever721 browser extension</button>
	</div>
</div>