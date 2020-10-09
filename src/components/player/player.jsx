import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import walkSprite from "../../assets/images/player_walk.png";
import maleOne from "../../assets/images/male_one.png";
import maleTwo from "../../assets/images/male_two.png";
import femaleOne from "../../assets/images/female_one.png";
import femaleTwo from "../../assets/images/female_two.png";
import { handleMovement } from "./movement";

class Player extends Component {
	getPlayerChoice() {
		const { playChoice } = this.props;

		switch (playChoice.playerId) {
			case "male_one":
				return maleOne;

			case "male_two":
				return maleTwo;

			case "female_one":
				return femaleOne;

			case "female_two":
				return femaleTwo;

			default:
				return maleOne;
		}
	}

	render() {
		const { position, spriteLocation } = this.props;
		return (
			<div
				className="player-container"
				style={{
					top: position[1],
					left: position[0],
					backgroundImage: `url('${this.getPlayerChoice()}')`,
					backgroundPosition: spriteLocation
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
	position: PropTypes.array.isRequired,
	spriteLocation: PropTypes.string.isRequired,
	playChoice: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(handleMovement(Player));
