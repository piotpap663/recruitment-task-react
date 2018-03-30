import rowsReducer from '../../reducers/rows';
import rows from '../fixtures/rows';

test('should set default state', () => {
  const state = rowsReducer([], { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add an rows', () => {
  const row ={
    "firstName": "Piotr",
    "lastName": "Papiernik",
    "dateOfBirth": "11.07.1993",
    "company": "XSolve",
    "note": 100
  }
  const action = {
    type: 'ADD_ROW',
    row
  };
  const state = rowsReducer(rows, action);
  expect(state).toEqual([...rows, row]);
});
