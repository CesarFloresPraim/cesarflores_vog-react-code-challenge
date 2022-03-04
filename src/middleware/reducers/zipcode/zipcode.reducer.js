import actionTypes from "./zipcode.actionTypes";
import initialState from "./zipcode.initialState";

const zipcodeReducer = (state = initialState, {
	type,
	payload
}) => {
	//LOAD
	switch (type) {
		case actionTypes.ZIPCODE_LOAD_START:
			return {
				...state,
				isLoadingZipcode: true,
					zipcode: null,
					zipcodeErrorMessage: null,
			};

		case actionTypes.ZIPCODE_LOAD_SUCCESS:
			return {
				...state,
				isLoadingZipcode: false,
					zipcode: payload,
					zipcodeErrorMessage: null,
			};

		case actionTypes.ZIPCODE_LOAD_ERROR:
			return {
				...state,
				isLoadingZipcode: false,
					zipcodeErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default zipcodeReducer;