import React from "react"
import {connect} from "react-redux"
import classNames from "classnames"

import sortTabs from "../sortTabs"

import classes from "./SortBar.module.sass"
import {changeSortId} from '../../redux/actions/actionSort'

function SortBar({activeTab, changeSortId}) {

	return <div className={classes.wrapper}>
		{
			sortTabs.map((tab) => {

				const currentClass = classNames(classes.tab, activeTab === tab.id && classes.active)

				return (
					<button
						className={currentClass}
						onClick={() => {
							changeSortId(tab.id)
						}}
						key={tab.id}>
						{tab.label}
					</button>
				)
			})
		}
	</div>
}

const mapStateToProps = (state) => {
	return {
		activeTab: state.sortById
	}
}
const dispatchToProps = dispatch => {
	return {
		changeSortId: id => dispatch(changeSortId(id))
	}
}
export default connect(mapStateToProps, dispatchToProps)(SortBar)
