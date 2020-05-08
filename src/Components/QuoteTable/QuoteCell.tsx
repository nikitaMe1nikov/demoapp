import React, { memo } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { Star } from 'grommet-icons';
import { Box, TableRow, TableCell, Text } from 'grommet';
import { IQuote } from 'Modules/Quotes/types';

const StyledTableCell = styled(TableCell)`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const IconContainer = styled(Box)`
  position: absolute;
  left: -32px;
`;

interface IQuoteTableProps {
  quote: IQuote;
}

const QuoteTable: NextPage<IQuoteTableProps> = ({ quote }) => (
  <TableRow>
    <StyledTableCell scope="row">
      <IconContainer>
        <Star color="brand" />
      </IconContainer>
      <Text size="large">{quote.asset}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{quote.quote}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{quote.startDate}</Text>
    </StyledTableCell>
  </TableRow>
);

export default memo(QuoteTable);
