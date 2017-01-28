import React from "react";

export default class SortingText extends React.Component {
	render(){
		return(
			<ul>{this.props.toSortArray}</ul>
		);
	}
}