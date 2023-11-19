import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { addContact } from '../../redux/operations';
import { contactsSelector } from 'redux/contactSlice/contactSelectors';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import css from './AddContact.module.css';

const schema = object().shape({
  name: string().required("Ім'я обов'язкове"),
  // email: string().required("email обов'язкове"),
  // phone: string()
  //   .matches(
  //     /^(\+?3?8)?(0\d{9})$/,
  //     'The number should look like this: +380XXXXXXXXX'
  //   )
  //   .required("Номер телефону обов'язковий"),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const AddContact = () => {
  const storeContacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const [valuePhone, setValuePhone] = useState();
  const handleSubmit = (values, actions) => {
    const { name, email } = values;

    if (storeContacts.some(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      email,
      phone: valuePhone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
    setValuePhone('')
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.addContactForm} autoComplete="off">
        <h2 className={css.title}>Add contact</h2>
        <div className={css.conteinerLabel}>
          <label>
            <h3 className={css.label}>Name*</h3>

            <Field
              className={css.contactInput}
              type="text"
              name="name"
              // placeholder="Name"
              required
            />
            {/* <ErrorMessage name="name" component="div" /> */}
          </label>
          <label>
            <h3 className={css.label}>Phone*</h3>
            <PhoneInput
              placeholder="Enter phone number"
              value={valuePhone}
              onChange={setValuePhone}
              defaultCountry="UA"
              international={true}
              type="tel"
              name="phone"
              required
              className={css.contactInput}
            />

            {/* <ErrorMessage name="phone" component="div" /> */}
          </label>
          <label>
            <h3 className={css.label}>Email</h3>

            <Field className={css.contactInput} type="email" name="email" />
            {/* <ErrorMessage name="email" component="div" /> */}
          </label>
        </div>

        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default AddContact;
