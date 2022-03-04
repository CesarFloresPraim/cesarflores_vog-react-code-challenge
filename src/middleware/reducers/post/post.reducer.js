import actionTypes from "./post.actionTypes";
import initialState from "./post.initialState";

const postReducer = (state = initialState, {
	type,
	payload
}) => {
	switch (type) {
		case actionTypes.POST_LOAD_START:
			return {
				...state,
				isLoading: true,
					posts: [],
					errorMessage: null,
			};

		case actionTypes.POST_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
					...payload,
					errorMessage: null,
			};

		case actionTypes.POST_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
					errorMessage: payload,
			};

		case actionTypes.SINGLE_POST_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
					...payload,
					errorMessage: null,
			};
			//CREATE
		case actionTypes.POST_CREATE_START:
			return {
				...state,
				isLoadingCreate: true,
					createResponse: null,
					createErrorMessage: null,
			};
		case actionTypes.POST_CREATE_SUCCESS:
			return {
				...state,
				isLoadingCreate: false,
					createResponse: payload,
					createErrorMessage: null,
			};

		case actionTypes.POST_CREATE_ERROR:
			return {
				...state,
				isLoadingCreate: false,
					createErrorMessage: payload,
			};
			//EDIT
		case actionTypes.POST_EDIT_START:
			return {
				...state,
				isLoadingEdit: true,
					editResponse: null,
					editErrorMessage: null,
			};
		case actionTypes.POST_EDIT_SUCCESS:
			return {
				...state,
				isLoadingEdit: false,
					editResponse: payload,
					editErrorMessage: null,
					originalPost: null,
					pendingPostUpdate: false,
			};

		case actionTypes.POST_EDIT_ERROR:
			return {
				...state,
				isLoadinEdit: false,
					editErrorMessage: payload,
			};
			//DELETE
		case actionTypes.POST_DELETE_START:
			return {
				...state,
				isLoadingDelete: true,
					deleteResponse: null,
					deleteErrorMessage: null,
			};
		case actionTypes.POST_DELETE_SUCCESS:
			return {
				...state,
				isLoadingDelete: false,
					deleteResponse: payload,
					deleteErrorMessage: null,
			};

		case actionTypes.POST_DELETE_ERROR:
			return {
				...state,
				isLoadingDelete: false,
					deleteErrorMessage: payload,
			};
			//UTILS
		case actionTypes.POST_CLEAN_RESPONSES:
			return {
				...state,
				createResponse: null,
					editResponse: null,
					deleteResponse: null,
			};
		case actionTypes.EVENT_POST_NEEDS_UPDATE:
			return {
				...state,
				pendingPostUpdate: true,
					originalPost: payload
			};
		default:
			return state;
	}
};

export default postReducer;