import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { MakeStore } from 'next-redux-wrapper';
import rootReducer, { IStoreState } from 'Modules/rootReducer';

export const makeStore: MakeStore = (initialState: IStoreState) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
  });

  return store;
};

export default makeStore;
