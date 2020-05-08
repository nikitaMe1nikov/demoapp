import { IStoreState } from 'Modules/rootReducer';

export const getHistoryDeals = (state: IStoreState) => state.deals.list;
