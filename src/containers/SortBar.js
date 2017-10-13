import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { sortByNameAsc, sortByNameDes } from '../actions/index'
import SortBarItem1 from './SortBarItem1'
import SortBarItem2 from './SortBarItem2'
import SortBarItem4 from './SortBarItem4'
import SortBarItem5 from './SortBarItem5'
import * as o from '../utilities/constants'
import { shadow1 } from '../utilities/styles'

class SortBar extends Component {

  render() {
    // console.log(this.state);
    const container = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // position: 'fixed',
      // top: '60px',
      // position: 'sticky',
      // top: '0px',
      // left: this.props.offsetX,
      zIndex: 1,
      width: '3896px',
      height: '72px',
      // borderRadius: '4px',
      backgroundColor: '#fff',
      // border: '1px solid #e5e5e5',
      // boxShadow: '0px, 10px, 10px, #cccccc',
      boxShadow: shadow1,
      fontSize: '14px',
    }
    const item = {
      fontSize: '12px',
      fontWeight: '500',
      // width: '148px',
      textTransform: 'uppercase',
      letterSpacing: '.8px',
      // margin: '0px 30px',
    }
    // console.log(WORD);
    return(
      <div style={container} className = 'sortBar'>
        <div style = {{width: '160px', textAlign: 'center'}}>
          Card Overview
        </div>

        <SortBarItem1
          columnGroup={o.VERIFICATION_TYPE}
          columnID={o.VERIFICATION_TYPE}
          contentType={o.PARAGRAPH}
          title = 'Verification'
          style={ item }
          width= {128}
          isSortable = { false }
        />

        <SortBarItem1
          columnGroup={o.CARD_ISSUANCE_PRICE}
          columnID={o.CARD_ISSUANCE_PRICE}
          contentType={o.PRICE}
          title = 'Card Cost'
          style={item}
          width = {128}
          isSortable = { true }
        />

        <SortBarItem1
          columnGroup={o.ANNUAL_COST}
          columnID={o.ANNUAL_COST}
          contentType={o.PRICE}
          title = 'Annual Cost'
          style={item}
          width = {144}
          isSortable = { true }
        />

        <SortBarItem1
          columnGroup={o.CURRENCY_CONVERSION}
          columnID={o.CURRENCY_CONVERSION}
          contentType={o.PERCENTAGE}
          title = 'Curr. Exchange'
          style={item}
          width = {168}
          isSortable = { true }
        />

        <SortBarItem2
          columnGroup={o.ATM_WITHDRAWAL_FEE}
          groupTitle = 'ATM Withdrawal Fee'
          columnID1 = {o.ATM_DOMESTIC_WIDTHRAWAL_FEE}
          contentType1={o.PRICE}
          title1 = 'Domestic'
          columnID2 = {o.ATM_INTERNATIONAL_WITHDRAWAL_FEE}
          contentType2={o.PRICE}
          title2 = 'International'
          style={item}
          width={272}
        />

        <SortBarItem1
          columnGroup={o.CASH_BACK}
          columnID={o.CASH_BACK}
          contentType={o.PERCENTAGE}
          title = 'Cash Back'
          style={item}
          width = {136}
          isSortable = { true }
        />

        <SortBarItem1
          columnGroup={o.PIN_CHANGE}
          columnID={o.PIN_CHANGE}
          contentType={o.PRICE}
          title = 'Pin Change'
          style={item}
          width = {136}
          isSortable = { true }
        />

        <SortBarItem1
          columnGroup={o.APPS}
          columnID={o.APPS}
          contentType={o.PARAGRAPH}
          title = 'Apps'
          style={item}
          width = {136}
          isSortable = { false }
        />

        <SortBarItem1
          columnGroup={o.TWO_FACTORS_AUTH}
          columnID={o.TWO_FACTORS_AUTH}
          contentType={o.TICK}
          title = '2 F.Auth'
          style={item}
          width = {136}
          isSortable = { true }
        />

        <SortBarItem2
          columnGroup={o.CARD_DELIVERY_STANDARD}
          groupTitle = 'Std. Delivery'
          columnID1 = {o.CARD_DELIVERY_STD_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Time'
          columnID2 = {o.CARD_DELIVERY_STD_PRICE}
          contentType2={o.PRICE}
          title2 = 'Cost'
          style={item}
          width={168}
        />

        <SortBarItem2
          columnGroup={o.CARD_DELIVERY_EXPRESS}
          groupTitle = 'Exp. Delivery'
          columnID1 = {o.CARD_DELIVERY_EXP_TIME_MAX}
          contentType1={o.TIME}
          title1 = 'Time'
          columnID2 = {o.CARD_DELIVERY_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = 'Cost'
          style={item}
          width={168}
        />

        <SortBarItem2
          columnGroup={o.CARD_REPLACEMENT}
          groupTitle = 'Card Replacement'
          columnID1 = {o.CARD_REPLACEMENT_STD_PRICE}
          contentType1={o.PRICE}
          title1 = 'Standard'
          columnID2 = {o.CARD_REPLACEMENT_EXP_PRICE}
          contentType2={o.PRICE}
          title2 = 'Express'
          style={item}
          width={216}
        />

        <SortBarItem1
          columnGroup={o.CONNECTED_WALLETS}
          columnID={o.CONNECTED_WALLETS}
          contentType={o.PARAGRAPH}
          title = 'Internal Wallets'
          style={item}
          width = {160}
          isSortable = { false}
        />

        <SortBarItem1
          columnGroup={o.WALLET_LOAD_TYPES}
          columnID={o.WALLET_LOAD_TYPES}
          contentType={o.PARAGRAPH}
          title = 'Reload Types'
          style={item}
          width = {128}
          isSortable = { false }
        />

        <SortBarItem4
          columnGroup={o.ATM_TRANSACTION_NUMBER}
          groupTitle = 'Number of ATM Transactions'
          columnID1 = {o.ATM_TRANSACTIONNUMBER_24H}
          contentType1={o.NUMBER}
          title1 = '24h'
          columnID2 = {o.ATM_TRANSACTIONNUMBER_MONTH}
          contentType2={o.NUMBER}
          title2 = 'Month'
          columnID3 = {o.ATM_TRANSACTIONNUMBER_YEAR}
          contentType3={o.NUMBER}
          title3 = 'Year'
          columnID4 = {o.ATM_TRANSACTIONNUMBER_LIFETIME}
          contentType4={o.NUMBER}
          title4 = 'Lifetime'
          style={item}
          width={336}
        />

        <SortBarItem4
          columnGroup={o.PURCHASES_TOTAL_NUMBER}
          groupTitle = 'Number of Purchases'
          columnID1 = {o.PURCHASES_TOTAL_NUMBER_24H}
          contentType1={o.NUMBER}
          title1 = '24h'
          columnID2 = {o.PURCHASES_TOTAL_NUMBER_MONTH}
          contentType2={o.NUMBER}
          title2 = 'Month'
          columnID3 = {o.PURCHASES_TOTAL_NUMBER_YEAR}
          contentType3={o.NUMBER}
          title3 = 'Year'
          columnID4 = {o.PURCHASES_TOTAL_NUMBER_LIFETIME}
          contentType4={o.NUMBER}
          title4 = 'Lifetime'
          style={item}
          width={336}
        />

        <SortBarItem5
          columnGroup={o.ATM_WITHDRAWAL_AMOUNT}
          groupTitle = 'ATM Withdrawal Amount'
          columnID1 = {o.ATM_WITHDRAWALAMOUNT_SINGLE}
          contentType1={o.PRICE}
          title1 = 'Single'
          columnID2 = {o.ATM_WITHDRAWALAMOUNT_24H}
          contentType2={o.PRICE}
          title2 = '24h'
          columnID3 = {o.ATM_WITHDRAWALAMOUNT_MONTH}
          contentType3={o.PRICE}
          title3 = 'Month'
          columnID4 = {o.ATM_WITHDRAWALAMOUNT_YEAR}
          contentType4={o.PRICE}
          title4 = 'Year'
          columnID5 = {o.ATM_WITHDRAWALAMOUNT_LIFETIME}
          contentType5={o.PRICE}
          title5 = 'Lifetime'
          style={item}
          width={420}
        />

        <SortBarItem5
          columnGroup={o.PURCHASES_TOTAL_SPENDING}
          groupTitle = 'Total Spending Amount'
          columnID1 = {o.PURCHASES_TOTAL_SPENDING_SINGLE}
          contentType1={o.PRICE}
          title1 = 'Single'
          columnID2 = {o.PURCHASES_TOTAL_SPENDING_24H}
          contentType2={o.PRICE}
          title2 = '24h'
          columnID3 = {o.PURCHASES_TOTAL_SPENDING_MONTH}
          contentType3={o.PRICE}
          title3 = 'Month'
          columnID4 = {o.PURCHASES_TOTAL_SPENDING_YEAR}
          contentType4={o.PRICE}
          title4 = 'Year'
          columnID5 = {o.PURCHASES_TOTAL_SPENDING_LIFETIME}
          contentType5={o.PRICE}
          title5 = 'Lifetime'
          style={item}
          width={420}
        />


      </div>
    )
  }
}


export default SortBar
