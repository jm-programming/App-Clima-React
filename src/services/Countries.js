import { ajax } from "../tools/ajax";
import { getToken } from './Token'
 
export const getCountries = async() => {
    const optionsRequest = {
        method: "GET",
        url: 'https://www.universal-tutorial.com/api/countries/',
        headers: {
            "Authorization": "Bearer "+ getToken.auth_token,
            "Accept": "application/json"
        },
    };
    return await ajax(optionsRequest);
}


