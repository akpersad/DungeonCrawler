import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Player from "../player/player";
import Map from "../map/map";

class World extends Component {
	render() {
		return (
			<div className="world-container">
				<Map />
				<Player />
			</div>
		);
	}
}

// World.propTypes = {};

export default World;
