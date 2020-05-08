import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import http, { EHttpStatus, APIError } from 'lib/http';
import { EMPTY_STRING } from 'lib/utils';

interface IAuthResponse {
  result: string;
  error?: string;
}

export const setUser: ActionCreatorWithPayload<string> = createAction('USER_AUTHENTICATE');

export const userLogin = (login: string, password: string) => async (dispatch: Dispatch): Promise<IAuthResponse> => {
  const data = await http.post(EMPTY_STRING, {
    action: 'login',
    login,
    password,
  });

  if (data.status === EHttpStatus.SUCCESS && data.data.error) {
    throw new APIError(data);
  }

  dispatch(setUser(login));

  return Promise.resolve(data.data);
};
