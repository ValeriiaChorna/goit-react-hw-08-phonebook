import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../ContactItem/ContactListItemContainer';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ContactList.css';

function ContactList({ contacts }) {
  return (
    <TransitionGroup component="ul" className="contactList">
      {contacts
        .map(({ id }) => (
          <CSSTransition
            key={id}
            timeout={250}
            classNames="contactList-Items-fade"
          >
            <ContactItem id={id} />
          </CSSTransition>
        ))
        .reverse()}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.exact({
      name: T.string,
      id: T.string,
      number: T.string,
    }),
  ).isRequired,
};

const MapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(MapStateToProps)(ContactList);
