import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

import GameContainer from "./components/gameContainer/gameContainer";

class App extends Component {
	render() {
		return <GameContainer />;
	}
}

export default App;
