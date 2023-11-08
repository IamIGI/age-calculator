import { writable } from 'svelte/store';

type Calculator = {
	provided: {
		day: number | null;
		month: number | null;
		year: number | null;
	};
	diff?: {
		day: number | null;
		month: number | null;
		year: number | null;
	};
	isLoading?: boolean;
};

const initValues: Calculator = {
	provided: { day: null, month: null, year: null },
	diff: {
		day: null,
		month: null,
		year: null
	},
	isLoading: false
};

function createCalculatorStore() {
	const { subscribe, set } = writable<Calculator>(initValues);

	function dateDiff(startingDate: string) {
		let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
		let endDate = new Date(new Date().toISOString().substr(0, 10));
		if (startDate > endDate) {
			const swap = startDate;
			startDate = endDate;
			endDate = swap;
		}
		const startYear = startDate.getFullYear();
		const february =
			(startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
		const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		let yearDiff = endDate.getFullYear() - startYear;
		let monthDiff = endDate.getMonth() - startDate.getMonth();
		if (monthDiff < 0) {
			yearDiff--;
			monthDiff += 12;
		}
		let dayDiff = endDate.getDate() - startDate.getDate();
		if (dayDiff < 0) {
			if (monthDiff > 0) {
				monthDiff--;
			} else {
				yearDiff--;
				monthDiff = 11;
			}
			dayDiff += daysInMonth[startDate.getMonth()];
		}

		return { year: yearDiff, month: monthDiff, day: dayDiff };
	}

	function setDate(day: number, month: number, year: number) {
		set({ provided: { day, month, year }, isLoading: true });
		setTimeout(() => {
			const dateFormat = `${year}/${month}/${day}`; // YYYY/MM/DD format
			const result = dateDiff(dateFormat);
			set({ provided: { day, month, year }, diff: result, isLoading: false });
		}, 1000);
	}

	function clearStore() {
		set(initValues);
	}

	return {
		subscribe,
		setDate,
		clearStore
	};
}

export default createCalculatorStore();
