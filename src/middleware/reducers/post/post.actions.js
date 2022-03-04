import actionTypes from "./post.actionTypes";
import { v4 as uuidv4 } from 'uuid';

//LOAD
const postLoadStart = () => ({
	type: actionTypes.POST_LOAD_START,
});

const postLoadSuccess = (posts) => ({
	type: actionTypes.POST_LOAD_SUCCESS,
	payload: {
		posts: posts,
		postsUid: uuidv4()
	},
});

const postLoadError = (errorMessage) => ({
	type: actionTypes.POST_LOAD_ERROR,
	payload: errorMessage,
});

const singlePostLoadSuccess = (post) => ({
	type: actionTypes.SINGLE_POST_LOAD_SUCCESS,
	payload: {
		posts: [post],
		postsUid: uuidv4()
	}
});

//CREATE
const postCreateStart = () => ({
	type: actionTypes.POST_CREATE_START,
});

const postCreateSuccess = (response) => ({
	type: actionTypes.POST_CREATE_SUCCESS,
	payload: response,
});

const postCreateError = (errorMessage) => ({
	type: actionTypes.POST_CREATE_ERROR,
	payload: errorMessage,
});

//EDIT
const postEditStart = () => ({
	type: actionTypes.POST_EDIT_START,
});

const postEditSuccess = (response) => ({
	type: actionTypes.POST_EDIT_SUCCESS,
	payload: response,
});

const postEditError = (errorMessage) => ({
	type: actionTypes.POST_EDIT_ERROR,
	payload: errorMessage,
});

//DELETE
const postDeleteStart = () => ({
	type: actionTypes.POST_DELETE_START,
});

const postDeleteSuccess = (response) => ({
	type: actionTypes.POST_DELETE_SUCCESS,
	payload: response,
});

const postDeleteError = (errorMessage) => ({
	type: actionTypes.POST_DELETE_ERROR,
	payload: errorMessage,
});

//UTILS
const cleanResponses = () => ({
	type: actionTypes.POST_CLEAN_RESPONSES,
})

const postNeedsUpdate = (post) => ({
	type: actionTypes.EVENT_POST_NEEDS_UPDATE,
	payload: post
})

export default {
	postLoadStart,
	postLoadSuccess,
    postLoadError,
	singlePostLoadSuccess,
	postCreateStart,
	postCreateSuccess,
	postCreateError,
	postEditStart,
	postEditSuccess,
	postEditError,
	postDeleteStart,
	postDeleteSuccess,
	postDeleteError,
	cleanResponses,
	postNeedsUpdate
};
