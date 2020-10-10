import React, { Component } from "react";
import { connect } from "react-redux";
import CharacterSelect from "../characterSelect/characterSelect";
// import PropTypes from 'prop-types';

class StartScreen extends Component {
	render() {
		return (
			<>
				<CharacterSelect />
			</>
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
