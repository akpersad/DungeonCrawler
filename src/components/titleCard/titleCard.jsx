import React, { Component } from "react";

class TitleCard extends Component {
	render() {
		return (
			<div className="title-card_container">
				<p className="title-card_text-container">
					<span className="title-card_header">React / Redux Character Scroller</span>
				</p>
				<p className="title-card_text-container">
					<span className="title-card_subheader">Select Your Character to Start</span>
				</p>
			</div>
		);
	}
}

export default TitleCard;
