import store from "../../config/store";
import { SPRITE_SIZE } from "../../global/constants";

const getNewPosition = direction => {
	const oldPosition = store.getState().player.position;

	switch (direction) {
		case "WEST":
			return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]];
		case "NORTH":
			return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
		case "EAST":
			return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]];
		case "SOUTH":
			return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
		default:
			return [oldPosition[0], oldPosition[1]];
	}
};

const dispatchMove = direction => {
	store.dispatch({
		type: "MOVE_PLAYER",
		payload: {
			position: getNewPosition(direction)
		}
	});
};

const handleKeyDown = event => {
	event.preventDefault();
	switch (event.keyCode) {
		case 37:
			dispatchMove("WEST");
			break;
		case 38:
			dispatchMove("NORTH");
			break;
		case 39:
			dispatchMove("EAST");
			break;
		case 40:
			dispatchMove("SOUTH");
			break;
		default:
			dispatchMove(event.keyCode);
	}
};

export const handleMovement = player => {
	window.addEventListener("keydown", e => {
		handleKeyDown(e);
	});

	return player;
};
