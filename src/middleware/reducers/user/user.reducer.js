import actionTypes from "./user.actionTypes";
import initialState from "./user.initialState";

const userReducer = (state = initialState, {
	type,
	payload
}) => {
	//LOAD
	switch (type) {
		case actionTypes.USER_LOAD_START:
			return {
				...state,
				isLoading: true,
					users: [],
					errorMessage: null,
			};

		case actionTypes.USER_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
					users: payload,
					errorMessage: null,
			};

		case actionTypes.USER_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
					errorMessage: payload,
			};
		default:
			return state;
	}
};

export default userReducer;