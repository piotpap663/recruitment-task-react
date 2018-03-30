import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { TableListFilters } from '../../components/TableListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter,  setStartDate,  setEndDate,  setActualPageAsFirst,  chooseColumnToFilter, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setActualPageAsFirst = jest.fn();
  chooseColumnToFilter = jest.fn();
  wrapper = shallow(
    <TableListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setActualPageAsFirst={setActualPageAsFirst}
      chooseColumnToFilter={chooseColumnToFilter}
    />
  );
});

test('should render TableListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render TableListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('hould handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
