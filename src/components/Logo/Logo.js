import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Logo.css';

const Logo = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="Logo-fade"
      unmountOnExit
    >
      <div className="logo">
        <h1>Phonebook</h1>
      </div>
    </CSSTransition>
  );
};

export default Logo;
