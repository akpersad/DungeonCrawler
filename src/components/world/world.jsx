import React, { Component } from "react";
// import PropTypes from 'prop-types';
import Player from "../player/player";
import Map from "../map/map";

class World extends Component {
	render() {
		return (
			<div
				style={{
					width: "800px",
					height: "400px",
					margin: "20px auto",
					position: "relative"
				}}
			>
				<Map />
				<Player />
			</div>
		);
	}
}

// World.propTypes = {};

export default World;
