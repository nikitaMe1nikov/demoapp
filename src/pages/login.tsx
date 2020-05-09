import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Button, Heading, Form, FormField, TextInput, Text, ResponsiveContext } from 'grommet';
import { ArrowRight } from 'Components/Icons';
import { ROOT_URL } from 'urls';
import VALIDATORS from 'Components/Validators';
import { userLogin } from 'Modules/User/action';
import { EMPTY_STRING } from 'lib/utils';

const ModalContainer = styled(Box)`
  position: relative;
`;

const ErrorMessage = styled(Text)`
  position: absolute;
  bottom: 28px;
`;

const Login: NextPage = () => {
  const dispatch = useDispatch();
  const [errorApiMessage, setErrorApiMessage] = useState(EMPTY_STRING);
  const router = useRouter();
  const size = useContext(ResponsiveContext);

  const onSubmitForm = async ({ value: { login, password } }: any) => {
    try {
      await dispatch(userLogin(login, password));
      router.push(ROOT_URL);
    } catch (e) {
      if (e?.data?.data?.error) {
        setErrorApiMessage(e.data.data.error);
      } else {
        setErrorApiMessage(EMPTY_STRING);
      }
    }
  };

  const isSmall = size === 'small';

  return (
    <Box width={{ min: '100%' }} align="center" justify="center" background="background-back">
      <ModalContainer
        width={isSmall ? 'full' : 'modalWidth'}
        background="background-front"
        round={isSmall ? '0' : 'medium'}
        overflow="hidden"
      >
        <Form onSubmit={onSubmitForm}>
          <Box background="brand" align="center" justify="center" height="61px">
            <Heading level="3" size="small">
              Вход в личный кабинет
            </Heading>
          </Box>
          <Box height="430px" align="center" justify="between" pad={{ horizontal: '114px' }}>
            <Box width="250px" flex={{ shrink: 0 }}>
              <Box margin={{ top: 'large' }}>
                <FormField name="login" label="Логин" required validate={VALIDATORS.LOGIN}>
                  <TextInput size="large" name="login" placeholder="user@mail.ru" />
                </FormField>
              </Box>
              <Box margin={{ top: 'medium' }}>
                <FormField name="password" label="Пароль" required validate={VALIDATORS.PASSWORD}>
                  <TextInput size="large" name="password" type="password" placeholder="*********" />
                </FormField>
              </Box>
            </Box>
            <Box direction="row" justify="center" margin={{ bottom: '66px' }} flex={{ shrink: 0 }}>
              <Button type="submit" primary label="Вход" size="medium" icon={<ArrowRight size="medium" />} reverse />
            </Box>
            {!!errorApiMessage && (
              <ErrorMessage size="small" color="status-error">
                {errorApiMessage}
              </ErrorMessage>
            )}
          </Box>
        </Form>
      </ModalContainer>
    </Box>
  );
};

export default Login;
