import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilterItem from '../containers/FilterItem'
import ButtonPrimary from './ButtonPrimary'
import { GREY_MEDIUM } from '../utilities/constants'
import { primaryButtonStyle, primaryButtonHoverStyle } from '../utilities/styles'
  // onTouchStart={this.handleTouchStart.bind(this)}
  const Nav = (props) => {
    // let {cacca} = {tette: 'culo', merda: 'vagina'}
    // console.log(cacca);
    // onTouchStart = {(e)=>{console.log('start')}}
    // onTouchEnd = {(e)=>{console.log(e)}}
    // onTouchMove = {(e)=>{console.log('move')}}
    // onTouchMove = {(e)=>{console.log(e)}}
  const menuItemStyle = {
    fontSize: '12px',
    marginRight: '16px',
  }
  // console.log(props);
  return (
    <div style={{width: '3896px'}}>
    <div style = {{
    // position: 'sticky',
    // top:'-60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // position: 'fixed',
    zIndex: '20',
    // top: '0px',
    // left: '0px',
    width: props.windowSize.width,
    // width: '800px',
    height: '60px',
    background: '#fff',
    // borderBottom: `1px solid ${GREY_MEDIUM}`
    boxShadow: `0px 1px ${GREY_MEDIUM}`,
    // background: 'green',
    // padding: '0px 16px', //problemi con paddinx dx
    }}
    className = 'nav'
    >
      <div onClick={() => props.goToHome()}>
        <img src="../../resources/logo_cccompare.svg" alt="Crypto Cards Compared" style={{marginLeft: '16px', cursor:'pointer'}}/>
      </div>

      <div style={{display: 'flex', alignItems: 'center', marginRight: '16px'}}>
      <div onClick={() => props.goToAbout()}>
        <Link to="/about">
          <div style={menuItemStyle}>About</div>
        </Link>
      </div>

        <ButtonPrimary label='Support'/>
      </div>
    </div>
    </div>
  )
}


const mapDispatchToProps = dispatch => bindActionCreators({
  goToAbout: () => push('/about'),
  goToHome: () => push('/'),
}, dispatch)

export default connect( null, mapDispatchToProps )( Nav )

// export default Nav



//
// onst Home = props => (
//   <div>
//     <h1>Home</h1>
//     <p>Welcome home!</p>
//     <button onClick={() => props.changePage()}>Go to about page via redux</button>
//   </div>
// )
//
// const mapDispatchToProps = dispatch => bindActionCreators({
//   changePage: () => push('/about-us')
// }, dispatch)
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(Home)
