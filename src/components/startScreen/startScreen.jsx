import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../config/store";
// import PropTypes from 'prop-types';

class StartScreen extends Component {
	showScreen() {
		store.dispatch({
			type: "CHOOSE_PLAYER",
			payload: { playerChosen: true }
		});
	}

	render() {
		return (
			<button type="button" onClick={this.showScreen}>
				Click Me!
			</button>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

// StartScreen.propTypes = {};

export default connect(mapStateToProps)(StartScreen);
