import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grass from "../../assets/images/grass.jpg";
import Rock from "../../assets/images/rock.png";
import Tree from "../../assets/images/tree.png";

class Map extends Component {
	getTileSprite(type) {
		switch (type) {
			case 0:
				return "grass";
			case 5:
				return "rock";
			case 6:
				return "tree";
			default:
				break;
		}
		return true;
	}

	setTileBackground(type) {
		switch (type) {
			case 0:
				return {
					backgroundImage: `url('${Grass}')`
				};
			case 5:
				return {
					backgroundImage: `url('${Rock}')`
				};
			case 6:
				return {
					backgroundImage: `url('${Tree}')`
				};
			default:
				break;
		}
		return true;
	}

	mapTile(tiles) {
		return tiles.map(tile => {
			return (
				<div
					className={`tile ${this.getTileSprite(tile)}`}
					style={this.setTileBackground(tile)}
				/>
			);
		});
	}

	mapRow() {
		const { tiles } = this.props;
		return tiles.map(row => {
			return <div className="tile-row">{this.mapTile(row)}</div>;
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
