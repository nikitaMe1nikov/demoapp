import user from 'Modules/User/reducer';
import { IUserState } from 'Modules/User/types';
import quotes from 'Modules/Quotes/reducer';
import { IQuoteState } from 'Modules/Quotes/types';
import deals from 'Modules/HistoryDeals/reducer';
import { IHistoryDealsState } from 'Modules/HistoryDeals/types';

export interface IStoreState {
  user: IUserState;
  quotes: IQuoteState;
  deals: IHistoryDealsState;
}

export default {
  user,
  quotes,
  deals,
};
