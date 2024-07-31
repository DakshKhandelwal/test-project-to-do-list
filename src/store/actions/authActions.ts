import axios from 'axios';
import { Dispatch } from 'redux';
import { userLoaded, authError, loginSuccess, loginFail, logout } from '../reducers/authReducer';
import { AppThunk } from '../store';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Load User
export const loadUser = (): AppThunk => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/api/auth`);

    dispatch(userLoaded(res.data));
  } catch (err) {
    dispatch(authError());
  }
};

// Login User
export const login = (email: string, password: string): AppThunk => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${API_URL}/api/auth/login`, body, config);

    dispatch(loginSuccess(res.data.token));
  } catch (err) {
    dispatch(loginFail());
  }
};

// Signup User
export const signup = (email: string, password: string): AppThunk => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post(`${API_URL}/api/auth/signup`, body, config);
      dispatch(loginSuccess(res.data.token)); // Automatically log in the user after signup
    } catch (err) {
      console.error('Signup Error:', err);
      dispatch(loginFail());
    }
  };


// Logout User
export const logoutUser = (): AppThunk => (dispatch) => {
  dispatch(logout());
};
