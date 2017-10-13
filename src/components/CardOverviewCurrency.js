import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { PRIMARY, EUR, USD, GBP } from '../utilities/constants'

const CardOverviewCurrency = (props) => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: PRIMARY,
    color: '#fff',
    width: '24px',
    height: '24px',
    borderRadius: '999px',
    fontSize: '12px',
  }
  function formatCurrency() {
    if ( props.currency === EUR ) return '€'
    if ( props.currency === USD ) return '$'
    if ( props.currency === GBP ) return '£'
  }
  return (
    <div style={Object.assign({}, style, props.style)}>
      {formatCurrency()}
    </div>
  )
}

export default CardOverviewCurrency

CardOverviewCurrency.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  currency: PropTypes.string.isRequired,
}
