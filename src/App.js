import React, {useEffect} from "react"

import FilterBar from "./components/FilterBar"
import SortBar from "./components/SortBar"
import TicketsList from "./components/Tickets/TicketsList"
import LoadingBar from "./components/LoadingBar"

import classes from "./index.module.sass"
import logo from "./img/Logo.svg"
import {connect} from 'react-redux'
import {getSearchResults} from './redux/actions/actionsCreators'




function App({getSearchResults}) {

	useEffect(() => {
		getSearchResults ()
	}, [getSearchResults])

	return (
			<main className={classes.main}>
				<div className={classes.container}>
					<div className={classes.logo}>
						<img src={logo} alt="avia sales logo" />
					</div>
				</div>
				<LoadingBar />
				<div className={classes.container}>
					<div className={classes.content}>
						<FilterBar />
						<div>
							<SortBar />
							<TicketsList />
						</div>
					</div>
				</div>
			</main>
	)
}
const dispatchToProps = dispatch => {
	return {
		getSearchResults: () => dispatch(getSearchResults())
	}
}

export default connect(null, dispatchToProps)(App)
