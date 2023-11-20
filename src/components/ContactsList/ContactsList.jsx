import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  contactsSelector,
  favoriteSelector,
} from 'redux/contactSlice/contactSelectors';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/contactSlice/contactSlice';
import { getFilter } from 'redux/filterSlice/filterSelectors';
import imgBook from '../../images/book.png';

import iconAdd from '../../images/icons/active.svg';
import iconRemove from '../../images/icons/normal.svg';

const ContactsList = () => {
  const storeContacts = useSelector(contactsSelector);
  const storeFilter = useSelector(getFilter);
  const favorites = useSelector(favoriteSelector);
  const dispatch = useDispatch();
  const filteredContact = () => {
    return storeContacts.filter(({ name }) => {
      return name.toUpperCase().includes(storeFilter.toUpperCase());
    });
  };
  const toggleFavorite = ad => {
    console.log(ad);
    const isFavorite = favorites.some(fav => fav._id === ad._id);
    if (isFavorite) {
      dispatch(removeFavorite(ad));
    } else {
      dispatch(addFavorite(ad));
    }
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
        {filteredContact().map(info => (
          <li className={css.contactItem} key={info._id}>
            <p className={css.contactDetails}>
              {info.name}: {info.phone}
            </p>
            <div>
              <button
                onClick={() => toggleFavorite(info)}
                className={css.carFavoriteBtn}
              >
                {favorites.some(fav => fav._id === info._id) ? (
                  <img src={iconAdd} alt="icon add" />
                ) : (
                  <img src={iconRemove} alt="icon remove" />
                )}
              </button>
              <button
                className={css.deleteButton}
                type="button"
                onClick={() => dispatch(deleteContact(info._id))}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
