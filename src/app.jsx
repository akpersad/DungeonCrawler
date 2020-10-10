import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { GlobalStyle } from "./global/_globalStyles";

import GameContainer from "./components/gameContainer/gameContainer";

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<GameContainer />
			</>
		);
	}
}

export default App;
