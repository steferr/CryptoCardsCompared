// export const SELECT_BOOK = 'SELECT_BOOK'
// const ADD_FILTER = 'ADD_FILTER'

export function selectBook(book) {
  // // console.log('this book has been selected: ', book.title);
  // // console.log(SELECT_BOOK);
  // console.log(`actionCreator selectBook(${book.title}) called`);
  return {
    type: 'SELECT_BOOK',
    payload: book
  }
}

export function updateWindowSize(width, height) {
  // console.log(`updateWindowSize(${width}, ${height}) actionCreator`)
  return {
    type: 'UPDATE_WINDOW_SIZE',
    width: width,
    height: height,
  }
}

export function showColumn(columnID) {
  // console.log(`actionCreator showColumn(${columnID}) called`);
  return {
    type: 'SHOW_COLUMN',
    payload: columnID
  }
}

export function showAllColumns() {
  return {
    type: 'SHOW_ALL_COLUMNS'
  }
}

export function hideColumn(columnID) {
  // console.log(`actionCreator HideColumnButton(${columnID}) called`);
  return {
    type: 'HIDE_COLUMN',
    payload: columnID
  }
}

export function expandHiddenColumns(isHiddenColumnsComponentExpanded) {
  // console.log(`actionCreator expandHiddenColumns(${isHiddenColumnsComponentExpanded}) called`);
  return {
    type: 'EXPAND_HIDDEN_COLUMNS',
    isHiddenColumnsComponentExpanded : isHiddenColumnsComponentExpanded
  }
}

export function showFilters(areFiltersVisible) {
  return {
    type: 'SHOW_FILTERS',
    areFiltersVisible: areFiltersVisible
  }
}
// export function sortByNameAsc(cardList, order) {
//   // console.log(`actionCreator sortByNameAsc called`);
//   return {
//     type: 'SORT_BY_NAME_ASC',
//     payload: order
//   }
// }
// export function sortByNameDes(cardList, order) {
//   // console.log(`actionCreator sortByNameAsc called`);
//   return {
//     type: 'SORT_BY_NAME_DES',
//     payload: order
//   }
// }
// export function sortByName(cardList, direction) {
//   // console.log(`actionCreator sortByName called`);
//   return {
//     type: 'SORT_BY_NAME',
//     direction: direction,
//   }
// }


export function sortBy(columnID, contentType) {
  // console.log(`actionCreator sortBy called, contentType: ${contentType}`);
  // console.log(columnID);
  // console.log(contentType);
  // console.log(content);
  return {
    type: 'SORT_BY',
    columnID: columnID,
    contentType: contentType,
  }
}

export function filterBy(keyToFilter, valueToFilter) {
  // console.log(`actionCreator filterBy key: ${keyToFilter}, value: ${valueToFilter} called`);
  return {
    type: 'FILTER_BY',
    keyToFilter: keyToFilter,
    valueToFilter: valueToFilter,
  }
}

export function filterVerification(keyToFilter, valueToFilter) {
  // console.log(`actionCreator filterVerification, value: ${valueToFilter} called`);
  return {
    type: 'FILTER_VERIFICATION',
    valueToFilter: valueToFilter,
    keyToFilter: keyToFilter,
  }
}
