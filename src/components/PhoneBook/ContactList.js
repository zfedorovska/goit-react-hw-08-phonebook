import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './PhoneBook.module.css';
import { Button } from 'react-bootstrap';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className="list-group col col-lg-5">
        {contacts.map(({ id, name, number }) => (
          <li className="list-group-item w-auto" key={id}>
            <p className={s.contactItem}>
              {name}: {number}{' '}
              <Button
                variant="danger btn-block"
                onClick={() => dispatch(deleteContact(id))}
              >
                Remove
              </Button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
