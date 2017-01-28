import React from "react";

import SortingText from "./SortingText";
import SubmitText from "./SubmitText";

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			submitTextValue: "",
			toSort: [],
		}
	}

	handleTextChange(event){
		this.setState({submitTextValue: event.target.value});
	}
	handleTextSubmit(event){
		let toSortArray = this.state.submitTextValue.split(',');
		event.preventDefault()
		this.setState({ toSort: toSortArray});
	}

	render(){
		return(
			<div>
				<SubmitText value={this.state.submitTextValue} 
							onTextChange={(event) => this.handleTextChange(event)}
							onTextSubmit={(event) => this.handleTextSubmit(event)}/>
				<SortingText toSortArray={this.state.toSort}/>
			</div>
		);
	}
}