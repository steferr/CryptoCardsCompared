import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../actions/index'
import HideCellType from './hide_cell_type'

const SortBarItem = (props) => {
  if (props.hiddenCells.includes(props.cellType))
    return <div></div>
  else {
  return (
    <div style={{display: 'flex', flexDirection: 'column', }}>
      <div
      style={Object.assign({}, props.style, children)}
      onClick={() => {
        props.sortBy(props.cellType)
      }}
      >
      {props.title}
      </div>
      <div style={children}>
        <HideCellType cellType={props.cellType} label={'hide'}/>
      </div>
    </div>
  )}

}
// export default SortBarItem

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sortBy : sortBy,
  }, dispatch)
}

function mapStateToProps(state) {
  return {hiddenCells: state.hiddenCells}
}
export default connect(mapStateToProps, mapDispatchToProps)(SortBarItem)

const children = {
  alignSelf: 'center',
}

SortBarItem.propTypes = {
  title: PropTypes.string,
  cellType: PropTypes.string,
  status: PropTypes.string,
  style: PropTypes.object,

};
