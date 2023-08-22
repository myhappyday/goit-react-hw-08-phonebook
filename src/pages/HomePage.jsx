import React from 'react';
import styled from '@emotion/styled';
import imageURL from '../images/image.webp';

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 10px auto;
  text-align: center;
  color: #3f51b5;
  font-size: 32px;
`;

const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <Title>Welcome to web application Phonebook!</Title>
        <Image src={imageURL} alt="Mobile phones" />
      </Wrapper>
    </div>
  );
};

export default HomePage;
