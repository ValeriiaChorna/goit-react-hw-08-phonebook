import React from 'react';
import T from 'prop-types';
import './ContactItem.css';
// import formatPhone from '../../utils/phoneFormatter';

export default function ContactItem({ name, id, number, onRemoveContact }) {
  return (
    <li key={id} className="contactListItem">
      <span className="contactItem-span">{name}</span>
      <span className="contactItem-span">{number}</span>
      <button className="deleteButton" type="button" onClick={onRemoveContact}>
        <img
          className="cancel"
          alt="cancel"
          width="25"
          src="https://img.icons8.com/color/48/000000/close-window.png"
        />
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: T.string.isRequired,
  id: T.string.isRequired,
  number: T.string.isRequired,
  onRemoveContact: T.func.isRequired,
};
