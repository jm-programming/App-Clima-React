import { ajax } from "../tools/ajax";
import { token } from "./Token";

export const getCities = async (pais) => {
  const optionsRequest = {
    method: "GET",
    url: `https://www.universal-tutorial.com/api/states/${pais}`,
    headers: {
      Authorization: "Bearer " + token.auth_token,
      Accept: "application/json",
    },
  };
  return await ajax(optionsRequest);
};
