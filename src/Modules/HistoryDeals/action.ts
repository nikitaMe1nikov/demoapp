import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import http, { EHttpStatus, APIError } from 'lib/http';
import { EMPTY_STRING } from 'lib/utils';
import { IDeal } from './types';

interface IHistoryDealsResponse {
  result: string;
  assets: IDeal[];
  error?: string;
}

export const setHistoryDeals: ActionCreatorWithPayload<string> = createAction('SET_HISTORY_DEALS');

export const loadHistoryDeals = () => async (dispatch: Dispatch): Promise<IHistoryDealsResponse> => {
  const data = await http.post(EMPTY_STRING, {
    action: 'history',
  });

  if (data.status === EHttpStatus.SUCCESS && data.data.error) {
    throw new APIError(data);
  }

  dispatch(setHistoryDeals(data.data.deals));

  return Promise.resolve(data.data);
};
