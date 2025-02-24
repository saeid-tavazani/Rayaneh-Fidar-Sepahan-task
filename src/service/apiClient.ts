import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'https://fakestoreapi.in/api/products',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

const getData = <T>(endpoint: string): Promise<T> => {
  return axiosInstance.get<T>(endpoint).then(res => res.data);
};

export { axiosInstance, getData };
