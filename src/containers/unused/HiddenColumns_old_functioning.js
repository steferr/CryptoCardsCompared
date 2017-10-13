import React, {Component} from 'react';
import { connect } from 'react-redux';
import HiddenColumnsItem from './HiddenColumnsItem';
import ShowAllColumnsButton from './ShowAllColumnsButton';
import ClosePanelButton from '../components/ClosePanelButton'
import { PRIMARY, PRIMARY_DARKER, GREY_DARK, GREY_MEDIUM } from '../utilities/constants'
import HiddenColumnsExpanded from './HiddenColumnsExpanded'
import { expandHiddenColumns } from '../actions/index'
import { bindActionCreators } from 'redux';

class HiddenColumns extends Component {
  render() {
    const hiddenColumnsCounter = {
      color: '#fff',
      // padding: '16px',
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
    }
    const showCellContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      bottom: this.props.areFiltersVisible ? '88px' : '64px',
      right: '16px',
      width: '140px',
      height: '40px',
      borderRadius: '100px',
      // padding: '0px 24px',
      backgroundColor: '#fff',
      zIndex: '20',
      cursor: 'pointer',
      border: `1px solid ${GREY_MEDIUM}`,
      fontSize: '12px',
    }

    if (!this.props.isHiddenColumnsComponentExpanded) {
      if (this.props.hiddenColumns.length == 0) {
        return <div></div>
      }
      else {
        return (
          <div style={showCellContainerStyle}
          onClick={() => this.props.expandHiddenColumns(true)}>
            <div style={hiddenColumnsCounter}>
              { this.props.hiddenColumns.length }
            </div>
            <div>
              Hidden Columns
            </div>
          </div>
        )
      }
    }
    else {
      return <HiddenColumnsExpanded />
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({expandHiddenColumns: expandHiddenColumns}, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.hiddenColumns,
    isHiddenColumnsComponentExpanded: state.isHiddenColumnsComponentExpanded,
    areFiltersVisible: state.areFiltersVisible,
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
