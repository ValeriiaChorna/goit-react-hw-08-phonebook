import React from 'react';
import T from 'prop-types';

function Notification({ message }) {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
}

Notification.prototype = {
  message: T.string,
};

export default Notification;
