import React, { Component } from "react";
// import PropTypes from 'prop-types';

import { connect } from "react-redux";
import store from "../../config/store";
import { playChoices } from "../../global/constants";
import maleSprite from "../../assets/images/male_one-large.png";
import maleTwoSprite from "../../assets/images/male_two-large.png";
import femaleSprite from "../../assets/images/female_one-large.png";
import femaleTwoSprite from "../../assets/images/female_two-large.png";
import maleSpriteWalking from "../../assets/images/male_one-large_walking.png";
import maleTwoSpriteWalking from "../../assets/images/male_two-large_walking.png";
import femaleSpriteWalking from "../../assets/images/female_one_walking.png";
import femaleTwoSpriteWalking from "../../assets/images/female_two_walking.png";

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

	handleImageUpdate(imageObj, keyName) {
		return imageObj[keyName];
	}

	handleMouseEnter(event, imageObj) {
		if (event.target.src) {
			event.target.src = this.handleImageUpdate(imageObj, "after");
		} else {
			event.target.firstElementChild.src = this.handleImageUpdate(imageObj, "after");
		}
	}

	handleMouseLeave(event, imageObj) {
		if (event.target.src) {
			event.target.src = this.handleImageUpdate(imageObj, "before");
		} else {
			event.target.firstElementChild.src = this.handleImageUpdate(imageObj, "before");
		}
	}

	renderButtonChoice() {
		let counter = 0;
		return playChoices.map(player => {
			counter += 1;
			const image = {};
			if (player.playerName === "Player 1") {
				image.before = maleSprite;
				image.after = maleSpriteWalking;
			} else if (player.playerName === "Player 2") {
				image.before = maleTwoSprite;
				image.after = maleTwoSpriteWalking;
			} else if (player.playerName === "Player 3") {
				image.before = femaleSprite;
				image.after = femaleSpriteWalking;
			} else if (player.playerName === "Player 4") {
				image.before = femaleTwoSprite;
				image.after = femaleTwoSpriteWalking;
			}
			return (
				<button
					key={counter}
					className="character-btn"
					type="button"
					onClick={() => {
						this.handleStartButtonClick(player);
					}}
					onMouseEnter={event => {
						this.handleMouseEnter(event, image);
					}}
					onMouseLeave={event => {
						this.handleMouseLeave(event, image);
					}}
					value={player.playerId}
				>
					<img src={image.before} alt={player.playerName} />
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
