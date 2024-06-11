import { ajax } from "../tools/ajax";

export const getNews = async(categoria) => {
    const optionsRequest = {
        method: "GET",
        url: `https://news-api14.p.rapidapi.com/v2/search/articles`,
        params: {
            query: categoria,
            language: 'es',
            limit: '30'
          },
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIAPIKEY,
            'x-rapidapi-host': 'news-api14.p.rapidapi.com'
          }
    };
    return await ajax(optionsRequest);
}
