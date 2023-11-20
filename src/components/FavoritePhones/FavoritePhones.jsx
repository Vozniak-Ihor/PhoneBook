import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { favoriteSelector } from 'redux/contactSlice/contactSelectors';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/contactSlice/contactSlice';
// import { getFilter } from 'redux/filterSlice/filterSelectors';
import imgBook from '../../images/book.png';

import iconAdd from '../../images/icons/active.svg';
import iconRemove from '../../images/icons/normal.svg';

import css from './FavoritePhones.module.css';

const FavoritePhones = () => {
  const favorites = useSelector(favoriteSelector);
  console.log(favorites);
  const dispatch = useDispatch();
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
      <div className={css.conteiner}>
        {favorites.length === 0 && (
          <div className={css.ContactsListCont}>
            <img src={imgBook} alt="book" className={css.ContactsListImg} />
            <p className={css.ContactsListText}>No contacts found</p>
          </div>
        )}
        <ul className={css.contactList}>
          {favorites.map(info => (
            <li className={css.contactItem} key={info._id}>
              <p className={css.contactDetails}>
                {info.name}: {info.phone}
              </p>

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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritePhones;
