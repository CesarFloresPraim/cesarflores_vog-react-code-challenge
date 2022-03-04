import actionTypes from "./country.actionTypes";
import initialState from "./country.initialState";

const countryReducer = (state = initialState, {
	type,
	payload
}) => {
	//LOAD
	switch (type) {
		case actionTypes.COUNTRY_LOAD_START:
			return {
				...state,
				isLoadingCountries: true,
					countries: [],
					countriesErrorMessage: null,
			};

		case actionTypes.COUNTRY_LOAD_SUCCESS:
			return {
				...state,
				isLoadingCountries: false,
					countries: payload,
					countriesErrorMessage: null,
			};

		case actionTypes.COUNTRY_LOAD_ERROR:
			return {
				...state,
				isLoadingCountries: false,
				countriesErrorMessage: payload,
			};
		default:
			return state;
	}
};

export default countryReducer;