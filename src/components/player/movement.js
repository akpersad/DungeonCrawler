import store from "../../config/store";
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from "../../global/constants";

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

const observeBoundaries = (oldPosition, newPosition) => {
	return (
		newPosition[0] >= 0 &&
		newPosition[0] <= MAP_WIDTH &&
		newPosition[1] >= 0 &&
		newPosition[1] <= MAP_HEIGHT
	);
};

const observeImpassable = (oldPosition, newPosition) => {
	return;
};

const dispatchMove = direction => {
	const oldPosition = store.getState().player.position;
	const newPosition = getNewPosition(direction);
	store.dispatch({
		type: "MOVE_PLAYER",
		payload: {
			position: observeBoundaries(oldPosition, getNewPosition(direction))
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
