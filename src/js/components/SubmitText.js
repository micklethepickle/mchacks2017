import React from "react";

export default class SubmitText extends React.Component {
	render(){
		return(
			<form onSubmit={this.props.onTextSubmit}>
        		<label>
          			To Sort: 
          			<input type="text" value={this.props.value} onChange={this.props.onTextChange} />
        		</label>
        		<input type="submit" value="Submit" />
      		</form>
		);
	}
}