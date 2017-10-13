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

const Filters = (props) => {
  const spaceBeteenButtons = {
    width: '8px',
    height: '32px',
    // display: 'block',
    // flexGrow: '1',
    backgroundColor: '#F6B674',
  }
  const box = {
    height: '32px',
    background: '#3A494C',
    flexGrow: '1',
    borderRadius: '999px',
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
    flexWrap: 'wrap',
  }
  const container2 = {
    flexGrow: '1',
    // width: '400px',
    // display: 'flex',
    padding: '0px 16px',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // height: '100%',
    borderRight: `1px solid ${o.GREY_MEDIUM}`,
  }
  const container3 = {
    width: '100%',
  }
  const container4 ={
    display: 'flex',
  }
  // console.log(props.areFiltersVisible);
  if (props.areFiltersVisible) {
    return (
      <div style = {container1}>

        <div style={container2}>
          <div style={container3}>
            <div>
              <h5 style={filterTitleStyle}>Card Type</h5>
            </div>
            <div style={container4}>
              <div style={box}></div>
              <div style= {spaceBeteenButtons}></div>
              <div style={box}></div>
            </div>
          </div>
        </div>

        <div style={container2}>
          <div style={container3}>
            <div>
              <h5 style={filterTitleStyle}>Spending Currency</h5>
            </div>
            <div style={container4}>
              <div style={box}></div>
              <div style= {spaceBeteenButtons}></div>
              <div style={box}></div>
              <div style= {spaceBeteenButtons}></div>
              <div style={box}></div>
            </div>
          </div>
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
// <div style={container2}>
// <div style={container3}>
// <div>
// <h5 style={filterTitleStyle}>Required Verification</h5>
// </div>
// <div style={container4}>
// <div style={box}></div>
// <div style={box}></div>
// <div style={box}></div>
// </div>
// </div>
// </div>
//
// <div style={container2}>
// <div style={container3}>
// <div>
// <h5 style={filterTitleStyle}>Crypto to FIAT at purch.</h5>
// </div>
// <div style={container4}>
// <div style={box}></div>
// <div style={box}></div>
// </div>
// </div>
// </div>
//
// <div style={container2}>
// <div style={container3}>
// <div>
// <h5 style={filterTitleStyle}>Card Acceptance</h5>
// </div>
// <div style={container4}>
// <div style={box}></div>
// <div style={spaceBeteenButtons}></div>
// <div style={box}></div>
// </div>
// </div>
// </div>
//
// <div style={container2} onClick={()=>props.showFilters(false)}>
// <ClosePanelButton />
// </div>
