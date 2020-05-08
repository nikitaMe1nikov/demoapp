import React, { FC } from 'react';
import styled from 'styled-components';
import { FoldingCube } from 'styled-spinkit';
import { Box, BoxProps } from 'grommet';

const StyledFoldingCube = styled(FoldingCube).attrs(({ theme }) => ({
  color: theme.global.colors.brand,
  size: 40,
}))``;

const Spinner: FC<BoxProps> = (props) => (
  <Box height="410px" width="570px" {...props}>
    <Box height="60px" background="brand" />
    <Box flex="grow" align="center" justify="center">
      <StyledFoldingCube />
    </Box>
  </Box>
);

export default Spinner;
