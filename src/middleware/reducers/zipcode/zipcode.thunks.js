import ZipcodeService from "../../../services/zipcode.service";
import actions from "./zipcode.actions";

export const loadZipcodeDetailsAsync = (countryCode,zipcode) => (dispatch) => {
	dispatch(actions.zipcodeLoadStart());
	console.log(countryCode,zipcode);
	ZipcodeService.getZipcodeDetails(countryCode,zipcode)
		.then((response) => dispatch(actions.zipcodeLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.zipcodeLoadError(error.message)));
};


