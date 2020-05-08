import React, { memo } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
// import { Star } from 'grommet-icons';
import { Star } from '@styled-icons/material';
import { Box, TableRow, TableCell, Text } from 'grommet';
import { IDeal } from 'Modules/HistoryDeals/types';

const StyledTableCell = styled(TableCell)`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const IconContainer = styled(Box)`
  position: absolute;
  left: -32px;
`;

interface IQuoteTableProps {
  deal: IDeal;
}

const DealCell: NextPage<IQuoteTableProps> = ({ deal }) => (
  <TableRow>
    <StyledTableCell scope="row">
      <IconContainer>
        <Star color="brand" />
      </IconContainer>
      <Text size="large">{deal.asset}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{deal.startDate}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{deal.startQuote}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{deal.finishDate}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{deal.finishQuote}</Text>
    </StyledTableCell>
    <StyledTableCell>
      <Text size="large">{deal.profit}</Text>
    </StyledTableCell>
  </TableRow>
);

export default memo(DealCell);
