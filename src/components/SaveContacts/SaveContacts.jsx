import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import LoadingBook from 'components/LoadingBook/LoadingBook';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/contactSlice/contactSelectors';
import css from './SaveContacts.module.css';
const SaveContacts = () => {
  const isLoading = useSelector(isLoadingSelector);
  return (
    <>
      {isLoading && (
        <div className={css.isLoading}>
          <LoadingBook />
        </div>
      )}
      <div className={css.conteiner}>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};

export default SaveContacts;
