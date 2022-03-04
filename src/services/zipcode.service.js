import apiServiceZipcode from "../api/apiServiceZipcode";

class ZipcodeService {
	getZipcodeDetails= (countryCode,zipcode) => apiServiceZipcode().get(`${countryCode}/${zipcode}`);
}

export default new ZipcodeService();