import addRow from '../../actions/rows';

// TEST ADDING ROW

test('should setup add expense action object with provided values', () => {
  const rowsData = {
    "firstName": "Piotr",
    "lastName": "Papiernik",
    "dateOfBirth": "11.07.1993",
    "company": "XSolve",
    "note": 100
  };
  const action = addRow(rowsData);
  expect(action).toEqual({
    type: 'ADD_ROW',
    row: {
      ...rowsData,
      id: expect.any(Number)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addRow();
  expect(action).toEqual({
    type: 'ADD_ROW',
    row: {
      id: expect.any(Number),
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      company: "",
      note: 0
    }
  });
});
