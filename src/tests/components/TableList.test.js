import React from 'react';
import { shallow } from 'enzyme';
import { TableList } from '../../components/TableList';
import rows from '../fixtures/rows';

test('should render TableList with rows', () => {
  const wrapper = shallow(<TableList rows={rows} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render TableList with empty message', () => {
  const wrapper = shallow(<TableList rows={[]} />);
  expect(wrapper).toMatchSnapshot();
});
