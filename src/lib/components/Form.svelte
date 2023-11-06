<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import calculatorStore from '$stores/calculator';
	import icon_arrow from '$assets/images/icon-arrow.svg';

	type InputType = string | number | null;
	let day: InputType = null;
	let month: InputType = null;
	let year: InputType = null;

	const form = {
		day: {
			label: 'DAY',
			placeholder: 'DD'
		},
		month: {
			label: 'MONTH',
			placeholder: 'MM'
		},
		year: {
			label: 'YEAR',
			placeholder: 'YYYY'
		}
	};

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
		console.log(day, month, year);
		console.log(typeof day, typeof month, typeof year);
		// calculatorStore.update((prev) => prev.day = day )
		// success
	};
</script>

<form action="POST" on:submit|preventDefault={handleSubmit}>
	<div class="inputs-container">
		<div class="input-container">
			<label for="day">{form.day.label}</label>
			<input name="day" placeholder={form.day.placeholder} bind:value={day} />
		</div>
		<div class="input-container">
			<label for="month">{form.month.label}</label>
			<input name="month" placeholder={form.month.placeholder} bind:value={month} />
		</div>
		<div class="input-container">
			<label for="year">{form.year.label}</label>
			<input name="year" placeholder={form.year.placeholder} bind:value={year} />
		</div>
	</div>
	<div class="submit-container">
		<div class="line" />
		<button type="submit"><img src={icon_arrow} alt="icon" /></button>
	</div>
</form>

<style lang="scss">
	form {
		width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.inputs-container {
		width: 80%;
		display: flex;
		gap: 20px;
		justify-content: flex-start;
		align-items: center;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		text-align: left;
		gap: 5px;

		label {
			font-size: var(--font-size-labels);
			color: var(--color-neutral-smokey-grey);
		}

		input {
			font-size: var(--font-size-inputs);
			width: 120px;
			color: var(--color-neutral-off-back);
			padding: 10px 15px;
			border-radius: 8px;
			border: 1px solid var(--color-neutral-light-grey);
		}
	}

	.submit-container {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		.line {
			flex: 1;
			border-bottom: 1px solid var(--color-neutral-light-grey);
		}

		button {
			width: 65px;
			height: 65px;
			border-radius: 33px;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background-color: var(--color-primary-purple);
			padding: 10px;
			cursor: pointer;

			&:hover {
				background-color: var(--color-primary-purple-hover);
			}

			img {
				height: 35px;
				width: 35px;
			}
		}
	}
</style>
