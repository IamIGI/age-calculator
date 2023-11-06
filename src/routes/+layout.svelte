<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="wrapper">
	<slot />
</div>

<style lang="scss">
	.wrapper {
		background-color: var(--color-neutral-white);
		border-radius: 15px;
		border-bottom-right-radius: 25%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		width: fit-content;
		padding: 45px;
		margin: 10px;
	}
</style>
