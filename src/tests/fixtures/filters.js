import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'id',
  startDate: undefined,
  endDate: undefined,
  order: 'ASCENDING',
  page: 1,
  filterBy: 'ALL',
};

const altFilters = {
  text: '',
  sortBy: 'ALL',
  startDate: moment(0),
  endDate: moment(0).add(3, 'years'),
  order: 'ASCENDING',
  page: 1,
  filterBy: 'ALL',
};

export { filters, altFilters };
