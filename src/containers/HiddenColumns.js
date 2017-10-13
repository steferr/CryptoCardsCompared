import React, {Component} from 'react';
import { connect } from 'react-redux';
import HiddenColumnsItem from './HiddenColumnsItem';
import ShowAllColumnsButton from './ShowAllColumnsButton';
import ClosePanelButton from '../components/ClosePanelButton'
import { PRIMARY, PRIMARY_DARKER, GREY_DARK, GREY_MEDIUM } from '../utilities/constants'
import HiddenColumnsExpanded from './HiddenColumnsExpanded'
import { expandHiddenColumns } from '../actions/index'
import { bindActionCreators } from 'redux';
import { TransitionMotion, spring } from 'react-motion'
import { animationPreset1 } from '../utilities/animations'
import { shadowButtonsPrimary, shadowButtonsDark, getHeightFilterExpanded } from '../utilities/styles'

const HiddenColumns = (props) => {

  const hiddenColumnsCounter = {
    color: '#fff',
    background: PRIMARY,
    borderRadius: '100px',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    fontSize: '10px',
    boxShadow: shadowButtonsPrimary,
  }
  const hiddenColumnsContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: props.areFiltersVisible ? `${getHeightFilterExpanded(props.windowSize.width)+8}px` : '64px',
    right: '16px',
    width: '140px',
    height: '40px',
    borderRadius: '100px',
    backgroundColor: '#fff',
    zIndex: '20',
    cursor: 'pointer',
    border: `1px solid ${GREY_MEDIUM}`,
    fontSize: '12px',
    boxShadow: shadowButtonsDark,
  }

  const willEnter = () => {
    // console.log('HiddenColumnsCollapsed willEnter');
    return {width: 0, height: 0, fontSize: 0, opacity: 0}
  }
  const willLeave = () => {
    // console.log('HiddenColumnsCollapsed willLeave');
    return {width: spring(0), height: spring(0), fontSize: spring(0, animationPreset1), opacity: spring(0)};
  }
  const getStyles = () => {
    return props.hiddenColumns.length == 0 || props.isHiddenColumnsComponentExpanded ? [] : [{
      key: 'HiddenColumnsCollapsed',
      style: {
        width: spring(140, animationPreset1),
        height: spring(40, animationPreset1),
        fontSize: spring(12),
        opacity: spring(1)
        // bottom: props.areFiltersVisible ? spring(88, animationPreset1) : spring(64, animationPreset1),
      },
    }]
  }
    return (
      <div>
      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        defaultStyles={[{
          key: 'ClosePanelButton',
          style: { width: 0, height: 0, fontSize: 0, opacity: 0}
        }]}
        styles={getStyles()}>
        { (items) => {
          return (
            <div>
              { items.map(item => {
                return (
                  <div key={item.key}>
                    <div style={Object.assign({}, hiddenColumnsContainer, props.style, item.style ) }
                    onClick={() => props.expandHiddenColumns(true)}>
                      <div style={hiddenColumnsCounter}>
                        { props.hiddenColumns.length }
                      </div>
                      <div>
                        Hidden Columns
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}}
      </TransitionMotion>
      <HiddenColumnsExpanded isMounted={props.isHiddenColumnsComponentExpanded && props.hiddenColumns.length != 0}/>
      </div>
    )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({expandHiddenColumns: expandHiddenColumns}, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.mainReducer.hiddenColumns,
    isHiddenColumnsComponentExpanded: state.mainReducer.isHiddenColumnsComponentExpanded,
    areFiltersVisible: state.mainReducer.areFiltersVisible,
    windowSize: state.mainReducer.windowSize,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HiddenColumns);

// HiddenColumns.propTypes = {
// };
const closeBtn = {
  position: 'relative',
  top: '24px',
}
const number = {
  color: PRIMARY,
  position: 'relative',
  top: '1px',
  marginRight: '8px',
}
const header = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const titleStyle = {
  fontWeight: '500',
  fontSize: '14px',
}
