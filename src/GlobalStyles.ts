import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }
`;
