import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../actions/index'
import HideColumnButton from './HideColumnButton'
import SortIcon from '../components/SortIcon'
import { GREY_MEDIUM } from '../utilities/constants'

const SortBarItem1 = (props) => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: `${props.width}px`,
    userSelect: 'none',
    // borderRight: `1px solid ${GREY_MEDIUM}`
    boxShadow: `1px 0px ${GREY_MEDIUM}`
  }
  // console.log(props.columnGroup);
  if (props.hiddenColumns.includes(props.columnGroup))
    return <div></div>
  else if (!props.isSortable){
    return (
      <div style={ containerStyle }>
        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'default'}, props.style, children)}
          >
          {props.title}
          </div>
        </div>
        <div style={children}>
          <HideColumnButton columnGroup={props.columnGroup} label={'hide'}/>
        </div>
      </div>
    )
  }

  else {
  return (
    <div style={ containerStyle }>

      <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div
        style={Object.assign({cursor: 'pointer'}, props.style, children)}
        onClick={() => {
          props.sortBy(props.columnID, props.contentType)
        }}
        >
        {props.title}
        </div>
        <SortIcon {...props}></SortIcon>
      </div>

      <div style={children}>
        <HideColumnButton columnGroup={props.columnGroup} label={'hide'}/>
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
  return {
    hiddenColumns: state.mainReducer.hiddenColumns,
    sortedBy: state.mainReducer.sortedBy,
    isDescendant: state.mainReducer.isDescendant
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SortBarItem1)

const children = {
  alignSelf: 'center',
}


SortBarItem1.propTypes = {
  title: PropTypes.string,
  contentType: PropTypes.string,
  // status: PropTypes.string,
  isSortable: PropTypes.bool.isRequired,
  style: PropTypes.object,
  width: PropTypes.number.isRequired,

};
