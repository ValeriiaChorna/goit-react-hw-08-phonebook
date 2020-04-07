import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import './Filter.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div className="filter">
      <h3>Find contact by name</h3>
      <input
        className="filter-input"
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

const MapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const MapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
