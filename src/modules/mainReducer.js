// import * as Currency from '../utilities/currencies'
// import * as Type from '/../utilites/card_types'
import Wirex_Plastic_Unverified_EUR from '../utilities/cards/Wirex_Plastic_Unverified_EUR'
import Wirex_Plastic_Unverified_USD from '../utilities/cards/Wirex_Plastic_Unverified_USD'
import Wirex_Plastic_Unverified_GBP from '../utilities/cards/Wirex_Plastic_Unverified_GBP'
import Wirex_Plastic_Verified_EUR from '../utilities/cards/Wirex_Plastic_Verified_EUR'
import Wirex_Plastic_Verified_USD from '../utilities/cards/Wirex_Plastic_Verified_USD'
import Wirex_Plastic_Verified_GBP from '../utilities/cards/Wirex_Plastic_Verified_GBP'
import Wirex_Virtual_Unverified_EUR from '../utilities/cards/Wirex_Virtual_Unverified_EUR'
import Wirex_Virtual_Unverified_USD from '../utilities/cards/Wirex_Virtual_Unverified_USD'
import Wirex_Virtual_Unverified_GBP from '../utilities/cards/Wirex_Virtual_Unverified_GBP'
import Wirex_Virtual_Verified_EUR from '../utilities/cards/Wirex_Virtual_Verified_EUR'
import Wirex_Virtual_Verified_USD from '../utilities/cards/Wirex_Virtual_Verified_USD'
import Wirex_Virtual_Verified_GBP from '../utilities/cards/Wirex_Virtual_Verified_GBP'
import Xapo_Plastic_Verified_EUR from '../utilities/cards/Xapo_Plastic_Verified_EUR'
import Xapo_Plastic_Verified_USD from '../utilities/cards/Xapo_Plastic_Verified_USD'
import Xapo_Plastic_Verified_GBP from '../utilities/cards/Xapo_Plastic_Verified_GBP'
import Xapo_Plastic_Unverified_EUR from '../utilities/cards/Xapo_Plastic_Unverified_EUR'
import Xapo_Plastic_Unverified_USD from '../utilities/cards/Xapo_Plastic_Unverified_USD'
import Xapo_Plastic_Unverified_GBP from '../utilities/cards/Xapo_Plastic_Unverified_GBP'

import * as o from '../utilities/constants'

const cardList = [
  Wirex_Plastic_Unverified_EUR,
  Wirex_Plastic_Unverified_USD,
  Wirex_Plastic_Unverified_GBP,
  Wirex_Plastic_Verified_EUR,
  Wirex_Plastic_Verified_USD,
  Wirex_Plastic_Verified_GBP,
  Wirex_Virtual_Unverified_EUR,
  Wirex_Virtual_Unverified_USD,
  Wirex_Virtual_Unverified_GBP,
  Wirex_Virtual_Verified_EUR,
  Wirex_Virtual_Verified_USD,
  Wirex_Virtual_Verified_GBP,
  Xapo_Plastic_Verified_EUR,
  Xapo_Plastic_Verified_USD,
  Xapo_Plastic_Verified_GBP,
  Xapo_Plastic_Unverified_EUR,
  Xapo_Plastic_Unverified_USD,
  Xapo_Plastic_Unverified_GBP,
]

const initialState = {
  cardList : cardList,
  activeBook: null,
  sortedBy: '',
  isDescendant: false,
  hiddenColumns: [],
  // hiddenColumns: ['cardIssuancePrice', 'verificationType', 'ATM Withdrawal Fee'],
  visibleCards: cardList,
  // activeFilters: [{cardIssuer: [o.MASTERCARD]}, {spendingCurrency: [o.EUR, o.USD, o.GBP]}, {cardType: [o.PLASTIC]}], //   [{spendingCurrency: [EUR, USD]}, {cardIssuer: [VISA, MASTERCARD]}]
  activeFilters: [], //   [{spendingCurrency: [EUR, USD]}, {cardIssuer: [VISA, MASTERCARD]}]
  isHiddenColumnsComponentExpanded: false,
  areFiltersVisible: true,
  windowSize: {}
  // filters: [
  //   cardIssuer: [ 'Mastercard', 'Visa', 'none' ],
  //   idVerificationRequired: true,
  //   cardType: [ 'plastic', 'virtual' ],
  //   internalBalance: [ 'USD', 'EUR', 'GBP', 'BTC'],
  //
  // ],
}

export default (state = initialState, action) => {

  // - - - - - - - - - HELPERS - - - - - - - - -
  // creo copie di visibleCards e activeFilters
  var updatedVisibleCards = []
  var updatedActiveFilters = state.activeFilters

  // Array contenente le chiavi della prima carta in cardList
  var cardListKeys = Object.keys(state.cardList[0])

  // Array contentente le chiavi in activeFilters
  var activeFiltersKeys = []
  for (var i = 0; i < state.activeFilters.length; i++) {
    activeFiltersKeys.push(Object.keys(state.activeFilters[i])[0])
  }
  // Array di tutti i valori in activeFilters
  var activeFiltersValues = []
  var k = ''
  var n = []
  for (var i = 0; i < state.activeFilters.length; i++) {
    // key of object at position i of array activeFilters, in string
    k = Object.keys(state.activeFilters[i])[0]
    activeFiltersValues = activeFiltersValues.concat(state.activeFilters[i][k]);
  }

  const isKeyToFilterInActiveFilters = () => {
    if (activeFiltersKeys.indexOf(action.keyToFilter) != -1)
      return true
    else return false
  }

  const isValueToFilterInActiveFilters = () => {
    if (activeFiltersValues.indexOf(action.valueToFilter) != -1)
      return true
    else return false
  }

  const numberOfValuesInActiveFilterKey = () => {
    for ( var i = 0; i < state.activeFilters.length; i++ ) {
      if ( Object.keys( state.activeFilters[i] )[0] === action.keyToFilter ) {
        return state.activeFilters[i][action.keyToFilter].length
      }
    }
    return 0
  }

  const findOne = (sourceArray, comparisonArray) => {
    return comparisonArray.some((v) => {
      return sourceArray.indexOf(v) >=0
  })}

  // const culo = (filterValue) => {
  //   return cardValues.indexOf(filterValue) != -1
  // }
  // VISIBLECARDS: scorro cardList, e prendo le carte che rispettano i requisiti di updatedActiveFilters
  const updateVisibleCards = () => {

    var updatedVisibleCards = []
    var currentFilterKey = 0
    var currentFilterValues = 0
    var currentCardValues = 0
    var foundMatchinValues = false
    var shouldCardBeVisible = false
    state.cardList.map((card) => {
      // console.log('                  - -                     ');
      // console.log('                  - -                     ');
      // console.log('                  - -                     ');
      // console.log(`- - - Inizio Map per ${card.cardID} - - -`);
      for (var i=0; i < updatedActiveFilters.length; i++) {
        foundMatchinValues = false
        currentFilterKey = Object.keys(updatedActiveFilters[i])[0]
        currentFilterValues = updatedActiveFilters[i][currentFilterKey]
        currentCardValues = card[currentFilterKey]
        // console.log(`- - - -  Inizio ${i} ciclo for - -`);
        // console.log('currentFilterKey:');
        // console.log(currentFilterKey);
        // console.log('currentFilterValues:');
        // console.log(currentFilterValues);
        // console.log('currentCardValues:');
        // console.log(currentCardValues);
        if ( Array.isArray( currentCardValues ) ) {
          if ( Array.isArray( currentFilterValues ) ) {
            // if ( findOne( currentCardValues, currentFilterValues ) !=0 ) {
            // console.log('currentFilterValues.every((value)=> currentCardValues.indexOf(value) != -1)');
            // console.log(currentFilterValues.every((value)=> currentCardValues.indexOf(value) != -1));
            if ( currentFilterValues.every((value)=> currentCardValues.indexOf(value) != -1) ) {
              // updatedVisibleCards.push(card)
              foundMatchinValues = true
            }
          }
          else {
            if ( currentCardValues.indexOf(currentFilterValues) != -1 ) {
              // updatedVisibleCards.push(card)
              foundMatchinValues = true
            }
          }
        }
        else {
          if ( Array.isArray( currentFilterValues ) ) {
            if ( currentFilterValues.indexOf( currentCardValues ) != -1 ) {
              // updatedVisibleCards.push(card)
              foundMatchinValues = true
            }
          }
          else {
            if ( currentCardValues === currentFilterValues ) {
              // updatedVisibleCards.push(card)
              foundMatchinValues = true
            }
          }
        }

        // console.log(` foundMatchinValues : ${foundMatchinValues}`);
        if ( foundMatchinValues ) shouldCardBeVisible = true
          else shouldCardBeVisible = false
        // console.log(`- - - - Fine ${i} ciclo for - -`);
        if ( !shouldCardBeVisible ) break
      }
      if ( shouldCardBeVisible ) updatedVisibleCards.push(card)
    //   console.log(`shouldCardBeVisible : ${shouldCardBeVisible}`);
    // console.log(`- - - Fine Map per ${card.cardID} - - -`);
    })
    return updatedVisibleCards
  }

  // - - - - - - - - - END HELPERS - - - - - - - - -



  switch(action.type) {

    case 'SHOW_COLUMN':
    // console.log('SHOW_COLUMN arrivato nel riduttore');
      var togliSeUguale = (value) => {
        return value != action.payload;
      }
      return Object.assign({}, state, {hiddenColumns: state.hiddenColumns.filter(togliSeUguale)});

    case 'SHOW_ALL_COLUMNS':
      return Object.assign({}, state, {hiddenColumns: []});


    case 'EXPAND_HIDDEN_COLUMNS':
      return Object.assign({}, state, {isHiddenColumnsComponentExpanded : action.isHiddenColumnsComponentExpanded})


    case 'UPDATE_WINDOW_SIZE':
      // console.log(`updateWindowSize(${action.width}, ${action.height}) mainReducer`)
      // console.log(state);
      let updatedWindowSize = {
        width: action.width,
        height: action.height
      }
      return Object.assign({}, state, { windowSize : updatedWindowSize})

    case 'HIDE_COLUMN':
      var catNascoste = state.hiddenColumns.concat(action.payload)
      return Object.assign({}, state, {hiddenColumns: catNascoste});

    case 'SHOW_FILTERS':
      return Object.assign({}, state, {areFiltersVisible: action.areFiltersVisible})



















    case 'FILTER_BY':
      // console.log('FILTER_BY arrivato nel riduttore');
      // console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
      // console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
      // - - - - - - - - - DEBUG - - - - - - - - -
      // console.log(`action.keyToFilter: ${action.keyToFilter}`);
      // console.log(`action.valueToFilter: ${action.valueToFilter}`);
      //
      // console.log('state.activeFilters');
      // console.log(state.activeFilters);
      // console.log('state.visibleCards' )
      // console.log(state.visibleCards )
      //
      // console.log('cardListKeys');
      // console.log(cardListKeys);
      // console.log('activeFiltersKeys');
      // console.log(activeFiltersKeys);
      //
      // console.log('updatedVisibleCards')
      // console.log(updatedVisibleCards)
      //
      // console.log('activeFiltersValues');
      // console.log(activeFiltersValues);
      //
      // console.log('isKeyToFilterInActiveFilters()');
      // console.log(isKeyToFilterInActiveFilters());
      // console.log('isValueToFilterInActiveFilters()');
      // console.log(isValueToFilterInActiveFilters());
      // console.log('numberOfValuesInActiveFilterKey()');
      // console.log(numberOfValuesInActiveFilterKey());

      // - - - - - - - - - END DEBUG - - - - - - - - -

      // 1. Categoria non gia attiva
      if (!isKeyToFilterInActiveFilters()) {
        updatedActiveFilters = [...updatedActiveFilters, {[action.keyToFilter] : [action.valueToFilter]}]
        updatedVisibleCards = updateVisibleCards()
      }
      // 2. Categoria già attiva
      if (isKeyToFilterInActiveFilters()) {
        // 2.1 Tasto non cliccato prima
        if (!isValueToFilterInActiveFilters()) {
          // aggiungo action.value ad activeFilters
          // updatedActiveFilters = state.activeFilters
          var updatedActiveFiltersValues = []
          state.activeFilters.map((filterObj) => {
            if (Object.keys(filterObj) == action.keyToFilter) {
              updatedActiveFiltersValues = [...filterObj[action.keyToFilter], action.valueToFilter]
              filterObj[action.keyToFilter] = updatedActiveFiltersValues
            }
          })

          // console.log('CASO 2.1 Categora cliccata ma tasto no');
          // scorro cardList, prendo le carte che contengono action.value in key
          // uguale a action.key e le sparo in visible cards
          updatedVisibleCards = updateVisibleCards()
        }
        else {
          // console.log('CASO 2.2 Tasto già cliccato');
          // 2.2.1 Tasto cliccato prima un solo tasto attivo
          if (numberOfValuesInActiveFilterKey() == 1) {
            // console.log('CASO 2.2.1 Tasto già cliccato, ultimo della categoria');
            // ACTIVEFILTERS: rimuovo action.key da activeFilters
            updatedActiveFilters = []
            state.activeFilters.map((filterObj) => {
              if (Object.keys(filterObj) != action.keyToFilter) {
                updatedActiveFilters = [...updatedActiveFilters, filterObj]
              }
            })
            // se è l'unico filtro attivo mostro una volta premuto mostro tutte le carte
            if ( updatedActiveFilters.length == 0 ) {
              updatedVisibleCards = state.cardList
            }
            else {
              updatedVisibleCards = updateVisibleCards()
            }
          }
          // 2.2.2 Tasto cliccato prima e più di un tasto attivo
          if (numberOfValuesInActiveFilterKey() > 1) {
            updatedActiveFilters = state.activeFilters.slice(0)
            updatedActiveFilters.map((filterObj) => {
              if (Object.keys(filterObj) == action.keyToFilter) {
                var activeFiltersValues = filterObj[action.keyToFilter]
                var indexOfValueToFilter = activeFiltersValues.indexOf(action.valueToFilter)
                activeFiltersValues.splice(indexOfValueToFilter, 1)
                filterObj[action.keyToFilter] = activeFiltersValues
              }
            })

            updatedVisibleCards = updateVisibleCards()
          }
        }
      }

      // console.log('state.visibleCards');
      // console.log(state.visibleCards);
      // console.log('updatedVisibleCards');
      // console.log(updatedVisibleCards);
      // console.log('state.activeFilters');
      // console.log(state.activeFilters);
      // console.log('updatedActiveFilters');
      // console.log(updatedActiveFilters);

      return Object.assign({}, state, {visibleCards: updatedVisibleCards}, {activeFilters: updatedActiveFilters})






















































    case 'SORT_BY':
      // console.log('SORT_BY arrivato nel riduttore');
      // console.log('action.contentType');
      // console.log(action.contentType);
      // console.log('action.columnID');
      // console.log(action.columnID);

        var isDescendant = false

        function compare(a, b) {
          // const varA = (action.columnID === o.WORD) ?
          //   a[action.columnID].toUpperCase() : a[action.columnID]
          // const varB = (action.columnID === o.WORD) ?
          //   b[action.columnID].toUpperCase() : b[action.columnID]
          var varA = {}
          var varB = {}

          // if (a[action.columnID] === '' ) varA = 9999999999
          // if (b[action.columnID] === '') varB = 9999999999


          if (action.contentType == o.WORD) {
            varA = a[action.columnID].toUpperCase()
            varB = b[action.columnID].toUpperCase()
          }
          else if (action.contentType == o.PARAGRAPH) {
            varA = a[action.columnID].toUpperCase()
            varB = b[action.columnID].toUpperCase()
          }
          else if (action.contentType == o.PERCENTAGE) {
            if (a[action.columnID] == 0)
              varA = 0
            else
              varA = parseFloat(a[action.columnID].substring(0, a[action.columnID].length-1))
            if (b[action.columnID] == 0)
              varB = 0
            else
              varB = parseFloat(b[action.columnID].substring(0, b[action.columnID].length-1))
          }
          else if (action.contentType == o.NUMBER) {
            varA = parseFloat(a[action.columnID])
            varB = parseFloat(b[action.columnID])
          }
          else if (action.contentType == o.PRICE) {
            varA = parseFloat(a[action.columnID].substring(3,a[action.columnID].length))
            varB = parseFloat(b[action.columnID].substring(3,b[action.columnID].length))
          }
          else if (action.contentType == o.TIME) {
            // varA = parseFloat(a[action.columnID].replace('days', ''))
            // varB = parseFloat(b[action.columnID].replace('days', ''))
            varA = a[action.columnID]
            varB = b[action.columnID]
            // console.log(a[action.columnID]);
          }
          else if (action.contentType == o.TICK) {
            if (a[action.columnID]) varA = -1
              else varA = 0
            if (b[action.columnID]) varB = -1
              else varB = 0
          }

          if (a[action.columnID] === '∞') varA = 99999999999
          if (b[action.columnID] === '∞') varB = 99999999999

          // If there is a sorting active the irrelevant cells must stay at the bottom
          if (state.sortedBy != action.columnID) {
            if (a[action.columnID] === '' ) varA = 9999999998
            if (b[action.columnID] === '' ) varB = 9999999998
            if (a[action.columnID] === '-' ) varA = 9999999999
            if (b[action.columnID] === '-' ) varB = 9999999999
          }
          else {
            if (a[action.columnID] === '') {
              if (state.isDescendant) varA = 9999999998
              else varA = -9998
            }
            if (b[action.columnID] === '' ) {
              if (state.isDescendant) varB = 9999999998
              else varB = -9998

            }
            if (a[action.columnID] === '-') {
              if (state.isDescendant) varA = 9999999999
              else varA = -9999
            }
            if (b[action.columnID] === '-' ) {

              if (state.isDescendant) varB = 9999999999
              else varB = -9999
            }
          }


          // if the button has been already pressed and the column is already sorted ascendently
          // it sorts the column descendently
          if (state.sortedBy === action.columnID && !state.isDescendant) {
            isDescendant = true
            if (varA > varB) {
              return -1;
            } else if (varA < varB) {
              return 1;
            }
            return 0;
          }
          // if the button has been already pressed and the column is already sorted
          // descendently it sorts the column ascendently
          if (state.sortedBy === action.columnID && state.isDescendant) {
              if (varA > varB) {
                return 1;
              } else if (varA < varB) {
                return -1;
              }
              return 0;
          }
          //if the button hasn't been already pressed, sort ascendently
          if (varA > varB) {
            return 1;
          } else if (varA < varB) {
            return -1;
          }
          return 0;

        }

        var sortedCardList = state.visibleCards.sort(compare)

        return Object.assign({}, state,
          {visibleCards: sortedCardList},
          {sortedBy: action.columnID},
          {isDescendant: isDescendant});

  }
  return state;
}
