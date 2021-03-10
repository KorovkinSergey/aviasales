import React from "react"
import {connect} from "react-redux"

import classes from "./FilterBar.module.sass"
import {changeFilterId} from '../../redux/actions/actionFilter'


function FilterBar({activeFilterId, changeFilterId}) {
	return (
		<div className={classes.wrapper}>
			<div className={classes["filter-bar"]}>
				<div className={classes.title}>Количество пересадок</div>
				<form action="#" className={classes["filter-form"]}>
					<ul className={classes.list}>
						{
							activeFilterId.map(filter => (
								<li className={classes["list-item"]} key={filter.id}>
									<input
										checked={filter.checked}
										type="checkbox"
										id={filter.id}
										className={classes.checkbox}
										onChange={() => {
											changeFilterId(filter.id)
										}}
									/>
									<label htmlFor={filter.id} className={classes.label}>{filter.label}</label>
								</li>
							))
						}
					</ul>
				</form>
			</div>
		</div>
	)
}

const stateToProps = (state) => {
	return {
		activeFilterId: state.activeFilterId,
	}
}

const dispatchToProps = dispatch => {
	return {
		changeFilterId: id => dispatch(changeFilterId(id))
	}
}

export default connect(stateToProps, dispatchToProps)(FilterBar)
