import React from 'react';
import Layout from './Layout';
import Logo from './Logo';
import ContactEditer from './ContactEditer';
import ContactList from './ContactList';
import Filter from './Filter';
import ButtonThemeChanger from './ButtonThemeChanger';
import Spiner from './Spiner';
import Notification from './Notification';
import { CSSTransition } from 'react-transition-group';

export default function App({
  errorContacts,
  isLoadingContacts,
  errorContactExisted,
  contacts,
  onHideAlert,
}) {
  let showAlert = errorContactExisted.length > 0;
  return (
    <Layout>
      <div className="header">
        <Logo />
        <ButtonThemeChanger />
        <CSSTransition
          in={showAlert}
          timeout={500}
          classNames="notification-fade"
          onEnter={() => setTimeout(onHideAlert, 2000)}
          unmountOnExit
        >
          <Notification message={`${errorContactExisted} is already exist!`} />
        </CSSTransition>
      </div>

      <ContactEditer />

      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames="filter-fade"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <div className="spiner"> {isLoadingContacts && <Spiner />}</div>

      {errorContacts && (
        <Notification
          message={`Whoops, something went wrong: ${errorContacts}`}
        />
      )}

      <ContactList />
    </Layout>
  );
}
