import actionTypes from "./university.actionTypes";
import initialState from "./university.initialState";

const universityReducer = (state = initialState, {
	type,
	payload
}) => {
	//LOAD
	switch (type) {
		case actionTypes.UNIVERSITY_LOAD_START:
			return {
				...state,
				isLoadingUniversities: true,
					universities: [],
					universitiesErrorMessage: null,
			};

		case actionTypes.UNIVERSITY_LOAD_SUCCESS:
			return {
				...state,
				isLoadingUniversities: false,
					universities: payload,
					universitiesErrorMessage: null,
			};

		case actionTypes.UNIVERSITY_LOAD_ERROR:
			return {
				...state,
				isLoadingUniversities: false,
					universitiesErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default universityReducer;