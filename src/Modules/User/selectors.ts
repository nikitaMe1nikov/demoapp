import { IStoreState } from 'Modules/rootReducer';

export const isLogin = (state: IStoreState) => !!state.user.login;
