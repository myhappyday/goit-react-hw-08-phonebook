import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';

import { createTheme } from '@mui/material/styles';

export const LoginIcon = styled(BiLogInCircle)`
  width: 50px;
  height: 50px;
  color: #3f51b5;
`;

export const InAuth = styled(Link)`
  color: #90a4ae;
  transition: all 0.25s ease-Out;

  :hover {
    color: #607d8b;
    text-decoration: underline;
  }
`;

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: 'rgba(63, 81, 181, 0.6)',
      main: 'rgba(63, 81, 181, 0.8)',
      dark: 'rgba(63, 81, 181, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
