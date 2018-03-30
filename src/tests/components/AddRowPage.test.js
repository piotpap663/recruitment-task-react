import React from 'react';
import { shallow } from 'enzyme';
import { AddRowPage } from '../../components/AddRowPage';
import rows from '../fixtures/rows';

let addRow, history, wrapper;

beforeEach(() => {
  addRow = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddRowPage addRow={addRow} history={history} />);
});

test('should render AddRowPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('TableForm').prop('onSubmit')(rows[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addRow).toHaveBeenLastCalledWith(rows[1]);
});
