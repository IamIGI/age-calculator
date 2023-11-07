<script lang="ts">
	import { calculator as calculatorStore } from '$stores';
</script>

<ul>
	<li><span>{$calculatorStore.diff?.year ?? '--'}</span> years</li>
	<li><span>{$calculatorStore.diff?.month ?? '--'}</span> months</li>
	<li><span>{$calculatorStore.diff?.day ?? '--'}</span> days</li>
</ul>

<style lang="scss">
	ul {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style-type: none;

		li {
			text-align: left;
			span {
				color: var(--color-primary-purple);
			}
			font-size: var(--font-size-screen);
			font-style: italic;
			font-weight: 800;
		}
	}
</style>
