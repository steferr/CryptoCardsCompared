import React, {Component} from 'react';
import { connect } from 'react-redux';
import HiddenColumnsItem from './HiddenColumnsItem';
import ShowAllColumnsButton from './ShowAllColumnsButton';
import ClosePanelButton from '../components/ClosePanelButton'
import { PRIMARY, PRIMARY_DARKER, GREY_DARK, GREY_MEDIUM } from '../utilities/constants'
import { expandHiddenColumns } from '../actions/index'
import { bindActionCreators } from 'redux';
import { TransitionMotion, spring } from 'react-motion'
import { animationPreset1 } from '../utilities/animations'
import { getHeightFilterExpanded } from '../utilities/styles'

class HiddenColumnsExpanded extends Component {
  constructor (props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }
  renderList() {
    return this.props.hiddenColumns.map((columnGroup) => {
      return (
        <HiddenColumnsItem columnGroup={columnGroup} />
      )
    })
  }
  render() {
    const hiddenColumnsContainer = {
      position: 'fixed',
      justifyContent: 'space-between',
      bottom: this.props.areFiltersVisible ? getHeightFilterExpanded(this.props.windowSize.width)+32 : '88px',
      zIndex: 20,
      right: '16px',
      backgroundColor: '#fff',
      border: '1px solid #eee',
      padding: '16px 24px 0px',
      // borderRadius: '8px',
      width: '240px',
    }
    const closeBtn = {
      // position: 'relative',
      // top: '24px',
      // position: 'absolute',
      // bottom: '-24px',
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
    const listContainer = {
      width: '208px',
      maxHeight: '200px',
      overflowY: 'scroll',
      overflowX: 'hidden',
    }
    const willEnter = () => {
      // console.log('HiddenColumnsExpanded willEnter');
      return {maxHeight: 0, opacity: 0, borderRadius: 999}
    }
    const willLeave = () => {
      // console.log('HiddenColumnsExpanded willLeave');
      return {maxHeight: spring(0, animationPreset1), opacity: spring(0), borderRadius: spring(999, animationPreset1)};
    }
    const getStyles = () => {
      return !this.props.isMounted ? [] : [{
        key: 'HiddenColumnsExpanded',
        style: {maxHeight: spring(280, animationPreset1), opacity: spring(1), borderRadius: spring(8, animationPreset1)},
      }]
    }


    return (
      <TransitionMotion
        willEnter={willEnter}
        willLeave={willLeave}
        defaultStyles={[{
          key: 'HiddenColumnsExpanded',
          style: {maxHeight: 0, opacity: 0, borderRadius: 999}
        }]}
        styles={getStyles()}>
        { (items) => {
          return (
            <div onClick={this.props.action}>
              { items.map(item => {
                return (
                  <div key={item.key} style={Object.assign({}, hiddenColumnsContainer, this.props.style, item.style )}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <div style={header}>
                        <span style={number}>{this.props.hiddenColumns.length}</span>
                        <h3 style={titleStyle}>Hidden Columns</h3>
                      </div>
                      <ShowAllColumnsButton />
                      <div style={listContainer}>
                        {this.renderList()}
                      </div>
                    </div>
                      <div style={{flexGrow: '1', display: 'flex', justifyContent: 'center', position: 'relative', top: '24px'}}>
                        <div
                          style={closeBtn}
                          onClick={() => this.props.expandHiddenColumns(false)}
                        >
                          <ClosePanelButton isMounted={this.props.isHiddenColumnsComponentExpanded}/>
                        </div>
                      </div>
                  </div>
                )
              })}
            </div>
          )}}
      </TransitionMotion>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({expandHiddenColumns: expandHiddenColumns }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.mainReducer.hiddenColumns,
    areFiltersVisible: state.mainReducer.areFiltersVisible,
    isHiddenColumnsComponentExpanded: state.mainReducer.isHiddenColumnsComponentExpanded,
    windowSize: state.mainReducer.windowSize
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HiddenColumnsExpanded);


// HiddenColumns.propTypes = {
// };
