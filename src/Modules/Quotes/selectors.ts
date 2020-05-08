import { IStoreState } from 'Modules/rootReducer';

export const getQuotes = (state: IStoreState) => state.quotes.list;
