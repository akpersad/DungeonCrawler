import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Map extends Component {
	getTileSprite(type) {
		switch (type) {
			case 0:
				return "grass";
			case 4:
				return "chest";
			case 5:
				return "rock";
			case 6:
				return "tree";
			default:
				return "normal";
		}
	}

	mapTile(tiles) {
		let count = 0;
		return tiles.map(tile => {
			count += 1;
			return <div className={`tile ${this.getTileSprite(tile)}`} key={count} />;
		});
	}

	mapRow() {
		const { tiles } = this.props;
		let count = 0;
		return tiles.map(row => {
			count += 1;
			return (
				<div className="tile-row" key={count}>
					{this.mapTile(row)}
				</div>
			);
		});
	}

	render() {
		return <div className="map-container">{this.mapRow()}</div>;
	}
}

function mapStateToProps(state) {
	return {
		...state.map
	};
}

Map.propTypes = {
	tiles: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Map);
