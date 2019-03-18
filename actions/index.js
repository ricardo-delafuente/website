import axios from 'axios';
import { getCookieFromReq } from '../helpers/utils';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: `${process.env.NAMESPACE}`,
  timeout: 5000
});

const setAuthHeader = req => {
  const token = req
    ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

  if (token) {
    return { headers: { authorization: `Bearer ${token}` } };
  }
};

// With authentication example
export const authRoute = async endpoint => {
  return await axiosInstance
    .get(endpoint, setAuthHeader())
    .then(response => response.data);
};

// --- Contact Form Actions ---
export const submitForm = async values => {
  return await axiosInstance
    .post('/contact/send', values)
    .then(response => {
      return response.data.message;
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
