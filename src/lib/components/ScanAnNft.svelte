<script lang="ts">
	let openseaUrl: string = '';

	async function evaluateNft(openseaUrl: string): Promise<void> {
		console.log("boop");
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