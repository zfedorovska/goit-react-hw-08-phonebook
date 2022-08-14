import { useSelector } from 'react-redux';
import { getLoading } from '../redux/contacts/contacts-selectors';
import ContactForm from 'components/PhoneBook/ContactForm';
import Filter from 'components/PhoneBook/Filter';
import ContactList from 'components/PhoneBook/ContactList';
import Spinner from '../components/PhoneBook/Spinner';
import { Container } from 'react-bootstrap';

export default function ContactsView() {
  const loading = useSelector(getLoading);
  return (
    <Container>
      <h1 className="shadow-sm text-success mt-3 p-2 text-center rounded">
        Phonebook
      </h1>
      <ContactForm />
      <h2 className="mt-3 p-2 text-center">Contacts</h2>
      {loading && <Spinner />}
      <Filter />
      <ContactList />
    </Container>
  );
}
