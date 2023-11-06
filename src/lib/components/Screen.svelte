<script lang="ts">
	let year = 1998;
	let month = 3;
	let day = 12;
</script>

<ul>
	<li><span>{year}</span> years</li>
	<li><span>{month}</span> month</li>
	<li><span>{day}</span> days</li>
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
