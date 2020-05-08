import { createReducer } from '@reduxjs/toolkit';
import { getTime, parseISO } from 'date-fns';
import { setHistoryDeals } from './action';
import { IHistoryDealsState, IDeal } from './types';

const INITIAL: IHistoryDealsState = {
  list: [],
};

export default createReducer(INITIAL, {
  [setHistoryDeals.type]: (state, { payload: deals }: { payload: IDeal[] }) => {
    state.list = deals
      .map((d) => {
        d.finishTime = getTime(parseISO(d.finishDate));
        d.profitNumber = +d.profit;
        return d;
      })
      .sort((a, b) => (a.finishTime > b.finishTime ? 0 : 1));
  },
});
