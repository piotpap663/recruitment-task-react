import moment from 'moment';
// ADD_ROW
export default ({
  firstName = '',
  lastName = '',
  dateOfBirth = '',
  company = '',
  note = 0,
} = {}) => ({
  type: 'ADD_ROW',
  row: {
    id: Date.now(),
    firstName,
    lastName,
    dateOfBirth,
    company,
    note,
  },
});
