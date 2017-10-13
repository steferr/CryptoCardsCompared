import {TransitionMotion, Motion, spring} from 'react-motion'
import React, {Component} from 'react'

class Child extends React.Component {

  willEnter() {
    return {
      opacity: 0,
      width: 0,
    }
  }
  willLeave() {
    return {
      opacity: spring(0),
      width: spring(0),
    }
  }
  render() {
    const box = {
      backgroundColor: '#FD675F',
      position: 'relative',
    }
    const label = {
      display: 'flex',
      flexGrow: '1',
      width: '100%',
      height: '100%',
      color: 'grey',
      fontSize: '3rem',
    }
    // console.log(this.props);
    return (
      <TransitionMotion
        styles={ this.props.isMounted ? [{
          key: 'child',
          style: {
            opacity: spring(1),
            width: spring(500)
          }
        }] : [] }
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
          {(items) => {
            return (
              <div>
                {items.map(item => {
                  return (
                    <div key={item.key} style={{...box, opacity:item.style.opacity, width: item.style.width}}>
                      <div style={label}>{item.style.opacity}</div>
                    </div>
                  );
                })}
                <button onClick={this.props.toggle}>unmount</button>
              </div>
            )
          }}
      </TransitionMotion>
    )
  }
}

export default class RedBar extends React.Component {
  state = {
    renderChild: true
  };
  toggle = () => {
    this.setState({
      renderChild: !this.state.renderChild
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        Parent
       <Child toggle={this.toggle} isMounted={this.state.renderChild} />
      </div>
    )
  }
}
