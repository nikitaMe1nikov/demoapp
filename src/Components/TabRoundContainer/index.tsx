import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { Box, BoxProps } from 'grommet';

const Container = styled(Box)`
  border-top-left-radius: 0;
  position: relative;
`;

const TabRoundContainer: NextPage<BoxProps> = ({ children, ...rest }) => (
  <Container background="background-front" round="medium" overflow="hidden" {...rest}>
    {children}
  </Container>
);

export default TabRoundContainer;
