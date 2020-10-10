import React, { Component } from "react";
import { connect } from "react-redux";
import TitleCard from "../titleCard/titleCard";
import CharacterSelect from "../characterSelect/characterSelect";
// import PropTypes from 'prop-types';

class StartScreen extends Component {
	render() {
		return (
			<div className="start-screen_container">
				<TitleCard />
				<CharacterSelect />
			</div>
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
