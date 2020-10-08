import store from "../../config/store";
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from "../../global/constants";

const getNewPosition = (oldPosition, direction) => {
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

const observeImpassable = newPosition => {
	const { tiles } = store.getState().map;
	const rowMove = newPosition[1] / SPRITE_SIZE;
	const columnMove = newPosition[0] / SPRITE_SIZE;
	const newTile = tiles[rowMove][columnMove];
	return newTile !== 5 && newTile !== 6;
};

const dispatchMove = newPosiiton => {
	store.dispatch({
		type: "MOVE_PLAYER",
		payload: {
			position: newPosiiton
		}
	});
};

const attemptMove = direction => {
	const oldPosition = store.getState().player.position;
	const newPosition = getNewPosition(oldPosition, direction);

	if (observeBoundaries(oldPosition, newPosition) && observeImpassable(newPosition)) {
		dispatchMove(newPosition);
	}
};

const handleKeyDown = event => {
	event.preventDefault();
	switch (event.keyCode) {
		case 37:
			attemptMove("WEST");
			break;
		case 38:
			attemptMove("NORTH");
			break;
		case 39:
			attemptMove("EAST");
			break;
		case 40:
			attemptMove("SOUTH");
			break;
		default:
			attemptMove(event.keyCode);
	}
};

export const handleMovement = player => {
	window.addEventListener("keydown", e => {
		handleKeyDown(e);
	});

	return player;
};
