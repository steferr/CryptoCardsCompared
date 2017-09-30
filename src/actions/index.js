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

export function showCellType(cellType) {
  // console.log(`actionCreator showCellType(${cellType}) called`);
  return {
    type: 'SHOW_CELL_TYPE',
    payload: cellType
  }
}

export function hideCellType(cellType) {
  // console.log(`actionCreator hideCellType(${cellType}) called`);
  return {
    type: 'HIDE_CELL_TYPE',
    payload: cellType
  }
}

export function sortByNameAsc(cardList, order) {
  // console.log(`actionCreator sortByNameAsc called`);
  return {
    type: 'SORT_BY_NAME_ASC',
    payload: order
  }
}
export function sortByNameDes(cardList, order) {
  // console.log(`actionCreator sortByNameAsc called`);
  return {
    type: 'SORT_BY_NAME_DES',
    payload: order
  }
}
export function sortByName(cardList, direction) {
  // console.log(`actionCreator sortByName called`);
  return {
    type: 'SORT_BY_NAME',
    direction: direction,
  }
}


export function sortBy(cellType) {
  // console.log(`actionCreator sortBy called, cellType: ${cellType}`);
  return {
    type: 'SORT_BY',
    payload: cellType
  }
}

export function filterBy(filterType, cardIssuer) {
  console.log(`actionCreator filterBy called`);
  return {
    type: 'FILTER_BY',
    filterType: filterType,
    cardIssuer: cardIssuer,
  }
}
