import axios from "axios";

const URL = "https://api.trakt.tv";
const HEADERS = {
  "Content-Type": "application/json",
  "trakt-api-key":
    "22191382100ed0738ba898847d7fe48d4ddb0d7864bfc47cc8003bc15c074935",
  "trakt-api-version": "2",
};

export const api = axios.create({
  baseURL: URL,
  headers: HEADERS,
});
