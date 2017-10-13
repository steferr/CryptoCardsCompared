import React, {Component} from 'react';
import { connect } from 'react-redux';
import HiddenColumnsItem from './HiddenColumnsItem';
import ShowAllColumnsButton from './ShowAllColumnsButton';
import ClosePanelButton from '../components/ClosePanelButton'
import { PRIMARY, PRIMARY_DARKER, GREY_DARK, GREY_MEDIUM } from '../utilities/constants'
import { expandHiddenColumns } from '../actions/index'
import { bindActionCreators } from 'redux';

class HiddenColumnsExpanded extends Component {
  constructor (props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }
  renderList() {
    // console.log(this.props.columnGroup);
    return this.props.hiddenColumns.map((columnGroup) => {
      return (
        <HiddenColumnsItem columnGroup={columnGroup} />
        // <p>pollo</p>
      )
    })
  }
  render() {
    const showCellContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'fixed',
      bottom: this.props.areFiltersVisible ? '112px' : '88px',
      zIndex: 20,
      right: '16px',
      backgroundColor: '#fff',
      border: '1px solid #eee',
      padding: '16px 24px 0px',
      borderRadius: '8px',
    }
    if (this.props.hiddenColumns.length == 0) {
      return <div></div>
    }
    else return (
      <div style={showCellContainerStyle}>
      <div style={header}>
        <span style={number}>{this.props.hiddenColumns.length}</span>
        <h3 style={titleStyle}>Hidden Columns</h3>
      </div>
        <ShowAllColumnsButton />
        <div>
          {this.renderList()}
        </div>
        <div
          style={closeBtn}
          onClick={() => this.props.expandHiddenColumns(false)}
        >
          <ClosePanelButton isMounted={this.props.isHiddenColumnsComponentExpanded}/>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({expandHiddenColumns: expandHiddenColumns }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenColumns: state.hiddenColumns,
    areFiltersVisible: state.areFiltersVisible,
    isHiddenColumnsComponentExpanded: state.isHiddenColumnsComponentExpanded
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HiddenColumnsExpanded);


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
