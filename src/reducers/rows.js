import templateData from '../data.json';

export default (state = templateData, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return [
        ...state,
        action.row
      ];
    default:
      return state;
  }
};
