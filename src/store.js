
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

// import Wirex_Plastic_Unverified_EUR from './utilities/cards/Wirex_Plastic_Unverified_EUR'
// import Wirex_Plastic_Unverified_USD from './utilities/cards/Wirex_Plastic_Unverified_USD'
// import Wirex_Plastic_Unverified_GBP from './utilities/cards/Wirex_Plastic_Unverified_GBP'
// import Wirex_Plastic_Verified_EUR from './utilities/cards/Wirex_Plastic_Verified_EUR'
// import Wirex_Plastic_Verified_USD from './utilities/cards/Wirex_Plastic_Verified_USD'
// import Wirex_Plastic_Verified_GBP from './utilities/cards/Wirex_Plastic_Verified_GBP'
// import Wirex_Virtual_Unverified_EUR from './utilities/cards/Wirex_Virtual_Unverified_EUR'
// import Wirex_Virtual_Unverified_USD from './utilities/cards/Wirex_Virtual_Unverified_USD'
// import Wirex_Virtual_Unverified_GBP from './utilities/cards/Wirex_Virtual_Unverified_GBP'
// import Wirex_Virtual_Verified_EUR from './utilities/cards/Wirex_Virtual_Verified_EUR'
// import Wirex_Virtual_Verified_USD from './utilities/cards/Wirex_Virtual_Verified_USD'
// import Wirex_Virtual_Verified_GBP from './utilities/cards/Wirex_Virtual_Verified_GBP'
// import Xapo_Plastic_Verified_EUR from './utilities/cards/Xapo_Plastic_Verified_EUR'
// import Xapo_Plastic_Verified_USD from './utilities/cards/Xapo_Plastic_Verified_USD'
// import Xapo_Plastic_Verified_GBP from './utilities/cards/Xapo_Plastic_Verified_GBP'
// import Xapo_Plastic_Unverified_EUR from './utilities/cards/Xapo_Plastic_Unverified_EUR'
// import Xapo_Plastic_Unverified_USD from './utilities/cards/Xapo_Plastic_Unverified_USD'
// import Xapo_Plastic_Unverified_GBP from './utilities/cards/Xapo_Plastic_Unverified_GBP'
//
// const cardList = [
//   Wirex_Plastic_Unverified_EUR,
//   Wirex_Plastic_Unverified_USD,
//   Wirex_Plastic_Unverified_GBP,
//   Wirex_Plastic_Verified_EUR,
//   Wirex_Plastic_Verified_USD,
//   Wirex_Plastic_Verified_GBP,
//   Wirex_Virtual_Unverified_EUR,
//   Wirex_Virtual_Unverified_USD,
//   Wirex_Virtual_Unverified_GBP,
//   Wirex_Virtual_Verified_EUR,
//   Wirex_Virtual_Verified_USD,
//   Wirex_Virtual_Verified_GBP,
//   Xapo_Plastic_Verified_EUR,
//   Xapo_Plastic_Verified_USD,
//   Xapo_Plastic_Verified_GBP,
//   Xapo_Plastic_Unverified_EUR,
//   Xapo_Plastic_Unverified_USD,
//   Xapo_Plastic_Unverified_GBP,
// ]



export const history = createHistory()

const initialState = {
  // cardList : cardList,
  // activeBook: null,
  // sortedBy: '',
  // isDescendant: false,
  // hiddenColumns: [],
  // visibleCards: cardList,
  // activeFilters: [],
  // isHiddenColumnsComponentExpanded: false,
  // areFiltersVisible: true,
  // windowSize: {}
}

const enhancers = []
const middleware = [
  // thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
