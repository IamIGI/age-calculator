<script lang="ts">
	import { Loading } from '$components';

	export let text: string;
	export let value: number | null | undefined;
	export let isLoading: boolean | undefined;
</script>

{#if isLoading}
	<Loading />
{:else}
	<span>{value ?? '--'}</span>
{/if}
{text}

<style lang="scss">
	span {
		color: var(--color-primary-purple);
	}
</style>
