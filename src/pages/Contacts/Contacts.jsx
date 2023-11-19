import AddContact from '../../components/AddContact/AddContact';
import SaveContacts from 'components/SaveContacts/SaveContacts';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.token);

  useEffect(() => {
    if (auth) {
      dispatch(fetchContacts());
    }
  }, [auth, dispatch]);
  return (
    <>
      <div className={css.conteiner}>
        <div className={css.lamp}>
          <div className={css.lava}>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blob}></div>
            <div className={css.blobTop}></div>
            <div className={css.blobBottom}></div>
          </div>
        </div>
      </div>

      
      <AddContact />
      <SaveContacts />
    </>
  );
};

export default Contacts;
