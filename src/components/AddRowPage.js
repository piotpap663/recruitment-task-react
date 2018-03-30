import React from 'react';
import { connect } from 'react-redux';
import TableForm from './TableForm';
import addRow from '../actions/rows';

export class AddRowPage extends React.Component {
  onSubmit = row => {
    this.props.addRow(row);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <TableForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addRow: row => dispatch(addRow(row)),
});

export default connect(undefined, mapDispatchToProps)(AddRowPage);
