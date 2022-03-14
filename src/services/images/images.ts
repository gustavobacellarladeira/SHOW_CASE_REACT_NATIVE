import axios from "axios";

const API_KEY = "api_key=03791a693cb381520e8ce43855aa2d72";

const URL = "http://webservice.fanart.tv/v3/movies/";

export const getImage = async (id) => {
  const res = axios.get(`${URL}${id}?${API_KEY}`);
  return res;
};
