import React, { useCallback } from 'react';
import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import { Box, Tabs, Tab, Text } from 'grommet';
import { LOGIN_URL, ROOT_URL } from 'urls';
import QuoteTable from 'Components/QuoteTable';
import LogoutButton from 'Components/LogoutButton';
import CurrencyConvertor from 'Components/CurrencyConvertor';
import HistoryTable from 'Components/HistoryTable';
import { loadQuotes } from 'Modules/Quotes/action';
import { getQuotes } from 'Modules/Quotes/selectors';
import { loadHistoryDeals } from 'Modules/HistoryDeals/action';
import { getHistoryDeals } from 'Modules/HistoryDeals/selectors';
import { isLogin } from 'Modules/User/selectors';
import Router, { useRouter } from 'next/router';
import { PromiseResult } from 'lib/utils';

const LogoutButtonContainer = styled(Box)`
  position: absolute;
  top: 44px;
  right: 90px;
`;

export const getInitialProps = async ({ store, isServer, query, res }: NextPageContext<any, any>) => {
  // login redirect;
  if (!isLogin(store.getState())) {
    isServer ? res.writeHead(302, { Location: LOGIN_URL }).end() : Router.push(LOGIN_URL);

    return { query };
  }

  if (query.history) {
    if (getHistoryDeals(store.getState()).length) {
      store.dispatch(loadHistoryDeals());
    } else {
      await store.dispatch(loadHistoryDeals());
    }
  } else {
    if (getQuotes(store.getState()).length) {
      store.dispatch(loadQuotes());
    } else {
      await store.dispatch(loadQuotes());
    }
  }

  return { query };
};

function calcQuery(i: number) {
  if (i === 0) {
    return {};
  }

  if (i === 1) {
    return { converter: true };
  }

  return { history: true };
}

type IAppProps = PromiseResult<ReturnType<typeof getInitialProps>>;

const App: NextPage<IAppProps> = ({ query }) => {
  const router = useRouter();
  const activeIndex = query.converter ? 1 : query.history ? 2 : 0;
  const onActive = useCallback(
    (i: number) =>
      router.push({
        pathname: ROOT_URL,
        query: calcQuery(i),
      }),
    [router]
  );

  return (
    <Box width={{ min: '100%' }} align="center" background="background-back" pad={{ top: '300px' }}>
      <Box overflow="hidden">
        <Tabs justify="start" activeIndex={activeIndex} onActive={onActive}>
          <Tab title={<Text size="medium">Курсы валют</Text>}>
            <QuoteTable />
          </Tab>
          <Tab title={<Text size="medium">Конвертор</Text>}>
            <CurrencyConvertor />
          </Tab>
          <Tab title={<Text size="medium">История</Text>}>
            <HistoryTable />
          </Tab>
        </Tabs>
      </Box>
      <LogoutButtonContainer>
        <LogoutButton />
      </LogoutButtonContainer>
    </Box>
  );
};

App.getInitialProps = getInitialProps;

export default App;
