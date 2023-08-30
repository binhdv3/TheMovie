import {API_KEY, BASE_URL} from '../config';
import axios from 'axios';

export const GET = async url => {
  const API_URL = `${BASE_URL}?api_key=${API_KEY}`;

  let response = await axios.get(API_URL);
  response = response.data;
  return response;
};
