import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import walkSprite from "../../assets/images/player_walk.png";
import { handleMovement } from "./movement";

class Player extends Component {
	construtor() {
		console.log(this);
	}

	render() {
		const { position } = this.props;
		return (
			<div
				className="player-container"
				style={{
					top: position[1],
					left: position[0],
					backgroundImage: `url('${walkSprite}')`
				}}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		...state.player
	};
}

Player.propTypes = {
	position: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(handleMovement(Player));
