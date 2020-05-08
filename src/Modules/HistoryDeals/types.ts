export interface IDeal {
  asset: string;
  startDate: string;
  startQuote: string;
  finishDate: string;
  finishTime?: number;
  finishQuote: string;
  profit: string;
  profitNumber?: number;
}

export interface IHistoryDealsState {
  list: IDeal[];
}
