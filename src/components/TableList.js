import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import selectRows from '../selectors/rows';
import Pagination from './Pagination';
import pagination from '../selectors/pagination';

export const TableList = props => (
  <div>
    {
      props.rows.length === 0 ? (
        <p>No row</p>
      ) : (
          <div>
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow
                  onCellClick={(e, columnId, columnNumber) => { props.sortByColumn(columnNumber) }}
                >
                  <TableHeaderColumn value="ID">ID</TableHeaderColumn>
                  <TableHeaderColumn>firstName</TableHeaderColumn>
                  <TableHeaderColumn>lastName</TableHeaderColumn>
                  <TableHeaderColumn>dateOfBirth</TableHeaderColumn>
                  <TableHeaderColumn>company</TableHeaderColumn>
                  <TableHeaderColumn>note</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
              displayRowCheckbox={false}
              >
                {props.rows.map((item) =>
                  <TableRow
                    key={item.id}
                  >
                    <TableRowColumn>{item.id}</TableRowColumn>
                    <TableRowColumn>{item.firstName}</TableRowColumn>
                    <TableRowColumn>{item.lastName}</TableRowColumn>
                    <TableRowColumn>{item.dateOfBirth}</TableRowColumn>
                    <TableRowColumn>{item.company}</TableRowColumn>
                    <TableRowColumn>{item.note}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <Pagination maxPage={props.maxPage} />
          </div>
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    rows: selectRows(state.rows, state.filters),
    maxPage: pagination(state.rows, state.filters),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortByColumn: (idNumber) => dispatch({ type: `columnNumber:${idNumber}` })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TableList);
