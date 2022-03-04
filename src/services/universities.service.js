import apiServiceUniversities from "../api/apiServiceUniversities";

class UniversityService {
	getAllUniversities= (country) => apiServiceUniversities().get(`search?country=${country}`);
}

export default new UniversityService();