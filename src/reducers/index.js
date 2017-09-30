const initialState = {
  cardList: [
    {
      title:'Javascript: the good parts',
      category: 'development',
      pages: 342,
      price: 19.00,
      cardIssuer: 'Visa'
    },
    {
      title:'Hello Worms',
      category: 'comedy',
      pages: 234,
      price: 4.99,
      cardIssuer: 'Mastercard'
    },
    {
      title:'How to cut butter',
      category: 'action',
      pages: 153,
      price: 7.99,
      cardIssuer: ''
    },
    {
      title:'Just one more',
      category: 'development',
      pages: 964,
      price: 92.00,
      cardIssuer: 'Mastercard'
    },
    {
      title:'Javascript: the good parts',
      category: 'development',
      pages: 342,
      price: 6.99,
      cardIssuer: 'Visa'
    },
    {
      title:'Reaching the end',
      category: 'comedy',
      pages: 234,
      price: 32.00,
      cardIssuer: 'Mastercard'
    },
    {
      title:'God great, banana skin',
      category: 'action',
      pages: 131,
      price: 23.99,
      cardIssuer: ''
    },
    {
      title:'Chewing tables',
      category: 'comedy',
      pages: 964,
      price: 8.00,
      cardIssuer: 'Mastercard'
    }
  ],
  activeBook: null,
  sortedBy: '',
  isDescendant: false,
  hiddenCells: [],
  // filters: [
  //   cardIssuer: [ 'Mastercard', 'Visa', 'none' ],
  //   idVerificationRequired: true,
  //   cardType: [ 'plastic', 'virtual' ],
  //   internalBalance: [ 'USD', 'EUR', 'GBP', 'BTC'],
  //
  // ],
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'SHOW_CELL_TYPE':
    // console.log('SHOW_CELL_TYPE arrivato nel riduttore');
      var togliSeUguale = (value) => {
        return value != action.payload;
      }
      // // console.log('- action.payload');
      // // console.log(action.payload);
      // // console.log('- state.cardList');
      // // console.log(state.cardList);
      // // console.log('- togliSeUguale');
      // // console.log(togliSeUguale);
      // // console.log('- togliSeUguale()');
      // // console.log(togliSeUguale());
      // // console.log('- state.cardList.filter(togliSeUguale)');
      // // console.log(state.cardList.filter(togliSeUguale));

      // console.log(Object.assign({}, state, {hiddenCells: state.hiddenCells.filter(togliSeUguale)}));
      return Object.assign({}, state, {hiddenCells: state.hiddenCells.filter(togliSeUguale)});

    case 'HIDE_CELL_TYPE':
      // // console.log('HIDE_CELL_TYPE arrivato nel riduttore');
      // // console.log('- payload');
      // // console.log(action.payload);
      // var tette = []
      // for (var i = 0; i < state.cardList.length; i++) {
      //   tette.concat(state.cardList[i][action.payload])
      // }
      var catNascoste = state.hiddenCells.concat(action.payload)
      // console.log(Object.assign({}, state, {hiddenCells: catNascoste}));
      return Object.assign({}, state, {hiddenCells: catNascoste});







    case 'SELECT_BOOK':
      // console.log('SELECT_BOOK arrivato nel riduttore');
    return Object.assign({}, state, {activeBook: action.payload});

      // console.log('state.cardList.sort(compare)');
      // console.log(state.cardList.sort(compare))
      var listaOrdinata = state.cardList.sort(compare)
      // console.log(Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_DES'}));
      return Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_DES'});

    case 'FILTER_BY':
      console.log('FILTER_BY arrivato nel riduttore');
      console.log('action :');
      console.log(action);

      var nuovoArray = state.filters.concat(action)
      // return Object.assign({}, state, {filters: nuovoArray})
      return state

    case 'SORT_BY':
      // // console.log('SORT_BY arrivato nel riduttore');
      // if the button has been already pressed and the column is already sorted ascendently
      // it sorts the column descendently
      if (state.sortedBy === action.payload && state.isDescendant == false) {
        function compare(a, b) {
          const varA = (typeof a[action.payload] === 'string') ?
            a[action.payload].toUpperCase() : a[action.payload]
          const varB = (typeof b[action.payload] === 'string') ?
            b[action.payload].toUpperCase() : b[action.payload]
            if (varA > varB) {
              return -1;
            } else if (varA < varB) {
              return 1;
            }
            return 0;
        }
        var listaOrdinata = state.cardList.sort(compare)
        return Object.assign({}, state,
          {cardList: listaOrdinata},
          {sortedBy: action.payload},
          {isDescendant: true});
      }
      // if the button has been already pressed and the column is already sorted
      // descendently it sorts the column ascendently
      if (state.sortedBy === action.payload && state.isDescendant == true) {
        function compare(a, b) {
          const varA = (typeof a[action.payload] === 'string') ?
            a[action.payload].toUpperCase() : a[action.payload]
          const varB = (typeof b[action.payload] === 'string') ?
            b[action.payload].toUpperCase() : b[action.payload]
            if (varA > varB) {
              return 1;
            } else if (varA < varB) {
              return -1;
            }
            return 0;
        }
        var listaOrdinata = state.cardList.sort(compare)
        return Object.assign({}, state,
          {cardList: listaOrdinata},
          {sortedBy: action.payload},
          {isDescendant: false});
      }
      //if the button hasn't been already pressed, sort ascendently
      function compare(a, b) {
        const varA = (typeof a[action.payload] === 'string') ?
          a[action.payload].toUpperCase() : a[action.payload]
        const varB = (typeof b[action.payload] === 'string') ?
          b[action.payload].toUpperCase() : b[action.payload]
          if (varA > varB) {
            return 1;
          } else if (varA < varB) {
            return -1;
          }
          return 0;
      }
      var listaOrdinata = state.cardList.sort(compare)
      return Object.assign({}, state,
        {cardList: listaOrdinata},
        {sortedBy: action.payload},
        {isDescendant: false});




  }
  return state;
}


// case 'SORT_BY_NAME_ASC':
//   // console.log('SORT_BY_NAME_ASC arrivato nel riduttore');
//   function compare(a, b) {
//     const elementA = a.title.toUpperCase();
//     const elementB = b.title.toUpperCase();
//     // // console.log('elementA');
//     // // console.log(elementA);
//     // // console.log('elementB');
//     // // console.log(elementB);
//     if (elementA > elementB) {
//       return 1;
//     } else if (elementA < elementB) {
//       return -1;
//     }
//     return 0;
//   }
//   // console.log('state.cardList.sort(compare)');
//   // console.log(state.cardList.sort(compare))
//   var listaOrdinata = state.cardList.sort(compare)
//   // console.log(Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_ASC'}));
//   return Object.assign({}, state, {cardList: listaOrdinata}, {sortedBy: 'NAME_ASC'});
//
//
// case 'SORT_BY_NAME_DES':
//   // console.log('SORT_BY_NAME_DES arrivato nel riduttore');
//   function compare(a, b) {
//     const elementA = a.title.toUpperCase();
//     const elementB = b.title.toUpperCase();
//     if (elementA > elementB) {
//       return -1;
//     } else if (elementA < elementB) {
//       return 1;
//     }
//     return 0;
//   }

// case 'SORT_BY_NAME':
//   // console.log('SORT_BY_NAME arrivato nel riduttore');
//   function compare(a, b) {
//     const elementA = a.title.toUpperCase();
//     const elementB = b.title.toUpperCase();
//     if (action.direction === 'ascending' ) {
//       if (elementA > elementB) {
//         return 1;
//       } else if (elementA < elementB) {
//         return -1;
//       }
//       return 0;
//     }
//     if (elementA > elementB) {
//       return -1;
//     } else if (elementA < elementB) {
//       return 1;
//     }
//     return 0;
//   }
//   // console.log('state.cardList.sort(compare)');
//   // console.log(state.cardList.sort(compare))
//   var listaOrdinata = state.cardList.sort(compare)
//   // console.log(Object.assign({}, state, {cardList: listaOrdinata}));
//   return Object.assign({}, state, {cardList: listaOrdinata});
