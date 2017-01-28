import React from "react";

export default class SortingText extends React.Component {
	render(){
		const listItems = this.props.toSortArray.map((number) =>
  			<li>{number}</li>)
		return(
			<ul class="no-bullets">{listItems}</ul>
		);
	}
}