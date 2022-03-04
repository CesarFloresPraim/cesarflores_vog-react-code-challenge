import UniversityService from "../../../services/universities.service";
import actions from "./university.actions";

export const loadUniversitiesAsync = (country) => (dispatch) => {
	dispatch(actions.universityLoadStart());

	UniversityService.getAllUniversities(country)
		.then((response) => dispatch(actions.universityLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.universityLoadError(error.message)));
};


