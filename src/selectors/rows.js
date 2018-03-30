import moment from 'moment';

export default (rows, { text, sortBy, filterBy, startDate, endDate, order, page }) => {
  Array.prototype.filterData = function (func) {
    let tab = [];
    for (let i = 0; i < this.length; i += 1) {
      if (func(this[i], i)) {
        tab.push(this[i]);
      }
    }
    return tab;
  };

  Array.prototype.paginationFilter = function (func) {
    let tab = [];
    let max = this.length;
    let pages = Math.ceil(this.length / 5);
    for (let i = (page - 1) * 5; i < page * 5; i += 1) {
      if (this[i] && func(i, page)) {
        tab.push(this[i]);
      }
    }
    return tab;
  };  
  const dataFormat = "DD-MM-YYYY HH:mm";
  return rows.filterData((row) => {
    const createdAtMoment = moment(row.dateOfBirth, dataFormat);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    let textMatch = false;
    if (filterBy === "firstName" || filterBy === "ALL") { textMatch = row.firstName.toLowerCase().includes(text.toLowerCase()) };
    if (!textMatch && (filterBy === "lastName" || filterBy === "ALL")) { textMatch = row.lastName.toLowerCase().includes(text.toLowerCase()) };
    if (!textMatch && (filterBy === "dateOfBirth" || filterBy === "ALL")) { textMatch = row.dateOfBirth.toLowerCase().includes(text.toLowerCase()) };
    if (!textMatch && (filterBy === "company" || filterBy === "ALL")) { textMatch = row.company.toLowerCase().includes(text.toLowerCase()) };
    if (!textMatch && (filterBy === "note" || filterBy === "ALL")) { textMatch = row.note.toString().toLowerCase().includes(text.toLowerCase()) };
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'id') {
      if (order === 'ASCENDING') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    }
    else if (sortBy === 'firstName') {
      if (order === 'ASCENDING') {
        if (a.firstName > b.firstName) return -1;
        else if (a.firstName < b.firstName) return 1;
      } else {
        if (a.firstName < b.firstName) return -1;
        else if (a.firstName > b.firstName) return 1;
      }
    }
    else if (sortBy === 'lastName') {
      if (order === 'ASCENDING') {
        if (a.lastName > b.lastName) return -1;
        else if (a.lastName < b.lastName) return 1;
      } else {
        if (a.lastName < b.lastName) return -1;
        else if (a.lastName > b.lastName) return 1;
      }
    }
    else if (sortBy === 'dateOfBirth') {
      if (order === 'ASCENDING') {
        if (moment(a.dateOfBirth, "DD-MM-YYYY HH:mm").isAfter(moment(b.dateOfBirth, "DD-MM-YYYY HH:mm"))) return 1;
        else if (moment(a.dateOfBirth, "DD-MM-YYYY HH:mm").isBefore(moment(b.dateOfBirth, "DD-MM-YYYY HH:mm"))) return -1;
      } else {
        if (moment(a.dateOfBirth, "DD-MM-YYYY HH:mm").isAfter(moment(b.dateOfBirth, "DD-MM-YYYY HH:mm"))) return -1;
        else if (moment(a.dateOfBirth, "DD-MM-YYYY HH:mm").isBefore(moment(b.dateOfBirth, "DD-MM-YYYY HH:mm"))) return 1;
      }
    }
    else if (sortBy === 'company') {
      if (order === 'ASCENDING') {
        if (a.company > b.company) return -1;
        if (a.company < b.company) return 1;
      } else {
        if (a.company < b.company) return -1;
        if (a.company > b.company) return 1;
      }
    }
    else if (sortBy === 'note') {
      if (order === 'ASCENDING') {
        if (a.note > b.note) return -1;
        if (a.note < b.note) return 1;
      } else {
        if (a.note < b.note) return -1;
        if (a.note > b.note) return 1;
      }
    }
  }).paginationFilter((index, page) => index >= (page - 1) * 5 && index < page * 5)
  return rows;
};
