import axios from 'axios';
import contactActions from './contactsActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'; // or 'http://localhost:2000'; //for dev use
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThhM2Q3ODIxN2MyMTAwMTcxZDY2NzYiLCJpYXQiOjE1ODYxMTgwMDh9.Xz0H87RZq1S-qmyQKwOWAjo2GuDPwV4tDPaAaK0PJm4';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const addContact = (name, number) => (dispatch, getState) => {
  const doesExistContact = getState().contacts.items.some(
    contact => contact.name === name,
  );
  if (doesExistContact) {
    return dispatch(contactActions.addContactErrorExisted(name));
  }
  dispatch(contactActions.addContactRequest());
  axios
    .post(`/contacts`, { name, number })
    .then(response => {
      dispatch(contactActions.addContactSuccess(response.data));
    })
    .catch(error => dispatch(contactActions.addContactError(error)));
};

const clearDoesExistContact = () => dispatch => {
  dispatch(contactActions.addContactErrorExisted(''));
};

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());

  axios
    .get(`/contacts`)
    .then(response => {
      dispatch(contactActions.fetchContactsSuccess(response.data));
    })
    .catch(error => dispatch(contactActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactActions.removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(contactActions.removeContactsSuccess(id));
    })
    .catch(error => dispatch(contactActions.addContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeContact,
  clearDoesExistContact,
};
