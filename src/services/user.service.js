import apiServicePosts from "../api/apiServicePosts";

class UserService {
	getAllUsers= () => apiServicePosts().get("users");
}

export default new UserService();