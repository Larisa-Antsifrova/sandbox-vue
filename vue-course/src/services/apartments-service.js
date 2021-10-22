import axios from '../utils/axios';

export const getApartmentsList = async () => {
  return await axios.get('/apartments');
};

export const getApartmentById = async id => {
  return await axios.get(`/apartments/${id}`);
};
