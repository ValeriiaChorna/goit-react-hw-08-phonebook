import React from 'react';
import Layout from './Layout';
import Logo from './Logo';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';
import ButtonThemeChanger from './ButtonThemeChanger';
import Spiner from './Spiner';
import Notification from './Notification';

export default function App({ errorContacts, isLoadingContacts }) {
  return (
    <Layout>
      <Logo />
      <ButtonThemeChanger />

      <ContactEditer />

      <Filter />

      {isLoadingContacts && <Spiner />}
      {errorContacts && (
        <Notification
          message={`Whoops, something went wrong: ${errorContacts}`}
        />
      )}

      <ContactList />
    </Layout>
  );
}
