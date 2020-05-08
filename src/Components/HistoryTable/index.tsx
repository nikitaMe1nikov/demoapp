import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NextPage } from 'next';
import { Table, TableRow, TableCell, Text, Box } from 'grommet';
import { getHistoryDeals } from 'Modules/HistoryDeals/selectors';
import DealCell from './DealCell';
import TabRoundContainer from 'Components/TabRoundContainer';
import Spinner from 'Components/Spinner';
import { StyledTableHeader, StyledTableBody } from 'Components/Table';
import { IDeal } from 'Modules/HistoryDeals/types';
import Paginations from './Paginations';

const PaginationContainer = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

function splitList(list: any[], filterFunc: (v: any, filteredList: any[]) => boolean) {
  const filteredList = [];
  const otherList = [];

  for (let i = 0, l = list.length, item; i < l; ++i) {
    item = list[i];

    if (filterFunc(item, filteredList)) {
      filteredList.push(item);
    } else {
      otherList.push(item);
    }
  }

  return [filteredList, otherList];
}

function createFilter(limit = 10, minNotProfit = 0, maxNotProfit = 2, min100 = 0, max100 = 2, maxDoubles = 2) {
  let counterNotProfit = 0;
  let counter100 = 0;

  return ({ asset, profitNumber }: IDeal, filteredList: IDeal[]) => {
    if (filteredList.length < limit && filteredList.filter((d) => d.asset === asset).length < maxDoubles) {
      if (filteredList.filter((d) => d.asset === asset).length >= maxDoubles) {
        return false;
      }

      if (profitNumber < 0) {
        return (
          (minNotProfit > counterNotProfit || (minNotProfit <= counterNotProfit && counterNotProfit < maxNotProfit)) &&
          !!++counterNotProfit
        );
      } else if (profitNumber > 100) {
        return (min100 > counter100 || (min100 <= counter100 && counter100 < max100)) && !!++counter100;
      }

      return limit - filteredList.length > minNotProfit + min100 - counterNotProfit - counter100;
    }

    return false;
  };
}

function calcPaginations(
  deals: IDeal[],
  limit = 10,
  minNotProfit = 0,
  maxNotProfit = 2,
  min100 = 1,
  max100 = 2,
  maxDoubles = 2
) {
  const pagination = [];

  for (let list = deals, filtered: IDeal[]; ; ) {
    [filtered, list] = splitList(list, createFilter(limit, minNotProfit, maxNotProfit, min100, max100, maxDoubles));

    if (filtered.length) {
      pagination.push(filtered);
    } else {
      return pagination;
    }
  }
}

const HistoryTable: NextPage = () => {
  const deals = useSelector(getHistoryDeals);
  const paginations = calcPaginations(deals).slice(0, 2); // show only 20
  const [currentPag, setCurrentPag] = useState(0);

  if (!deals.length)
    return (
      <TabRoundContainer>
        <Spinner />
      </TabRoundContainer>
    );

  return (
    <TabRoundContainer pad={{ bottom: '38px' }}>
      <Table>
        <StyledTableHeader>
          <TableRow>
            <TableCell scope="col">
              <Text size="xlarge">Актив</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Начало</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Котировка</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Конец</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Котировка</Text>
            </TableCell>
            <TableCell scope="col">
              <Text size="xlarge">Прибыль</Text>
            </TableCell>
          </TableRow>
        </StyledTableHeader>
        <StyledTableBody>
          {paginations[currentPag].map((d) => (
            <DealCell key={`${d.startDate}${d.asset}`} deal={d} />
          ))}
        </StyledTableBody>
      </Table>
      <PaginationContainer align="center" justify="end" pad={{ bottom: '10px' }}>
        <Paginations current={currentPag} total={paginations.length} delta={1} onPaginate={setCurrentPag} />
      </PaginationContainer>
    </TabRoundContainer>
  );
};

export default memo(HistoryTable);
