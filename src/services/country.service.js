import apiServiceCountries from "../api/apiServiceCountries";

class CountryService {
	getAllCountries= () => apiServiceCountries().get("all?fields=name,flags,capital,population,languages");
}

export default new CountryService();