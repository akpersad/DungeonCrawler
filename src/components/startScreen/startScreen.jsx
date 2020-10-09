import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../config/store";
import { playChoices } from "../../global/constants";
// import PropTypes from 'prop-types';

class StartScreen extends Component {
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
			return (
				<button
					key={counter}
					type="button"
					onClick={() => {
						this.handleStartButtonClick(player);
					}}
					value={player.playerId}
				>
					{player.playerName}
				</button>
			);
		});
	}

	render() {
		return this.renderButtonChoice();
	}
}

function mapStateToProps(state) {
	return {
		...state
	};
}

// StartScreen.propTypes = {};

export default connect(mapStateToProps)(StartScreen);
