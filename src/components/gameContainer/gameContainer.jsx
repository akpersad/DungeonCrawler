import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import store from "../../config/store";
import World from "../world/world";
import StartScreen from "../startScreen/startScreen";

class GameContainer extends Component {
	render() {
		const { playerChosen } = store.getState().container;
		return <>{playerChosen ? <World /> : <StartScreen />}</>;
	}
}

function mapStateToProps(state) {
	return {
		...state.container
	};
}

// GameContainer.propTypes = {};

export default connect(mapStateToProps)(GameContainer);
