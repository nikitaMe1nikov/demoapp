import { createReducer } from '@reduxjs/toolkit';
import { IUserState } from './types';
import { setUser } from './action';

const INITIAL: IUserState = {
  login: '',
  // login: 'login',
};

export default createReducer(INITIAL, {
  [setUser.type]: (state, { payload: login }) => {
    state.login = login;
  },
});
