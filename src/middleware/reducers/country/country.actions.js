import actionTypes from "./country.actionTypes";

//LOAD
const countryLoadStart = () => ({
	type: actionTypes.COUNTRY_LOAD_START,
});

const countryLoadSuccess = (countries) => ({
	type: actionTypes.COUNTRY_LOAD_SUCCESS,
	payload: countries,
});

const countryLoadError = (errorMessage) => ({
	type: actionTypes.COUNTRY_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	countryLoadStart,
	countryLoadSuccess,
    countryLoadError,
};
