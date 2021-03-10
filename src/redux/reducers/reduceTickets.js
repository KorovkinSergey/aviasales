import {FETCHING_IS_ON, GET_SEARCH_RESULTS} from '../types'

const stops = 3;

const initialState = {
	isFetching: false,
	tickets0Stops: [],
	tickets1Stops: [],
	tickets2Stops: [],
	tickets3Stops: [],
	ticketsCount: 0,
	stop: false,
}

function reduceTickets(state = initialState, action) {
	switch (action.type) {
		case GET_SEARCH_RESULTS:
			return {
				...state,
				...mergeTickets(state, action, stops),
				isFetching: false,
				stop: action.stop,
				ticketsCount: state.ticketsCount + action.ticketsCount,
			};
		case FETCHING_IS_ON:
			return {
				...state,
				isFetching: true,
			};
		default:
			return state;
	}
}

export default reduceTickets;

function mergeTickets(state, action, stops) {
	const result = {};

	for (let i = 0; i <= stops; i++) {
		const key = `tickets${i}Stops`;
		result[key] = [...state[key], ...action[key]];
	}

	return result;
}
