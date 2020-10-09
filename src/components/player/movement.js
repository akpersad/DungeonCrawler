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

const getSpritePosition = (direction, walkIndex) => {
	switch (direction) {
		case "SOUTH":
			return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
		case "NORTH":
			return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
		case "EAST":
			return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
		case "WEST":
			return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
		default:
			return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
	}
};

const getWalkIndex = () => {
	const { walkIndex } = store.getState().player;
	return walkIndex > 2 ? 0 : walkIndex + 1;
};

const observeBoundaries = newPosition => {
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

const dispatchMove = (newPosiiton, direction) => {
	const walkIndex = getWalkIndex();
	const previousState = store.getState().player;

	previousState.position = newPosiiton;
	previousState.direction = direction;
	previousState.walkIndex = walkIndex;
	previousState.spriteLocation = getSpritePosition(direction, walkIndex);

	store.dispatch({
		type: "MOVE_PLAYER",
		payload: previousState
	});
};

const attemptMove = direction => {
	const oldPosition = store.getState().player.position;
	const newPosition = getNewPosition(oldPosition, direction);

	if (observeBoundaries(newPosition) && observeImpassable(newPosition)) {
		dispatchMove(newPosition, direction);
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
