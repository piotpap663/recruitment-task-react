import React from 'react';
import AppBar from 'material-ui/AppBar';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Header = () => (
  <MuiThemeProvider>
    <header className="main-header">
      <h2>XSolve recruitment task</h2>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        <RaisedButton label="Dashboard" />
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        <RaisedButton label="Create ROW"/>
        </NavLink>
    </header >
  </MuiThemeProvider >
    );

export default Header;
