import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'https://fakestoreapi.in/api/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ResTypes {
  status: 'BAD-REQUEST' | 'SUCCESS';
  message: string;
}

const getData = <T>(endpoint: string): Promise<T> => {
  return axiosInstance.get<T>(endpoint).then(res => res.data);
};

export { axiosInstance, getData };
