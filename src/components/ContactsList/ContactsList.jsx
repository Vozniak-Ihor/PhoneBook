import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { contactsSelector } from 'redux/contactSlice/contactSelectors';
import { getFilter } from 'redux/filterSlice/filterSelectors';
import imgBook from '../../images/book.png';

const ContactsList = () => {
  const storeContacts = useSelector(contactsSelector);
  const storeFilter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filteredContact = () => {
    return storeContacts.filter(({ name }) => {
      return name.toUpperCase().includes(storeFilter.toUpperCase());
    });
  };

  return (
    <>
      {storeContacts.length === 0 && (
        <div className={css.ContactsListCont}>
          <img src={imgBook} alt="book" className={css.ContactsListImg} />
          <p className={css.ContactsListText}>No contacts found</p>
        </div>
      )}
      <ul className={css.contactList}>
        {filteredContact().map(({ _id, name, phone }) => (
          <li className={css.contactItem} key={_id}>
            <p className={css.contactDetails}>
              {name}: {phone}
            </p>

            <button
              className={css.deleteButton}
              type="button"
              onClick={() => dispatch(deleteContact(_id))}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
