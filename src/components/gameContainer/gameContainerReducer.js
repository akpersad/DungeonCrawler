const initialState = {
	playerChosen: false
};

const mapReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHOOSE_PLAYER":
			return {
				...action.payload
			};

		default:
			return state;
	}
};

export default mapReducer;
