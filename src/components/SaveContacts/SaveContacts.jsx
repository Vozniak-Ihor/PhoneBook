import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';

import css from './SaveContacts.module.css';
const SaveContacts = () => {
  return (
    <>
      <div className={css.conteiner}>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};

export default SaveContacts;
