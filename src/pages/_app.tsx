import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import makeStore from 'Modules/makeStore';
import GlobalStyles from 'GlobalStyles';
import theme from 'theme';

const StyledGrommet = styled(Grommet)`
  display: flex;
  min-height: 100%;
`;

class MyApp extends App<ReduxWrapperAppProps> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <StyledGrommet theme={theme}>
        <Provider store={store}>
          <Head>
            <title>Demoshop</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </StyledGrommet>
    );
  }
}

export default withRedux(makeStore)(MyApp);
