import React, { Component } from 'react';
import FilterItem from './filters_item'

const Filters = (props) => {
  return (
    <div style = {{ height: '80px' }}>
    <h3>Filters</h3>
    <div style={{display: 'flex', alignItems: 'flex-end'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
        <h5>Issued by</h5>
        </div>
        <div style={{display: 'flex'}}>
        <FilterItem filterType='cardIssuer' label='Mastercard'/>
        <FilterItem filterType='cardIssuer' label='Visa'/>
        </div>
      </div>
      <FilterItem filterType='title'/>
      <FilterItem filterType='category'/>
      <FilterItem filterType='pages'/>
      <FilterItem filterType='price'/>
    </div>
    </div>
  )
}

export default Filters
