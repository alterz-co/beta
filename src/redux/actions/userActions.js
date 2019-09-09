import axios from 'axios';
import bcrypt from 'bcryptjs';
import { SIGN_IN, SIGN_UP, FETCH_USER, SIGN_OUT } from '../types/authTypes';
import {uiStartLoading, uiStopLoading, uiError} from './uiActions';

const urlPrefix = '/api/user';

export const fetchUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`${urlPrefix}/current_user`);
      if (res.data.id) {
        localStorage.setItem('userSession', res.data.id);
      }
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
      dispatch(uiStartLoading());
      dispatch(uiError(null));
      const res = await axios.post(`${urlPrefix}/login`, userData);
      if (res.data.id) {
        localStorage.setItem('userSession', res.data.id);
      }
      dispatch(uiStopLoading());
      dispatch({
        type: SIGN_IN,
        user: res.data
      });
      history.push('/home');
    } catch (err) {
      dispatch(uiError('Failed to login. Please try again.'));
      dispatch(uiStopLoading());
      console.error('login error', err);
    }
  };
};

export const registerUser = (userData, history) => {
  return async dispatch => {
    try {
      dispatch(uiStartLoading());
      dispatch(uiError(null));
      const { email, password } = userData;
      const hash = await bcrypt.hash(password, 10);
      userData.password = hash;
      userData.__typename = 'User';
      userData.createdAt = new Date().toISOString();
      userData.updatedAt = new Date().toISOString();
      const res = await axios.post(`${urlPrefix}/register`, userData);
      dispatch(uiStopLoading());
      if (res.data.error) {
        dispatch(uiError(res.data.error));
        return;
      }
      dispatch(loginUser({email, password}));
    } catch (err) {
      dispatch(uiError('Failed to register account. Please try again.'));
      dispatch(uiStopLoading());
      console.error('registration error', err.message);
    }
  };
};

export const logoutUser = history => {
  return async dispatch => {
    try {
      await axios.get(`${urlPrefix}/logout`);
      history.push('/');
      localStorage.removeItem('userSession');
      dispatch({
        type: SIGN_OUT,
        user: null
      });
    } catch (err) {
      console.error('login error', err);
    }
  };
};
