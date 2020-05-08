import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import http, { EHttpStatus, APIError } from 'lib/http';
import { EMPTY_STRING } from 'lib/utils';
import { IQuote } from './types';

interface IQuotesResponse {
  result: string;
  assets: IQuote[];
  error?: string;
}

export const setQuotes: ActionCreatorWithPayload<string> = createAction('SET_QUOTES');

export const loadQuotes = () => async (dispatch: Dispatch): Promise<IQuotesResponse> => {
  const data = await http.post(EMPTY_STRING, {
    action: 'quote',
  });

  if (data.status === EHttpStatus.SUCCESS && data.data.error) {
    throw new APIError(data);
  }

  dispatch(setQuotes(data.data.assets));

  return Promise.resolve(data.data);
};
