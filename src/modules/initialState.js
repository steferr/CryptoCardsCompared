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

export default initialState = {
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
