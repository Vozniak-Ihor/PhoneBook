import AddContact from '../../components/AddContact/AddContact';
import SaveContacts from 'components/SaveContacts/SaveContacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import Backdrop from 'components/Backdrop/Backdrop';

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
      <Backdrop />
      <AddContact />
      <SaveContacts />
    </>
  );
};

export default Contacts;
