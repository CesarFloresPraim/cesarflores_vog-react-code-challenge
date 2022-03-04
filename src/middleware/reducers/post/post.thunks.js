import PostService from "../../../services/post.service";
import actions from "./post.actions";

export const loadPostsAsync = () => (dispatch) => {
	dispatch(actions.postLoadStart());

	PostService.getBatchPosts(0,20)
		.then((response) => dispatch(actions.postLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.postLoadError(error.message)));
};

export const loadSinglePostAsync = id => (dispatch) => {

	if (!id) return [];

	PostService.getPostById(id)
		.then((response) => dispatch(actions.singlePostLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.postLoadError(error.message)));
};

export const loadPostsByUserId = id => (dispatch) => {

	if (!id) return [];

	PostService.getPostsByUserId(id)
		.then((response) => dispatch(actions.postLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.postLoadError(error.message)));
};

export const createPost = (payload) => (dispatch) => {
	dispatch(actions.postCreateSuccess());

	PostService.createPost(payload)
		.then((response) => dispatch(actions.postCreateSuccess("Created successfully")))
		.catch((error) => dispatch(actions.postCreateError(error.message)));
};

export const editPost = (payload) => (dispatch) => {
	dispatch(actions.postEditSuccess());

	PostService.editPost(payload)
		.then((response) => dispatch(actions.postEditSuccess("Edited successfully")))
		.catch((error) => dispatch(actions.postEditError(error.message)));
};


export const deletePost = (id) => (dispatch) => {
	dispatch(actions.postDeleteSuccess());

	PostService.deletePost(id)
		.then((response) => dispatch(actions.postDeleteSuccess("Deleted successfully")))
		.catch((error) => dispatch(actions.postDeleteError(error.message)));
};

export const cleanResponses = () => (dispatch) => {
	dispatch(actions.cleanResponses());
}

export const postNeedsUpdate = (post) => (dispatch) => {
	dispatch(actions.postNeedsUpdate(post));
}
