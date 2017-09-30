import React, { Component } from 'react';
import FilterItem from '../containers/filters_item'

const Nav = (props) => {
  return (
    <div style = {{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    background: 'red',
    padding: '0px 16px',
    }}>
    <h3>CryptoCardsCompared</h3>

      <div style={{display: 'flex'}}>
        <FilterItem filterType='title' label = 'About'/>
        <FilterItem filterType='category' label = 'Disclaimer'/>
      </div>
    </div>
  )
}

export default Nav
