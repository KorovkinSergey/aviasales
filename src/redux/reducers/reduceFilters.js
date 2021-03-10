import {CHANGE_FILTER_ID} from '../types'

const initialState = [
	{
		label: "Все",
		id: "all",
		checked: true,
	},
	{
		label: "Без пересадок",
		id: "stops0",
		checked: true,
	},
	{
		label: "1 пересадка",
		id: "stops1",
		checked: true,
	},
	{
		label: "2 пересадки",
		id: "stops2",
		checked: true,
	},
	{
		label: "3 пересадки",
		id: "stops3",
		checked: true,
	}
]

function reduceFilters(state = initialState, action) {
	switch (action.type) {
		case CHANGE_FILTER_ID:

			if (action.filterId === 'all') {
				return [...state.map(item => {
					item.checked = true
					return item
				})]
			}

			const newState = state.map(item => {
				if (item.id === action.filterId) item.checked = !item.checked
				return item
			})

			if (!newState.every(e => e.checked)) newState[0].checked = false

			return [...newState]
		default:
			return state
	}
}

export default reduceFilters

