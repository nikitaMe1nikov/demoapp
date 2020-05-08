import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { Table, TableRow, TableCell, Text } from 'grommet';
import { getQuotes } from 'Modules/Quotes/selectors';
import QuoteCell from 'Components/QuoteTable/QuoteCell';
import TabRoundContainer from 'Components/TabRoundContainer';
import Spinner from 'Components/Spinner';
import { StyledTableHeader, StyledTableBody } from 'Components/Table';

const QuoteTable: NextPage = () => {
  const quotes = useSelector(getQuotes);

  if (!quotes.length)
    return (
      <TabRoundContainer>
        <Spinner />
      </TabRoundContainer>
    );

  return (
    <TabRoundContainer>
      <Table>
        <StyledTableHeader>
          <TableRow>
            <TableCell scope="col">
              <Text size="xlarge">Валютная пара</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Котировка</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Дата получения</Text>
            </TableCell>
          </TableRow>
        </StyledTableHeader>
        <StyledTableBody>
          {quotes.map((q) => (
            <QuoteCell key={q.asset} quote={q} />
          ))}
        </StyledTableBody>
      </Table>
    </TabRoundContainer>
  );
};

export default memo(QuoteTable);
