import React, { Component } from 'react';
import { PRIMARY } from '../utilities/constants'
// import { primaryButtonStyle, primaryButtonHoverStyle } from '../utilities/styles'
import PropTypes from 'prop-types'
import {TransitionMotion, Motion, spring} from 'react-motion'
import {animationPreset1} from '../utilities/animations'
import { shadowButtonsPrimary } from '../utilities/styles'

const ClosePanelButton = (props) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    borderRadius: '999px',
    cursor: 'pointer',
    boxShadow: shadowButtonsPrimary,
  }
  const willEnter = () => {
    // console.log('ClosePanelButton willEnter');
    return {width: 0, height: 0}
  }
  const willLeave = () => {
    // console.log('ClosePanelButton willLeave');
    return {width: spring(0), height: spring(0)};
  }
  const getStyles = () => {
    return !props.isMounted ? [] : [{
      // key: 'ClosePanelButton',
      style: {width: spring(48, animationPreset1), height: spring(48, animationPreset1)},
    }]
  }

  return (
    <TransitionMotion
      willEnter={willEnter}
      willLeave={willLeave}
      defaultStyles={[{
        key: 'ClosePanelButton',
        style: { width: 0, height: 0}
      }]}
      styles={getStyles()}>
      { (items) => {
        return (
          <div onClick={props.action}>
            { items.map(item => {
              return (
                <div key={item.key} style={Object.assign({}, containerStyle, props.style, item.style )}>
                  <img src="../../resources/ico_close.svg" alt=""/>
                </div>
              )
            })}
          </div>
        )}}
    </TransitionMotion>
  )
}

// <div style={Object.assign({}, containerStyle, props.style)}>
// <img src="../../resources/ico_close.svg" alt=""/>
// </div>
export default ClosePanelButton

ClosePanelButton.defaultProps = {
  width: '48px',
  height: '48px',
  backgroundColor: PRIMARY,
}

ClosePanelButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  isMounted: PropTypes.bool, //isRequired
}












// - - - - OLD COMPONENT WITHOUT ANIMATIONS
//
// const ClosePanelButton = (props) => {
//   const containerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: props.width,
//     height: props.height,
//     backgroundColor: props.backgroundColor,
//     borderRadius: '999px',
//     cursor: 'pointer',
//   }
//   return (
//
//       <div style={Object.assign({}, containerStyle, props.style)}>
//         <img src="../../resources/ico_close.svg" alt=""/>
//       </div>
//   )
// }
//
// export default ClosePanelButton
//
// ClosePanelButton.defaultProps = {
//   width: '48px',
//   height: '48px',
//   backgroundColor: PRIMARY,
// }
//
// ClosePanelButton.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string,
//   style: PropTypes.object,
// }
