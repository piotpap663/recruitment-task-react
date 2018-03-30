import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'id',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  order: 'ASCENDING',
  page: 1,
  filterBy: 'ALL'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    case 'columnNumber:1':
      return {
        ...state,
        sortBy: 'id',
        order: state.order === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING',

      };
    case 'columnNumber:2':
      return {
        ...state,
        sortBy: 'firstName',
        order: state.order === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING',
      };
    case 'columnNumber:3':
      return {
        ...state,
        sortBy: 'lastName',
        order: state.order === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING',
      };
    case 'columnNumber:4':
      return {
        ...state,
        sortBy: 'dateOfBirth',
        order: state.order === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING',
      };
    case 'columnNumber:5':
      return {
        ...state,
        sortBy: 'company',
        order: state.order === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING',
      };
    case 'columnNumber:6':
      return {
        ...state,
        sortBy: 'note',
        order: state.order === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING',
      };
    case 'SET_MAX_PAGE':
      return {
        ...state,
        maxPage: action.maxPage,
      };
    case 'FIRST_PAGE':
      return {
        ...state,
        page: 1,
      };
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        page: state.page - 1,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'LAST_PAGE':
      return {
        ...state,
        page: action.page,
      };
    case 'FILTER_BY':
      return {
        ...state,
        filterBy: action.filterBy,
      };
    default:
      return state;
  }
};
