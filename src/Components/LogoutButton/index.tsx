import React, { memo } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'grommet';
import { LOGIN_URL } from 'urls';

const LogoutButton: NextPage = () => {
  const router = useRouter();
  const onClick = () => router.push(LOGIN_URL);

  return <Button label="Выход" size="medium" onClick={onClick} />;
};

export default memo(LogoutButton);
