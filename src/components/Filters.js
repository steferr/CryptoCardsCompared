import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { showFilters } from '../actions/index'
import FilterItem from '../containers/FilterItem'
import { filterTitleStyle } from '../utilities/styles'
import * as o from '../utilities/constants'
import ClosePanelButton from './ClosePanelButton'
import {PRIMARY} from '../utilities/constants'
import { TransitionMotion, spring } from 'react-motion'
import FiltersExpanded from './FiltersExpanded'
import { animationPreset1 } from '../utilities/animations'
import { shadowButtonsPrimary } from '../utilities/styles'


const Filters = (props) => {

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
    backgroundColor: PRIMARY,
    color: '#fff',
    zIndex: '20',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    boxShadow: shadowButtonsPrimary,
  }

  const willEnter = () => {
    // console.log('ClosePanelButton willEnter');
    return {width: 0, height: 0, fontSize: 0}
  }
  const willLeave = () => {
    // console.log('ClosePanelButton willLeave');
    return {width: spring(0, animationPreset1), height: spring(0, animationPreset1), fontSize: spring(0, animationPreset1)};
  }
  const getStyles = () => {
    return props.areFiltersVisible ? [] : [{
      key: 'ClosePanelButton',
      style: {width: spring(140, animationPreset1), height: spring(40, animationPreset1), fontSize: spring(12)},
    }]
  }

  return (
    <div style={{userSelect: 'none'}}>
      <FiltersExpanded isMounted={props.areFiltersVisible}/>


      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        defaultStyles={[{
          key: 'ClosePanelButton',
          style: { width: 0, height: 0, fontSize: 0}
        }]}
        styles={getStyles()}>
        { (items) => {
          return (
            <div onClick={()=>props.showFilters(true)}>
              { items.map(item => {
                return (
                  <div key={item.key} style={Object.assign({}, filterCollapsed, props.style, item.style )}>
                    Filters
                  </div>
                )
              })}
            </div>
          )}}
      </TransitionMotion>

    </div>
  )

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showFilters: showFilters }, dispatch)
}

function mapStateToProps(state) {
  return {
    areFiltersVisible: state.mainReducer.areFiltersVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
