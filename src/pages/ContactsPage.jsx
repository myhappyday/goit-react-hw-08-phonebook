import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import React from 'react';
import Filter from '../components/Filter';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 460px;
  margin: 40px auto;
  padding: 30px 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: rgb(243, 243, 243);
  border-radius: 4px;
  font-size: 22px;
  // box-shadow: rgb(158, 158, 158) 0px 4px 10px 4px;
`;

const ContactsPage = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
