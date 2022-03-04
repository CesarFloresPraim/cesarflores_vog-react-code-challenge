import actionTypes from "./zipcode.actionTypes";

//LOAD
const zipcodeLoadStart = () => ({
	type: actionTypes.ZIPCODE_LOAD_START,
});

const zipcodeLoadSuccess = (zipcode) => ({
	type: actionTypes.ZIPCODE_LOAD_SUCCESS,
	payload: zipcode,
});

const zipcodeLoadError = (errorMessage) => ({
	type: actionTypes.ZIPCODE_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	zipcodeLoadStart,
	zipcodeLoadSuccess,
    zipcodeLoadError,
};
