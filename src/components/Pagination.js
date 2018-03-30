import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import selectRows from '../selectors/rows';

const style = {
  margin: 12,
};

export const Pagination = props => (
  <div style={{
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  }}
  >
    <RaisedButton
      onClick={() => {
        props.page === 1 ? undefined :
          props.selectPage('FIRST_PAGE');
      }}
      label="FIRST"
      style={style}
      disabled={props.page === 1}
    />
    <RaisedButton
      onClick={() => { props.page > 1 ? props.selectPage('PREVIOUS_PAGE') : undefined; }}
      label="PREVIOUS"
      primary
      style={style}
      disabled={!(props.page > 1)}
    />
    <p>
      {props.page} - {props.maxPage}
    </p>
    <RaisedButton
      onClick={() => { props.page < props.maxPage ? props.selectPage('NEXT_PAGE') : undefined; }}
      label="NEXT"
      primary
      style={style}
      disabled={props.page >= props.maxPage}
    />
    <RaisedButton
      onClick={props.page < props.maxPage ? () => props.setLastPageAsCurrent(props.maxPage) : undefined}
      label="LAST"
      secondary
      style={style}
      disabled={props.page === props.maxPage}
    />
  </div>
);

const mapStateToProps = state => ({
  page: state.filters.page,
  rows: selectRows(state.rows, state.filters),
});

const mapDispatchToProps = dispatch => ({
  selectPage: value => dispatch({ type: value }),
  setMaxPage: value => dispatch({ type: 'SET_MAX_PAGE', maxPage: value }),
  setLastPageAsCurrent: page => dispatch({ type: 'LAST_PAGE', page }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
