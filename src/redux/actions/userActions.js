import axios from 'axios';
import bcrypt from 'bcryptjs';
import { SIGN_IN, SIGN_UP } from '../types/authTypes';

const urlPrefix = '/api/user';

export const loginUser = (userData, history) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${urlPrefix}/login`, userData);
      dispatch({
        type: SIGN_IN,
        payload: res.data
      });
      console.log('res data', res.data);
    } catch (err) {
      console.error('login error', err);
    }
  };
};

export const registerUser = (userData, history) => {
  return async dispatch => {
    try {
      const { password } = userData;
      const hash = await bcrypt.hash(password, 10);
      userData.password = hash;
      console.log('userData', userData);
      const res = await axios.post(`${urlPrefix}/register`, userData);
      dispatch({
        type: SIGN_UP,
        payload: res.data
      });
      console.log('res data', res.data);
    } catch (err) {
      console.error('login error', err);
    }
  };
};
