import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h2`
  margin: 40px auto;
  text-align: center;
  color: #3f51b5;
  font-size: 32px;
`;

const HomePage = () => {
  return (
    <div>
      <Title>Welcome to web application, Phonebook!</Title>
    </div>
  );
};

export default HomePage;
