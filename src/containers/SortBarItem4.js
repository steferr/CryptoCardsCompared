import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../actions/index'
import HideColumnButton from './HideColumnButton'
import SortIcon from '../components/SortIcon'
import { GREY_MEDIUM } from '../utilities/constants'

const SortBarItem4 = (props) => {

  const spaceBeteenButtons = {
    width: '12px',
    height: '10px',
  }

  if (props.hiddenColumns.includes(props.columnGroup))
    return <div></div>
  else {
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: `${props.width}px`, userSelect: 'none',
    // borderRight: `1px solid ${GREY_MEDIUM}`,
    boxShadow: `1px 0px ${GREY_MEDIUM}`

}}>
      <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div>
          {props.groupTitle}
        </div>
        <div style={children}>
          <HideColumnButton columnGroup={props.columnGroup} label={'hide'}/>
        </div>
      </div>

      <div style = {{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID1, props.contentType1)
          }}
          >
          {props.title1}
          </div>
          <SortIcon {...props} columnID={props.columnID1}></SortIcon>
        </div>

        <div style = { spaceBeteenButtons }></div>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID2, props.contentType2)
          }}
          >
          {props.title2}
          </div>
          <SortIcon {...props} columnID={props.columnID2}></SortIcon>
        </div>

        <div style = { spaceBeteenButtons }></div>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID3, props.contentType3)
          }}
          >
          {props.title3}
          </div>
          <SortIcon {...props} columnID={props.columnID3}></SortIcon>
        </div>

        <div style = { spaceBeteenButtons }></div>

        <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div
          style={Object.assign({cursor: 'pointer'}, props.style, children)}
          onClick={() => {
            props.sortBy(props.columnID4, props.contentType4)
          }}
          >
          {props.title4}
          </div>

          <SortIcon {...props} columnID={props.columnID4}></SortIcon>

        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SortBarItem4)

const children = {
  alignSelf: 'center',
}


SortBarItem4.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
  columnID1: PropTypes.string.isRequired,
  columnID2: PropTypes.string.isRequired,
  columnID3: PropTypes.string.isRequired,
  columnID4: PropTypes.string.isRequired,
  contentType1: PropTypes.string.isRequired,
  contentType2: PropTypes.string.isRequired,
  contentType3: PropTypes.string.isRequired,
  contentType4: PropTypes.string.isRequired,
  status: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number.isRequired,

};
