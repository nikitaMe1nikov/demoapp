import styled from 'styled-components';
import { TableHeader, TableBody } from 'grommet';
import { getColor, breakpointStyle } from 'theme';

export const StyledTableHeader = styled(TableHeader)`
  border-left: 21px solid ${getColor('brand')};
  border-right: 21px solid ${getColor('brand')};

  & th {
    height: 48px;
    border: none;
  }

  ${breakpointStyle(
    'medium',
    `
    border: none;
  `
  )}
`;

export const StyledTableBody = styled(TableBody)`
  border: 24px solid ${getColor('white')};
  border-width: 30px 117px 30px 117px;

  & tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  & th {
    position: relative;
    padding-left: 0;
  }

  ${breakpointStyle(
    'medium',
    `
    border-width: 30px 30px 30px 92px;
  `
  )}
`;
