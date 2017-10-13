import { PRIMARY, PRIMARY_DARKER, GREY_DARK, GREY_MEDIUM } from './constants'

// TEXT styles
export const shadow1 = '0px 4px 12px rgba(25, 36, 59, 0.10)'
export const shadowFilters = '4px 0px 12px rgba(25, 36, 59, 0.10)'
export const shadowButtonsPrimary = '0px 4px 10px rgba(79, 135, 251, 0.26)'
export const shadowButtonsDark = '0px 4px 10px rgba(25, 36, 59, 0.14)'

export const getHeightFilterExpanded = (width) => {
  if (width < 325) return 320
  if (width < 523) return 240
  if (width < 870) return 160
  return 80
}

export const filterTitleStyle = {
  fontWeight: '500',
  color: GREY_DARK,
  fontSize: '12px',
  marginLeft: '8px',
  marginBottom: '4px',
}

export const primaryButtonStyle = {
  height: '32px',
  borderRadius: '100px',
  color: '#fff',
  backgroundColor: PRIMARY,
  fontWeight: '400',
  letterSpacing: '3px',
  outline: 'none',
  userSelect: 'none',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '12px',
  alignItems: 'center',
  padding: '0px 16px',
}

export const primaryButtonHoverStyle = Object.assign({}, primaryButtonStyle, {
  backgroundColor: PRIMARY_DARKER,
})

export const buttonFiltersStyle = {
  height: '32px',
  // marginRight: '8px',
  borderRadius: '100px',
  color: 'rgba(25, 36, 59, 0.6)',
  backgroundColor: GREY_MEDIUM,
  fontWeight: '500',
  letterSpacing: '1.1px',
  outline: 'none',
  userSelect: 'none',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // position: 'relative',
  flexGrow: '1',

}

export const buttonFiltersActiveStyle = Object.assign({}, buttonFiltersStyle, {
  color: '#fff',
  boxShadow: shadowButtonsPrimary,
  backgroundColor: PRIMARY,
  fontWeight: '400',
  // height: '40px',
})


export const buttonHoverStyle = {
  backgroundColor: PRIMARY_DARKER,
}
