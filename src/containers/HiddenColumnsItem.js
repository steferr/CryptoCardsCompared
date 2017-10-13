import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showColumn } from '../actions/index'
import PropTypes from 'prop-types';
import { PRIMARY } from '../utilities/constants'
import ShowColumnButton from './ShowColumnButton'

const HiddenColumnsItem = (props) => {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      lineHeight: '18px',
      margin: '8px 0px',
      cursor: 'pointer',
    }
    return(
        <div onClick={() => props.showColumn(props.showColumn(props.columnGroup))} style={containerStyle}>
          <div style={{}}>{props.columnGroup}</div>
          <ShowColumnButton columnGroup={props.columnGroup} />
        </div>
    )
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({showColumn: showColumn }, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HiddenColumnsItem);

HiddenColumnsItem.propTypes = {
  columnID: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};
