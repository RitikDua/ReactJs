import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class MessageInput extends Component{
	state={
		msg:""
	}
	onSubmit=e=>{
		e.preventDefault();
		this.props.onPostMessage(this.state.msg);
	}
	isDisabled=()=>{
		return !this.state.msg==="";
	}
	handleChange=e=>{
		this.setState({
			msg:e.target.value
		})
	}
	render(){
		const {msg}= this.state;
		return (
		<div>
			<form className="MessageInput" onSubmit={this.onSubmit}>
					<input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={msg}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
			</form>
		</div>)
	}
}