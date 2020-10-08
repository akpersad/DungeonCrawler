import React, { Component } from "react";
// import PropTypes from 'prop-types';
import World from "../world/world";

class GameContainer extends Component {
	render() {
		return (
			<div>
				<World />
			</div>
		);
	}
}

// GameContainer.propTypes = {};

export default GameContainer;
