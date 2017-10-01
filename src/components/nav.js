import React, { Component } from 'react';
import FilterItem from '../containers/filters_item'

  // onTouchStart={this.handleTouchStart.bind(this)}
  const Nav = (props) => {
    // let {cacca} = {tette: 'culo', merda: 'vagina'}
    // console.log(cacca);
    // onTouchStart = {(e)=>{console.log('start')}}
    // onTouchEnd = {(e)=>{console.log(e)}}
    // onTouchMove = {(e)=>{console.log('move')}}
    // onTouchMove = {(e)=>{console.log(e)}}
  return (
    <div style = {{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0px',
    // left: '0px',
    width: '90%',
    height: '60px',
    background: '#21252B',
    // padding: '0px 16px', //problemi con paddinx dx
    }}
    >
    <h3 style={{color: '#F6F9FA'}}>CryptoCardsCompared</h3>

      <div style={{display: 'flex'}}>
        <FilterItem filterType='title' label = 'About'/>
        <FilterItem filterType='category' label = 'Disclaimer'/>
      </div>
    </div>
  )
}

export default Nav
