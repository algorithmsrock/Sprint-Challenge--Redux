import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends Component {
	state = {
    name: '',
		age: '',
		height: '',
	}

	inputChangeHandler = ({ target }) => {
		this.setState({
				[target.name]: target.value,
		})
	}

	formSubmitHandler = (event) => {
		event.preventDefault();
		this.props.addSmurf(this.state)
		this.setState({
       name: '',
			 age: '',
			 height: '',
		})
	}

	render() {
		return (
				<div>
				<h1>Smurf Form Component</h1>
				<form onSubmit={this.formSubmitHandler}>
				  <input onChange={this.inputChangeHandler} placeholder='name' value={this.state.name} name='name'></input>
					<input onChange={this.inputChangeHandler} placeholder='age'  value={this.state.age} name='age'></input> 
					<input onChange={this.inputChangeHandler} placeholder='height' value={this.state.height} name='height'></input>
					<button>Submit</button>
					</form>
					</div>
				)
    	}
	  }

/* const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
    }
  }*/


export default connect(null, { addSmurf })(SmurfForm);

