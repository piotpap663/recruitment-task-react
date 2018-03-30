import React from 'react';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { SingleDatePicker } from 'react-dates';

export default class TableForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.row ? props.row.firstName : '',
      lastName: props.row ? props.row.lastName : '',
      dateOfBirth: props.row ? moment(new Date(props.row.dateOfBirth)) : moment(),
      company: props.row ? props.row.company : '',
      note: props.row ? props.row.note : '',
      calendarFocused: false,
      error: ''
    };
  }
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onDateOfBirthChange = (dateOfBirth) => {
    this.setState(() => ({ dateOfBirth }));
  };
  onCompanyChange = (e) => {
    const company = e.target.value;
    this.setState(() => ({ company }));
  };
  onNoteChange = (e) => {
    let note = e.target.value;
    note = parseInt(note);
    this.setState(() => ({ note }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.firstName || !this.state.lastName) {
      this.setState(() => ({ error: 'Please provide firstName and lastName.' }));
    } else if (!this.state.company || !this.state.note) {
      this.setState(() => ({ error: 'Please provide company and note.' }));
    } else if(!this.state.dateOfBirth){
      this.setState(() => ({ error: 'Please provide date' }));
    }
    else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: moment(new Date(this.state.dateOfBirth)).format("DD.MM.YYYY"),
        company: this.state.company,
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className="input-filters">
          <input
            type="text"
            placeholder="FirstName"
            autoFocus
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />
          <input
            type="text"
            placeholder="LastName"
            autoFocus
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />
          <SingleDatePicker
            date={this.state.dateOfBirth}
            onDateChange={this.onDateOfBirthChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="DD.MM.YYYY"
          />
          <input
            type="text"
            placeholder="Company"
            autoFocus
            value={this.state.company}
            onChange={this.onCompanyChange}
          />
          <input
            type="number"
            placeholder="Note"
            autoFocus
            value={this.state.note}
            onChange={this.onNoteChange}
          />
        </form>
        <MuiThemeProvider>
          <RaisedButton label="Add row" onClick={this.onSubmit} fullWidth={true} />
        </MuiThemeProvider>
      </div>
    )
  }
}
