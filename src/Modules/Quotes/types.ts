export interface IQuote {
  asset: string;
  startDate: string;
  quote: string;
}

export interface IQuoteState {
  list: IQuote[];
}
