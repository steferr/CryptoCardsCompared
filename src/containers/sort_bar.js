import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { sortByNameAsc, sortByNameDes } from '../actions/index'
import SortBarItem from './sort_bar_item'

class SortBar extends Component {
  render() {
    return(
      <div style={container}>
        <SortBarItem cellType='title' title = 'title' style={item}/>
        <SortBarItem cellType='cardIssuer' title = 'cardIssuer' style={item}/>
        <SortBarItem cellType='pages' title = 'pages' style={item}/>
        <SortBarItem cellType='category' title = 'category' style={item}/>
        <SortBarItem cellType='price' title = 'price' style={item}/>
      </div>
    )
  }
}

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'fixed',
  top: '130px',
  cursor: 'pointer',
  width: '100%',
  height: '72px',
  border: '1px solid #e5e5e5',
  // margin: '8px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0px, 10px, 10px, #cccccc'
}
const item = {
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '.8px',
  margin: '0px 30px',
}

export default SortBar
