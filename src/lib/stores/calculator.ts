import { writable } from 'svelte/store';

type Calculator = {
	day: number | null;
	month: number | null;
	year: number | null;
};

const initValues = { day: null, month: null, year: null };

const calculatorStore = writable<Calculator>(initValues, (set) => {
	return () => {
		set(initValues);
	};
});

export default calculatorStore;
