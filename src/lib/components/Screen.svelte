<script lang="ts">
	import { Wave } from 'svelte-loading-spinners';
	import { calculator as calculatorStore } from '$stores';
	import { Loading, ListItem } from '$components';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<ul>
	<li>
		<ListItem
			value={$calculatorStore.diff?.day}
			text="days"
			isLoading={$calculatorStore.isLoading}
		/>
	</li>
	<li>
		<ListItem
			value={$calculatorStore.diff?.month}
			text="months"
			isLoading={$calculatorStore.isLoading}
		/>
	</li>
	<li>
		<ListItem
			value={$calculatorStore.diff?.year}
			text="years"
			isLoading={$calculatorStore.isLoading}
		/>
	</li>
</ul>

<style lang="scss">
	ul {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style-type: none;

		li {
			text-align: left;
			font-size: var(--font-size-screen);
			font-style: italic;
			font-weight: 800;
			width: 100%;
			display: flex;
			align-items: center;
			gap: 5px;
		}

		@media screen and (max-width: 650px) {
			li {
				font-size: calc(var(--font-size-screen) - 15px);
			}
		}

		@media screen and (max-width: 480px) {
			li {
				font-size: calc(var(--font-size-screen) - 25px);
			}
		}
	}
</style>
