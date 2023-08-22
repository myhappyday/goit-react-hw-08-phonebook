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

// const Message = styled.p`
//   margin: 0 auto;
//   padding: 24px;
//   text-align: center;
//   color: #3f51b5;
//   font-size: 26px;
//   font-weight: 500;
// `;

const Title = styled.h2`
  margin: 40px auto;
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
