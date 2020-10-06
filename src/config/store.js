import { combineReducers, createStore, compose } from "redux";
import playerReducer from "../components/player/playerReducer";

const rootReducer = combineReducers({
	player: playerReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
	rootReducer /* preloadedState, */,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
/* eslint-enable */

export default store;
