import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, chooseColumnToFilter } from '../actions/filters';

export class TableListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
    this.props.setActualPageAsFirst();
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
    this.props.setActualPageAsFirst();
  };
  onSortChange = (e) => {
    if (e.target.value) {
      this.props.chooseColumnToFilter(e.target.value);
    }
  };
  render() {
    return (
      <div className="input-filters">
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder=""
        />
        <select
          value={this.props.filters.filterBy}
          onChange={this.onSortChange}
        >
          <option value="ALL">All</option>
          <option value="firstName">firstName</option>
          <option value="lastName">lastName</option>
          <option value="dateOfBirth">dateOfBirth</option>
          <option value="company">company</option>
          <option value="note">note</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          displayFormat="DD.MM.YYYY"
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setActualPageAsFirst: () => dispatch({ type: 'FIRST_PAGE' }),
  chooseColumnToFilter: (value) => dispatch(chooseColumnToFilter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableListFilters);
