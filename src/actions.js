import axios from 'axios';

export const FETCH_JUNCTURES = 'FETCH_JUNCTURES';
export const FETCH_JUNCTURES_PENDING = 'FETCH_JUNCTURES_PENDING';
export const FETCH_JUNCTURES_FULFILLED = 'FETCH_JUNCTURES_FULFILLED';

export function fetchJunctures() {
	return {
		type: FETCH_JUNCTURES,
		payload: axios.get('/mock/junctures.json')
	}
}
