import UserService from "../../../services/user.service";
import actions from "./user.actions";

export const loadUsersAsync = () => (dispatch) => {
	dispatch(actions.userLoadStart());

	UserService.getAllUsers()
		.then((response) => dispatch(actions.userLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.userLoadError(error.message)));
};


