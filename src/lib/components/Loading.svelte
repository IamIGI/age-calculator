<script lang="ts">
	import { Wave } from 'svelte-loading-spinners';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<Wave size={innerWidth < 480 ? 20 : innerWidth < 650 ? 30 : 40} color="#915eff" unit="px" />
