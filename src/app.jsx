import React, { Component } from "react";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Favicon from "react-favicon";
import Logo from "./assets/images/male_one-large.png";
import { GlobalStyle } from "./global/_globalStyles";

import GameContainer from "./components/gameContainer/gameContainer";

class App extends Component {
	render() {
		return (
			<>
				<Favicon url={Logo} />
				<GlobalStyle />
				<GameContainer />
			</>
		);
	}
}

export default App;
