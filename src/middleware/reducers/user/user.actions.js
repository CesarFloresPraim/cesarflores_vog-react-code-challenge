import actionTypes from "./user.actionTypes";

//LOAD
const userLoadStart = () => ({
	type: actionTypes.USER_LOAD_START,
});

const userLoadSuccess = (posts) => ({
	type: actionTypes.USER_LOAD_SUCCESS,
	payload: posts,
});

const userLoadError = (errorMessage) => ({
	type: actionTypes.USER_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	userLoadStart,
	userLoadSuccess,
    userLoadError,
};
