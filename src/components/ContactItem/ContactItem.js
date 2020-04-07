import React from 'react';
import T from 'prop-types';
import './ContactItem.css';

export default function ContactItem({ name, id, number, onRemoveContact }) {
  return (
    <li key={id} className="contactListItem">
      <p>
        {name}: {number}
      </p>
      <button className="deleteButton" type="button" onClick={onRemoveContact}>
        Delete
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
