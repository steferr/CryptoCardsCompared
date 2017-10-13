import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { showFilters } from '../actions/index'
import FilterItem from '../containers/FilterItem'
import Radium from 'radium'
import { filterTitleStyle } from '../utilities/styles'
import * as o from '../utilities/constants'
import ClosePanelButton from './ClosePanelButton'
import {PRIMARY} from '../utilities/constants'
import { Motion, spring } from 'react-motion'
import FiltersExpanded from './components'
const Filters = (props) => {

  const spaceBeteenButtons = {
    width: '8px',
    height: '32px',
    backgroundColor: '#F6B674',
  }
  const filterCollapsed = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    width: '140px',
    height: '40px',
    borderRadius: '100px',
    // padding: '0px 24px',
    backgroundColor: PRIMARY,
    color: '#fff',
    zIndex: '20',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
  }
  const container1 = {
    position: 'fixed',
    zIndex: '20',
    bottom: '0px',
    height: '80px',
    width: '100%',
    background: '#fff',
    borderTop: `1px solid ${o.GREY_MEDIUM}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    userSelect: 'none',
    // flexWrap: 'wrap',
  }
  const container2 = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexGrow: '1',
  }
  const container3 = {
    flexGrow: '2',
    // width: '20%',
    padding: '0px 16px',
    borderRight: `1px solid ${o.GREY_MEDIUM}`,
  }
  const container4 = {
    width: '100%',
  }
  const container5 = {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
  }
  const closeButtonContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
  }
  const handleCloseButtonClick = () => {
    props.showFilters(false)
  }
  // console.log(props.areFiltersVisible);
  if (props.areFiltersVisible) {
    return (
      <div style = {container1}>
      <div style={container2}>
        <div style={container3}>
          <div style={container4}>
            <div>
              <h5 style={filterTitleStyle}>Card Type</h5>
            </div>
            <div style={container5}>
              <FilterItem keyToFilter='cardType' valueToFilter = {o.PLASTIC} label='Plastic'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter='cardType' valueToFilter = {o.VIRTUAL} label='Virtual'/>
            </div>
          </div>
        </div>

        <div style = {{...container3, flexGrow:'1'}}>
          <div style={container4}>
            <div>
              <h5 style={filterTitleStyle}>Spending Currency</h5>
            </div>
            <div style={container5}>
              <FilterItem keyToFilter='spendingCurrency' valueToFilter = {o.EUR} label='€'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter='spendingCurrency' valueToFilter = {o.USD} label='$'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter='spendingCurrency' valueToFilter = {o.GBP} label='£'/>
            </div>
          </div>
        </div>

        <div style={container3}>
          <div style={container4}>
            <div>
              <h5 style={filterTitleStyle}>Required Verification</h5>
            </div>
            <div style={container5}>
              <FilterItem keyToFilter ='isVerificationRequired' valueToFilter = {false} label='None'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter ='proofOfIdentityRequired' valueToFilter = {true} label='Id'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter ='proofOfAddressRequired' valueToFilter = {true} label='Addr.'/>
            </div>
          </div>
        </div>

        <div style = {{...container3, flexGrow:'1'}}>
          <div style={container4}>
            <div>
              <h5 style={filterTitleStyle}>Crypto purchase</h5>
            </div>
            <div style={container5}>
              <FilterItem keyToFilter ='instantCryptoPayment' valueToFilter = {false} label='No'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter ='instantCryptoPayment' valueToFilter = {true} label='Yes'/>
            </div>
          </div>
        </div>

        <div style={container3}>
          <div style={container4}>
            <div>
              <h5 style={filterTitleStyle}>Card Acceptance</h5>
            </div>
            <div style={container5}>
              <FilterItem keyToFilter ='cardIssuer' valueToFilter = {o.MASTERCARD} label='MCard'/>
              <div style={spaceBeteenButtons}></div>
              <FilterItem keyToFilter ='cardIssuer' valueToFilter = {o.VISA} label='Visa'/>
            </div>
          </div>
        </div>
      </div>
          <div
            style={closeButtonContainer}>
            <ClosePanelButton isMounted={props.areFiltersVisible} action={handleCloseButtonClick}/>
          </div>

      </div>
    )
  }
  else {
    return (
      <div style={filterCollapsed} onClick={()=>props.showFilters(true)}>
        Filters
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showFilters: showFilters }, dispatch)
}

function mapStateToProps(state) {
  return {
    areFiltersVisible: state.areFiltersVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
