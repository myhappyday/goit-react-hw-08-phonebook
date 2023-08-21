import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';
import Loader from 'components/Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {contacts &&
          contacts.map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              phone={phone}
            ></ContactListItem>
          ))}
      </List>
    </>
  );
};

export default ContactList;
