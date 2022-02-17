<script lang="ts">
	let openseaUrl: string;

	async function evaluateNft(openseaUrl: string): Promise<void> {
		console.log("boop");

	}
</script>

<svelte:head>
	<title>Forever721</title>
</svelte:head>

<div class="m-4">
	<!-- placeholder image -->
	<img src="https://upload.wikimedia.org/wikipedia/en/0/07/Cryptopunks_general.jpg" />

	<div>
		<h1>Forever721 NFT Analysis</h1>
		<h2>NFTs are permanent. Sometimes their contents are not.</h2>
		<p>Know exactly what's inside your NFT, and permanent it really is.</p>

		<button>Install Forever721 browser extension</button>
		<button>Or try it out below</button>

	</div>

	<!-- placeholder break -->
	<hr/>

	<div>
		<h2>Scan an NFT</h2>

		<!-- placeholder image -->
		<img src="https://upload.wikimedia.org/wikipedia/en/0/07/Cryptopunks_general.jpg" />

		<!-- todo make component -->
		<form on:submit|preventDefault={() => evaluateNft('hi', 'hi') }>
			<input
				class="rounded-tr-none rounded-br-none"
				style="border-bottom-right-radius: 0px; border-top-right-radius: 0px;"
				value={openseaUrl}
			/>

			<hr/>

			<p>NFT Contract Address</p>
			<input
				class="rounded-tr-none rounded-br-none"
				style="border-bottom-right-radius: 0px; border-top-right-radius: 0px;"
				value={openseaUrl}
			/>

			<p>Token ID</p>
			<input
				class="rounded-tr-none rounded-br-none"
				style="border-bottom-right-radius: 0px; border-top-right-radius: 0px;"
				value={openseaUrl}
			/>

			<input
				class:disabled={true}
				class="block border border-white p-2"
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