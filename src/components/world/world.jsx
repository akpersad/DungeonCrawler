import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Player from "../player/player";
import Map from "../map/map";
import { tiles } from "../data/maps/1";
import store from "../../config/store";

class World extends Component {
	render() {
		store.dispatch({
			type: "ADD_TILES",
			payload: { tiles }
		});
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
