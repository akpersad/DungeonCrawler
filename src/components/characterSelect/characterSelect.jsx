import React, { Component } from "react";
// import PropTypes from 'prop-types';

import { connect } from "react-redux";
import store from "../../config/store";
import { playChoices } from "../../global/constants";
import maleSprite from "../../assets/images/male_one-large.png";
import maleTwoSprite from "../../assets/images/male_two-large.png";
import femaleSprite from "../../assets/images/female_one-large.png";
import femaleTwoSprite from "../../assets/images/female_two-large.png";

class CharacterSelect extends Component {
	handleStartButtonClick(player) {
		const payloadObj = store.getState().player;
		switch (player.playerId) {
			case "male_one":
				payloadObj.playOneChosen = true;
				break;
			case "male_two":
				payloadObj.playTwoChosen = true;
				break;
			case "female_one":
				payloadObj.playThreeChosen = true;
				break;
			case "female_two":
				payloadObj.playFourChosen = true;
				break;

			default:
				break;
		}

		payloadObj.playChoice = player;

		store.dispatch({
			type: "CHOOSE_PLAYER",
			payload: { playerChosen: true }
		});

		store.dispatch({
			type: "MOVE_PLAYER",
			payload: payloadObj
		});
	}

	renderButtonChoice() {
		let counter = 0;
		return playChoices.map(player => {
			counter += 1;
			let image;
			if (player.playerName === "Player 1") {
				image = maleSprite;
			} else if (player.playerName === "Player 2") {
				image = maleTwoSprite;
			} else if (player.playerName === "Player 3") {
				image = femaleSprite;
			} else if (player.playerName === "Player 4") {
				image = femaleTwoSprite;
			}
			return (
				<button
					key={counter}
					type="button"
					onClick={() => {
						this.handleStartButtonClick(player);
					}}
					value={player.playerId}
				>
					<img src={image} alt={player.playerName} />
				</button>
			);
		});
	}

	render() {
		return <div className="sprite-selection_container">{this.renderButtonChoice()}</div>;
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

// CharacterSelect.propTypes = {};

export default connect(mapStateToProps)(CharacterSelect);
