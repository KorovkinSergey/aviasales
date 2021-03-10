import searchService from "../../API"
import {FETCHING_IS_ON, GET_SEARCH_RESULTS} from '../types'

export const isFetchingOn = () => {
	return {type: FETCHING_IS_ON}
}

export const getSearchResults = () => {

	return async dispatch => {

		dispatch(isFetchingOn())

		let action = {}

		try {

			let searchResult = await searchService.getSearchResult()

			action = {
				type: GET_SEARCH_RESULTS,
				...sortTicketsByStops(searchResult),
				stop: searchResult.stop,
			}

			if (!searchResult.stop) {
				dispatch(getSearchResults())
			}
		} catch (e) {
			return dispatch(getSearchResults())
		}

		return dispatch(action)
	}
}


function sortTicketsByStops(searchResult) {
	const result = {
		ticketsCount: 0,
	}

	const addStopsToKey = stops => `tickets${stops}Stops`

	for (let i = 0; i <= 3; i++) {
		const key = addStopsToKey(i)
		result[key] = []

	}

	searchResult.tickets.map((ticket) => {
		result.ticketsCount++

		const stops = Math.max(0, ticket.segments[0].stops.length, ticket.segments[1].stops.length)

		result[addStopsToKey(stops)].push(ticket)

		return ticket
	})

	return result
}
