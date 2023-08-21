import React from 'react';
import imageError from '../images/error-oops.jpg';

import styled from '@emotion/styled';

const ErrorWrapper = styled.div`
  max-width: 600px;
  margin: 24px auto;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  margin: 0 auto;
`;

const Message = styled.p`
  margin: 0 auto;
  padding: 24px;
  text-align: center;
  color: #3f51b5;
  font-size: 26px;
  font-weight: 500;
`;

const NotFound = () => {
  return (
    <ErrorWrapper>
      <Image src={imageError} width="600" alt="Something went wrong" />
      <Message>Sorry, but the requested page does not exist.</Message>
    </ErrorWrapper>
  );
};

export default NotFound;
