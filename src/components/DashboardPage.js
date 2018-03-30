import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableList from './TableList';
import TableListFilters from './TableListFilters';

const DashboardPage = () => (
  <div>
    <TableListFilters />
    <MuiThemeProvider>
      <TableList />
    </MuiThemeProvider>
  </div>

);

export default DashboardPage;
