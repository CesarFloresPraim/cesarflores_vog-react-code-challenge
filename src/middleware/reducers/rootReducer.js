import { combineReducers } from "redux";
import postReducer from "./post/post.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = () =>
	combineReducers({
		posts: postReducer,
		users: userReducer
	});

export default rootReducer;