import React, { Component } from 'react';
import HideColumnButton from './HideColumnButton'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterBy, filterVerification } from '../actions/index'
import { Motion, spring } from 'react-motion'
import { buttonFiltersStyle, buttonFiltersActiveStyle } from '../utilities/styles'
import { PRIMARY, PRIMARY_DARKER } from '../utilities/constants'

class FilterItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  updateState() {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    const statico = this.state.active ? buttonFiltersActiveStyle : buttonFiltersStyle
    const animationPreset = { stiffness: 390, damping: 30 }
    const dinamico = {
      fontSize: this.state.active ? spring(14) : spring(12),
      height: this.state.active ? spring(40, animationPreset) : spring(32, animationPreset),
    }
    return (
      <div
      style={{flexGrow: '1', display:'flex'}}
      onClick={()=>{
        this.updateState()
        this.props.filterBy(this.props.keyToFilter, this.props.valueToFilter)
      }}>

      <Motion style={dinamico}>
        {(interpolatedStyle) => {
          return(
              <div style={Object.assign( {}, statico, {
                fontSize: `${interpolatedStyle.fontSize}px`,
                height: `${interpolatedStyle.height}px`
              })}>
                {this.props.label}
              </div>
          )
        }}
      </Motion>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    // state : state
    activeFilters: state.activeFilters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({filterBy: filterBy, filterVerification: filterVerification}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)


FilterItem.PropTypes = {
  filterType: PropTypes.string,
}



// <div
// style={Object.assign({}, normal, this.getStyle())}
// onClick={()=>{
//   this.props.filterBy(this.props.keyToFilter, this.props.valueToFilter)
//   this.updateState()
// }}>
// {this.props.label}
