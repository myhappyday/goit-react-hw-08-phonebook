import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, Title, Subtitle } from './App.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
