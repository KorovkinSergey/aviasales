import {CHANGE_SORT_ID} from '../types'



const initialState = 'cheapest'

function reduceSort(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SORT_ID:
			return action.sortId
		default:
			return state
	}
}

export default reduceSort
