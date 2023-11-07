<script lang="ts">
	import type { EventHandler, KeyboardEventHandler } from 'svelte/elements';
	import calculatorStore from '$stores/calculator';
	import icon_arrow from '$assets/images/icon-arrow.svg';

	let day: string = '';
	let month: string = '';
	let year: string = '';

	$: day = day.replace(/[^0-9]/g, '');
	$: month = month.replace(/[^0-9]/g, '');
	$: year = year.replace(/[^0-9]/g, '');

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

	const error_message = {
		required: 'This field is required',
		valid: {
			day: 'Must be a valid day',
			month: 'Must by a valid month',
			year: 'Must by a valid year',
			past: 'Must be in the past'
		}
	};
	let inputRequired_day = false;
	let inputRequired_month = false;
	let inputRequired_year = false;
	let invalidDate = false;
	let futureDateError = false;

	function isInputFilled(day: string, month: string, year: string) {
		if (!day) {
			inputRequired_day = true;
		} else {
			inputRequired_day = false;
		}
		if (!month) {
			inputRequired_month = true;
		} else {
			inputRequired_month = false;
		}
		if (!year) {
			inputRequired_year = true;
		} else {
			inputRequired_year = false;
		}
	}

	function isDateValid(day: string, month: string, year: string) {
		const dateFormat = `${year}/${month}/${day}`; // YYYY/MM/DD format

		const date = new Date(dateFormat);

		if (isNaN(date as unknown as number)) {
			invalidDate = true;
		} else {
			invalidDate = false;
		}
	}

	function isDateInPast(day: string, month: string, year: string) {
		const dateFormat = `${year}/${month}/${day}`; // YYYY/MM/DD format

		const currentDate = new Date().getTime();
		const providedDate = new Date(dateFormat).getTime();

		if (currentDate < providedDate) {
			futureDateError = true;
		} else {
			futureDateError = false;
		}
	}

	function resetForm() {
		inputRequired_day = false;
		inputRequired_month = false;
		inputRequired_year = false;
		invalidDate = false;
		futureDateError = false;
	}

	function isValidate(): boolean {
		isInputFilled(day, month, year);
		isDateValid(day, month, year);
		isDateInPast(day, month, year);

		if (
			inputRequired_day ||
			inputRequired_month ||
			inputRequired_year ||
			invalidDate ||
			futureDateError
		)
			return false;
		return true;
	}

	const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
		if (!isValidate()) return;
		// if()
		// calculatorStore.update((prev) => prev.day = day )
		// success
		// resetForm()
		console.log('success');
	};
</script>

<form action="POST" on:submit|preventDefault={handleSubmit}>
	<div class="inputs-container">
		<div class="input-container">
			<label for="day" class:label-error={inputRequired_day || futureDateError || invalidDate}
				>{form.day.label}</label
			>
			<input
				name="day"
				placeholder={form.day.placeholder}
				minlength="2"
				maxlength="2"
				bind:value={day}
				class:input-error={inputRequired_day || futureDateError || invalidDate}
			/>
			{#if inputRequired_day}
				<p>{error_message.required}</p>
			{:else if invalidDate}
				<p>{error_message.valid.day}</p>
			{:else if futureDateError}
				<p>{error_message.valid.past}</p>
			{:else}
				<div class="empty" />
			{/if}
		</div>
		<div class="input-container">
			<label for="month" class:label-error={inputRequired_month || futureDateError || invalidDate}
				>{form.month.label}</label
			>
			<input
				name="month"
				placeholder={form.month.placeholder}
				minlength="2"
				maxlength="2"
				bind:value={month}
				class:input-error={inputRequired_month || futureDateError || invalidDate}
			/>
			{#if inputRequired_month}
				<p>{error_message.required}</p>
			{:else if invalidDate}
				<p>{error_message.valid.month}</p>
			{:else if futureDateError}
				<p>{error_message.valid.past}</p>
			{:else}
				<div class="empty" />
			{/if}
		</div>
		<div class="input-container">
			<label for="year" class:label-error={inputRequired_year || futureDateError || invalidDate}
				>{form.year.label}</label
			>
			<input
				name="year"
				placeholder={form.year.placeholder}
				minlength="4"
				maxlength="4"
				bind:value={year}
				class:input-error={inputRequired_year || futureDateError || invalidDate}
			/>
			{#if inputRequired_year}
				<p>{error_message.required}</p>
			{:else if invalidDate}
				<p>{error_message.valid.year}</p>
			{:else if futureDateError}
				<p>{error_message.valid.past}</p>
			{:else}
				<div class="empty" />
			{/if}
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

		p {
			margin: 0;
			padding: 0;
			color: red;
			font-size: var(--font-size-error);
			font-style: italic;
		}

		.label-error {
			color: var(--color-primary-light-red);
		}
		.input-error {
			border: 1px solid var(--color-primary-light-red);
		}

		.empty {
			height: 10px;
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
