import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import TableForm from '../../components/TableForm';
import rows from '../fixtures/rows';

test('should render TableForm correctly', () => {
  const wrapper = shallow(<TableForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render TableForm correctly with row data', () => {
  const wrapper = shallow(<TableForm row={rows[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<TableForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set firstName on input change', () => {
  const value = 'New firstName';
  const wrapper = shallow(<TableForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('firstName')).toBe(value);
});
test('should set lastName on input change', () => {
  const value = 'New LastName';
  const wrapper = shallow(<TableForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('lastName')).toBe(value);
});
test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<TableForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('dateOfBirth')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<TableForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});


test('should set Company on input change', () => {
  const value = 'New Company';
  const wrapper = shallow(<TableForm />);
  wrapper.find('input').at(2).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('company')).toBe(value);
});



// test('should set amount if valid input', () => {
//   const value = '23.50';
//   const wrapper = shallow(<TableForm />);
//   wrapper.find('input').at(1).simulate('change', {
//     target: { value }
//   });
//   expect(wrapper.state('amount')).toBe(value);
// });

// test('should not set amount if invalid input', () => {
//   const value = '12.122';
//   const wrapper = shallow(<TableForm />);
//   wrapper.find('input').at(1).simulate('change', {
//     target: { value }
//   });
//   expect(wrapper.state('amount')).toBe('');
// });

// test('should call onSubmit prop for valid form submission', () => {
//   const onSubmitSpy = jest.fn();
//   const wrapper = shallow(<TableForm row={rows[0]} onSubmit={onSubmitSpy} />);
//   wrapper.find('form').simulate('submit', {
//     preventDefault: () => { }
//   });
//   expect(wrapper.state('error')).toBe('');
//   expect(onSubmitSpy).toHaveBeenLastCalledWith({
//     description: rows[0].description,
//     amount: rows[0].amount,
//     note: rows[0].note,
//     createdAt: rows[0].createdAt
//   });
// });

