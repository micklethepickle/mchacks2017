import React from "react";

export default class SortingText extends React.Component {
	render(){
		return(
				<ul class="no-bullets">{this.props.toSortArray}</ul>
		);
	}
}