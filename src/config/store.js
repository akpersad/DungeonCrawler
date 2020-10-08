import { combineReducers, createStore, compose } from "redux";
import playerReducer from "../components/player/playerReducer";
import mapReducer from "../components/map/mapReducer";

const rootReducer = combineReducers({
	player: playerReducer,
	map: mapReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
	rootReducer /* preloadedState, */,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
/* eslint-enable */

export default store;
