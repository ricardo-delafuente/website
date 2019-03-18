import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NAMESPACE}`,
  timeout: 5000
});

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
