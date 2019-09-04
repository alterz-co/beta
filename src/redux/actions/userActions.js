import axios from 'axios';
import bcrypt from 'bcryptjs';
import { SIGN_IN, SIGN_UP, FETCH_USER, SIGN_OUT } from '../types/authTypes';

const urlPrefix = '/api/user';

export const fetchUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${urlPrefix}/current_user`);
      dispatch({
        type: FETCH_USER,
        user: res.data
      });
    } catch (err) {
      console.log('fetch user error', err);
    }
  };
};

export const loginUser = (userData, history) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${urlPrefix}/login`, userData);
      dispatch({
        type: SIGN_IN,
        user: res.data
      });
      history.push('/home');
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
      await axios.post(`${urlPrefix}/register`, userData);
      dispatch({
        type: SIGN_UP,
        user: userData
      });
      history.push('/home');
    } catch (err) {
      console.error('login error', err);
    }
  };
};

export const logoutUser = history => {
  return async dispatch => {
    try {
      await axios.get(`${urlPrefix}/logout`);
      dispatch({
        type: SIGN_OUT,
        user: null
      });
      history.push('/');
    } catch (err) {
      console.error('login error', err);
    }
  };
};
