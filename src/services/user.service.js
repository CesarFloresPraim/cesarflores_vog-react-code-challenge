import apiService from "../api/apiService";

class UserService {
	getAllUsers= () => apiService().get("users");
}

export default new UserService();