import React, { memo, useMemo, useCallback, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { Box, Button, Select, Form, FormField, TextInput, Text, ResponsiveContext } from 'grommet';
import { getQuotes } from 'Modules/Quotes/selectors';
import TabRoundContainer from 'Components/TabRoundContainer';

const SLASH = '/';

const CurrencyConvertor: NextPage = () => {
  const quotes = useSelector(getQuotes);
  const size = useContext(ResponsiveContext);

  const { optFrom, optToMap } = useMemo(() => {
    const optFrom = [];
    const optToMap = {};

    for (let i = 0, l = quotes.length, from: string, to: string; i < l; ++i) {
      [from, to] = quotes[i].asset.split(SLASH);
      if (!optFrom.includes(from)) optFrom.push(from);

      if (!optToMap[from]) {
        optToMap[from] = [to];
      } else {
        optToMap[from].push(to);
      }
    }

    return { optFrom, optToMap };
  }, [quotes]);

  const [fromAsset, setFromAsset] = useState(optFrom[0]);
  const [toAsset, setToAsset] = useState(optToMap[optFrom[0]]);
  const [total, setTotal] = useState(0);

  const onChangeFrom = useCallback(
    ({ option }) => {
      setFromAsset(option);
      setToAsset(optToMap[option][0]);
    },
    [optToMap]
  );

  const onChangeTo = ({ option }) => setToAsset(option);

  const onSubmitForm = ({ value: { amount } }: any) => {
    const { quote } = quotes.find((q) => q.asset === fromAsset + SLASH + toAsset);

    if (quote) setTotal(amount * +quote);
  };

  const isSmall = size === 'small';

  return (
    <TabRoundContainer>
      <Box height="60px" justify="center" background="brand" pad={{ left: '69px' }}>
        <Text size="xlarge">Конвертация валют</Text>
      </Box>
      <Box
        height={{ min: '350px' }}
        pad={{
          horizontal: '70px',
        }}
      >
        <Form onSubmit={onSubmitForm}>
          <Box height={{ min: '160px' }} direction="row-responsive" align="center">
            <Box width={isSmall ? '100%' : '100px'} margin={{ right: '32px', top: '13px' }} alignSelf="start">
              <FormField name="amount" label="Сумма" required>
                <TextInput type="number" size="large" name="amount" placeholder="100" />
              </FormField>
            </Box>
            <Box width={isSmall ? '100%' : '125px'} margin={{ right: '32px', top: isSmall ? '14px' : '0' }}>
              <Select options={optFrom} value={fromAsset} size="large" onChange={onChangeFrom} />
            </Box>
            <Box width={isSmall ? '100%' : '125px'} margin={{ right: '32px', top: isSmall ? '24px' : '0' }}>
              <Select size="large" options={optToMap[fromAsset]} value={toAsset} onChange={onChangeTo} />
            </Box>
            <Box margin={{ top: '24px', bottom: '24px' }}>
              <Button type="submit" primary label="Рассчитать" size="large" />
            </Box>
          </Box>
        </Form>
        <Box height="1px" background="rgba(0,0,0,0.2)" width="100%" />
        <Box pad={{ top: '40px' }} height={{ min: '160px' }} flex="grow">
          {!!total && (
            <>
              <Text>Итого</Text>
              <Text size="xxlarge">{total}</Text>
            </>
          )}
        </Box>
      </Box>
    </TabRoundContainer>
  );
};

export default memo(CurrencyConvertor);
