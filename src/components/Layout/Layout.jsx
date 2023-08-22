import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLogged } from 'redux/auth/selectors';

import Loader from '../Loader';
import {
  Container,
  StyledLink,
  Header,
  Nav,
  Wrapper,
  LogoLink,
  LogoIcon,
} from './Layout.styled';
import UserMenu from '../../components/UserMenu';

const Layout = () => {
  const isLogged = useSelector(selectIsLogged);
  return (
    <Container>
      <Header>
        <Nav>
          <LogoLink to="/">
            <LogoIcon />
            Phonebook
          </LogoLink>
          <Wrapper>
            <StyledLink to="/">Home</StyledLink>
            {isLogged ? (
              <>
                <StyledLink to="/contacts">Contacts</StyledLink>
                <UserMenu />
              </>
            ) : (
              <>
                <StyledLink to="/register">Sign Up</StyledLink>
                <StyledLink to="/login">Log In</StyledLink>
              </>
            )}
          </Wrapper>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
