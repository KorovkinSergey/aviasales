const {CHANGE_SORT_ID} = require('../types')

export const changeSortId = (id = "all") => ({
	type: CHANGE_SORT_ID,
	sortId: id
})
