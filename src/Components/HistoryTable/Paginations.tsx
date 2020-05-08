import React, { memo } from 'react';
import { NextPage } from 'next';
import { Box, Button, Text } from 'grommet';

interface IPaginationsProps {
  current: number;
  total: number;
  delta?: number;
  onPaginate: (i: number) => void;
}

const Paginations: NextPage<IPaginationsProps> = ({ current, total, onPaginate, delta = 0 }) => {
  const onClickLeft = () => current > 0 && onPaginate(current - 1);
  const onClickRight = () => current < total - 1 && onPaginate(current + 1);

  return (
    <Box direction="row">
      <Button
        icon={
          <Text color="brand" size="xxlarge">
            🡐
          </Text>
        }
        onClick={onClickLeft}
      />
      <Box align="center" justify="center">
        <Text>{`${current + delta} / ${total}`}</Text>
      </Box>
      <Button
        icon={
          <Text color="brand" size="xxlarge">
            🡒
          </Text>
        }
        onClick={onClickRight}
      />
    </Box>
  );
};

export default memo(Paginations);
