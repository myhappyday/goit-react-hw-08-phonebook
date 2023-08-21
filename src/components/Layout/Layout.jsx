import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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

const Layout = () => {
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
            <StyledLink to="/register">Sign Up</StyledLink>
            <StyledLink to="/login">Log In</StyledLink>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </Wrapper>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        pauseOnHover
      /> */}
    </Container>
  );
};

export default Layout;
