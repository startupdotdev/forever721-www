<script lang="ts">
	import ScanAnNft from '$lib/components/ScanAnNft.svelte';
</script>

<svelte:head>
	<title>Forever721 NFT Analysis</title>
</svelte:head>

<div class="pb-12">
	<div
		class="px-4 md:flex md:flex-row md:items-center md:mb-8 lg:max-w-5xl lg:mx-auto lg:justify-center lg:mb-16"
	>
		<!-- placeholder image -->
		<img
			class="rounded mb-8"
			src="https://upload.wikimedia.org/wikipedia/en/0/07/Cryptopunks_general.jpg"
			alt="Cryptopunks"
		/>

		<div class="mb-12 text-center md:ml-4 lg:ml-12">
			<h1 class="text-left text-3xl heading mb-2 md:text-center">Forever721 NFT Analysis</h1>
			<h2 class="text-left text-xl semi-bold mb-2 md:text-center">
				NFTs are permanent. Sometimes their contents are not.
			</h2>
			<p class="text-left text-sm mb-12 md:text-center md:px-4 md:mb-8">
				Know exactly what's inside your NFT, and how permanent it really is.
			</p>

			<a
				href="/#scan-an-nft"
				class="bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8"
				>Analyze an NFT below 👇</a
			>
		</div>
	</div>

	<div class="bg-gray-100 p-4 py-12">
		<div class="lg:max-w-5xl lg:mx-auto ">
			<div class="mb-4">
				<h2 class="text-3xl heading mb-1">Scan an NFT</h2>
				<p>Audit an NFT by address</p>
			</div>

			<div id="scan-an-nft">
				<ScanAnNft />
			</div>
		</div>
	</div>

	<div class="p-4 mt-12 lg:max-w-3xl lg:mx-auto lg:mb-8">
		<h2 class="text-3xl heading mb-1">What if your BAYC became a 💩?</h2>
		<p class="mb-2">NFT ownership is permanently recorded on the blockchain.</p>
		<p>
			However, for some NFTs, the metadata that we all recognize and love (the image, name, rarity
			attributes) could change at any time. It all depends on how the developers set up the NFTs.
		</p>
	</div>

	<div class="p-4 mt-8 lg:max-w-3xl lg:mx-auto lg:mb-8">
		<h2 class="text-3xl heading mb-1">How does Forever721 work?</h2>
		<p class="mb-2">
			Forever721 shows you exactly what is in the NFT you see while browsing OpenSea.
		</p>
		<p class="mb-2">
			See our letter grade evaluation and the properties that affect the durability of that NFT in
			real time.
		</p>
	</div>

	<div class="p-4 w-full md:mb-8 lg:max-w-2xl lg:mx-auto lg:mb-12">
		<div class="flex flex-row justify-between items-center mb-4">
			<p class="w-1/2 text-5xl text-center heading text-blue-900">A</p>

			<div class="w-1/2">
				<p>The gold standard with on-chain metadata</p>
			</div>
		</div>

		<div class="flex flex-row justify-between items-center mb-4">
			<p class="w-1/2 text-5xl text-center heading text-green-900">B</p>

			<div class="w-1/2">
				<p>Metadata stored on a decentralized storage solution like IPFS</p>
			</div>
		</div>

		<div class="flex flex-row justify-between items-center mb-4">
			<p class="w-1/2 text-5xl text-center heading text-yellow-500">C</p>

			<div class="w-1/2">
				<p>
					Metadata may be stored durably but core properties may use non-best practices or
					third-party pinning services.
				</p>
			</div>
		</div>

		<div class="flex flex-row justify-between items-center mb-4">
			<p class="w-1/2 text-5xl text-center heading text-orange-500">D</p>

			<div class="w-1/2">
				<p>Metadata properties point to privately-owned servers, and could change at any time.</p>
			</div>
		</div>

		<div class="flex flex-row justify-between items-center mb-4">
			<p class="w-1/2 text-5xl text-center heading text-red-500">F</p>

			<div class="w-1/2">
				<p>Metadata points to privately-owned server and can change at any time.</p>
			</div>
		</div>
	</div>

	<div class="text-center">
		<a
			href="/#scan-an-nft"
			class="bg-gray-900 rounded-full text-white px-8 py-4 border border-white mb-8 inline-block md:px-16"
			>Analyze an NFT 👆</a
		>
	</div>
</div>

<div class="px-4 mb-4 lg:max-w-5xl lg:mx-auto ">
	<p>
		<a class="underline" href="https://github.com/startupdotdev/forever721">Open source</a> and
		created with ❤️ by
		<a class="underline" href="https://startup.dev">Startup Dev</a>
	</p>
</div>
