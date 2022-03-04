export default {
	//LOAD
	isLoading: false,
	id: null,
	posts: [],
	postsUid: null,
	errorMessage: null,
	//CREATE
	isLoadingCreate: false,
	createResponse: null,
	createErrorMessage: null,
	//EDIT
	originalPost: null,
	pendingPostUpdate: false,
	isLoadingEdit: false,
	editResponse: null,
	editErrorMessage: null,
	//DELETE
	isLoadingDelete: false,
	deleteResponse: null,
	deleteErrorMessage: null,
};