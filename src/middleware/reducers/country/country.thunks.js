import CountryService from "../../../services/country.service";
import actions from "./country.actions";

export const loadCountriesAsync = () => (dispatch) => {
	dispatch(actions.countryLoadStart());

	CountryService.getAllCountries()
		.then((response) => dispatch(actions.countryLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.countryLoadError(error.message)));
};