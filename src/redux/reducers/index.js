import { combineReducers} from 'redux'
import reduceFilters from './reduceFilters'
import reduceSort from './reduceSort'
import reduceTickets from './reduceTickets'


const rootReducer = combineReducers({
 activeFilterId: reduceFilters,
 sortById: reduceSort,
 tickets: reduceTickets,
})

export default rootReducer
