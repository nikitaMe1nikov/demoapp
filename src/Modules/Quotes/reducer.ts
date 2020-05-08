import { createReducer } from '@reduxjs/toolkit';
import { setQuotes } from './action';
import { IQuoteState } from './types';

const INITIAL: IQuoteState = {
  list: [],
};

export default createReducer(INITIAL, {
  [setQuotes.type]: (state, { payload: quotes }) => {
    state.list = quotes;
  },
});
