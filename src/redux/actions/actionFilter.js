const {CHANGE_FILTER_ID} = require('../types')

export const changeFilterId = (id = "all") => ({
	type: CHANGE_FILTER_ID,
	filterId: id,
})
