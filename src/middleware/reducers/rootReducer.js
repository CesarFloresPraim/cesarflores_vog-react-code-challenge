import { combineReducers } from "redux";
import countryReducer from "./country/country.reducer";
import postReducer from "./post/post.reducer";
import universityReducer from "./universities/university.reducer";
import userReducer from "./user/user.reducer";
import zipcodeReducer from "./zipcode/zipcode.reducer";

const rootReducer = () =>
	combineReducers({
		posts: postReducer,
		users: userReducer,
		countries: countryReducer,
		universities: universityReducer,
		zipcodes: zipcodeReducer
	});

export default rootReducer;