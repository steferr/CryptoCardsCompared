import React, { Component } from 'react';
import HideCellType from './hide_cell_type'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterBy } from '../actions/index'

const FilterItem = (props) => {
  return (
    <div
      style={normal}
      onClick={()=>props.filterBy(props.filterType, props.label)}>
      {props.label}
    </div>
  )
}

function mapStateToProps(state) {
  return(
    state : state
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({filterBy: filterBy}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)

const normal = {
  borderRadius: '100px',
  border: 'none',
  padding: '4px 20px',
  fontSize: '12px',
  color: 'grey',
  outline: 'none',
  backgroundColor: '#e5e5e5',

}

FilterItem.PropTypes = {
  filterType: PropTypes.string,
}
