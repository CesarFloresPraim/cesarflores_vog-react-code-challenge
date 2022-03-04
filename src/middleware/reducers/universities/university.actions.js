import actionTypes from "./university.actionTypes";

//LOAD
const universityLoadStart = () => ({
	type: actionTypes.UNIVERSITY_LOAD_START,
});

const universityLoadSuccess = (universities) => ({
	type: actionTypes.UNIVERSITY_LOAD_SUCCESS,
	payload: universities,
});

const universityLoadError = (errorMessage) => ({
	type: actionTypes.UNIVERSITY_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	universityLoadStart,
	universityLoadSuccess,
    universityLoadError,
};
