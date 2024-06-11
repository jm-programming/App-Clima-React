import { ajax } from "../tools/ajax";

const getToken = async () => {
  const optionsRequest = {
    method: "GET",
    url: `https://www.universal-tutorial.com/api/getaccesstoken`,
    headers: {
      Accept: "application/json",
      "api-token": import.meta.env.VITE_KEY_API_COUNTRY,
      "user-email": import.meta.env.VITE_EMAIL,
    },
  };
  return await ajax(optionsRequest);
};

export const token = await getToken();
