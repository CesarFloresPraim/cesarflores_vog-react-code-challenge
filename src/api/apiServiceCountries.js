import axios from "axios";

const apiServiceCountries = () => {
	//const { REACT_APP_API_URL } = process.env;
    //As it is a challenge api url is hardcoded. Can be added at .env file.
    const REACT_APP_API_URL="https://restcountries.com/v3.1/"

	const axiosInstance = axios.create({
		baseURL: REACT_APP_API_URL,
		responseType: "json",
	});

	return axiosInstance;
};

export default apiServiceCountries;