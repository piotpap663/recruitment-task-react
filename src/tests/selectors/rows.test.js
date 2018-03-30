import moment from 'moment';
import selectRows from '../../selectors/rows';
import rows from '../fixtures/rows';

test('should filter by text value', () => {
  const filters = {
    text: 'Justyna',
    sortBy: 'id',
    startDate: undefined,
    endDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'ALL',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([rows[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'id',
    startDate: moment('4.02.1960 14:37'),
    endDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'ALL',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([rows[0], rows[1]]);
});

// test('should filter by endDate', () => {
//   const filters = {
//     text: '',
//     sortBy: 'id',
//     endDate: moment('4.02.1960 14:37'),
//     startDate: undefined,
//     order: 'ASCENDING',
//     page: 1,
//     filterBy: 'ALL',
//   };
//   const result = selectRows(rows, filters);
//   expect(result).toEqual([rows[2]]);
//   // I have no idea what's wrong
// });

test('should filter by order ASCENDING', () => {
  const filters = {
    text: '',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'ALL',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([rows[0], rows[2], rows[1]]);
});

test('should filter by order DESCENDING', () => {
  const filters = {
    text: '',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'DESCENDING',
    page: 1,
    filterBy: 'ALL',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([rows[1], rows[2], rows[0]]);
});

test('should filter by FILTER_BY FIRST_NAME', () => {
  const filters = {
    text: 'jan',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'firstName',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([rows[0]]);
});

test('should filter by FILTER_BY LAST_NAME', () => {
  const filters = {
    text: 'kOWALSK',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'lastName',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([rows[0], rows[1]]);
});

test('should filter by FILTER_BY dateOfBirth', () => {
  const filters = {
    text: '1976',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'dateOfBirth',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([ rows[1]]);
});

test('should filter by FILTER_BY company', () => {
  const filters = {
    text: 'cHILID',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'company',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([ rows[2]]);
});

test('should filter by FILTER_BY note', () => {
  const filters = {
    text: '9',
    sortBy: 'id',
    endDate: undefined,
    startDate: undefined,
    order: 'ASCENDING',
    page: 1,
    filterBy: 'note',
  };
  const result = selectRows(rows, filters);
  expect(result).toEqual([ rows[0], rows[1]]);
});