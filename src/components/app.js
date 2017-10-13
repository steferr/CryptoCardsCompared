import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateWindowSize } from '../actions/index'
import { bindActionCreators } from 'redux';
import Nav from './nav';
import Home from '../components/Home'
import Filters from './Filters'
import HiddenColumns from '../containers/HiddenColumns'
import TransitionMotionTest from './animations/TransitionMotionTest'
import RedBar from './animations/RedBar'
import MotionTest from './animations/MotionTest'
import { Route, Link } from 'react-router-dom'
import About from './about'

class App extends Component {

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  // le seguenti 3 funzioni servono per ridimensionare correttamente le barre
  // di scorrimento. dimensione del viewport tramite this.state
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    // this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.props.updateWindowSize(window.innerWidth, window.innerHeight)
  }
  // <BookDetail />
  render() {
    // console.log(window.innerHeight);
    // console.log(this.props);
    // const altezzaHeader = 60+80+72
    // let {'cacca', 'pipi', {key1: 1, key2: 2}} = this.eventPreviousValues;
    // console.log('merda');
    // let innerWidth = window.innerWidth
    // console.log(this.props.state);
    // <header>
    // <Link to="/">Home</Link>
    // <Link to="/about">About</Link>
    // </header>

    return (
      <div>
      <Nav windowSize = {this.props.windowSize}/>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/motion" component={MotionTest} />
      <Route path="/blue" component={TransitionMotionTest} />
      <Route path="/red" component={RedBar} />


      </div>
    );
  }
}
// <Filters />
// <ScrollContainer />
//
// <HiddenColumns />
// <MotionTest />
// <TransitionMotionTest />



function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateWindowSize: updateWindowSize }, dispatch)
}

function mapStateToProps(state) {
  return {
    windowSize: state.mainReducer.windowSize,
    state: state //if i remove this the routing doesn't work anymore
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




// import React from 'react';
// import { Route, Link } from 'react-router-dom'
// import Nav from './Nav'
// import ButtonPrimary from './ButtonPrimary'
//
// const App = () => (
//   <div>
//     <div>
//     <header>
//     <Link to="/">Nav</Link>
//     <Link to="/button">ButtonPrimary</Link>
//     </header>
//
//     <main>
//     <Route exact path="/" component={Nav} />
//     <Route exact path="/button" component={ButtonPrimary} />
//     </main>
//     </div>
//   </div>
// )
// // <h1>dio merda</h1>
//
// export default App


// <h1>AFFASOIVJLKN</h1>
// <div style = {{
//   // position: 'relative',
//   // overflow: 'auto',
//   // width: '100%',
//   // height: '100%'
// }}>
// <CardList />
// </div>



// <ScrollBarSte direction = 'horizontal' length = {window.innerWidth - 32}/>
// <ScrollArea
// vertical = { true }
// stopScrollPropagation = { false }
// smoothScrolling = { true }
// style = {{
//   border: '1px solid red',
//   touchAction: 'manipulation',
//   display: 'block',
//   height: `${window.innerHeight-220}px`,
//   // position: 'absolute',
//   // top: '210px',
//   marginTop: '210px',
//   // zIndex: '-1',
// }}
// contentStyle = {{
//   width: '3500px',
//   // height: '300px',
// }}
// horizontalContainerStyle = {{
//   opacity: '.6',
//   height: '16px',
//   borderRadius: '100px',
//   backgroundColor: '#eee',
//   backdropFilter: 'blur(2px)',
//   marginRight: '30px',
//   width: `${window.innerWidth-(16*4)}px`,
//   position: 'fixed',
//   bottom: '16px',
//   left: '16px',
// }}
// horizontalScrollbarStyle = {{
//   backgroundColor: '#aaa',
//   borderRadius: '100px',
//   opacity: '1',
//   height: '16px',
// }}
// >
// <SortBar />
// <CardList />
// </ScrollArea>



// <div style={{ position: 'relative', top: '210px', background: '#F86738', width: '100%', height: '2000px'}}>
// </div>





// <SimpleExample></SimpleExample>

// vertical = { true }
// const scrollAreaStyle = {
//   // height: '2000px',
//   // width: '100%',
//
//   // height: `${App.state.height-altezzaHeader}px`,
//   // overflow: 'hidden',
// }
//
// const scrollContentStyle = {
//   // width: '1600px',
//
// }
//
// const verticalContainerStyle={
// }
//
// const verticalScrollbarStyle = {
// }
//
// const horizontalContainerStyle={
//
// }
//
// const horizontalScrollbarStyle = {
//
// }


// <h4>hide </h4>
// <div style={{display: 'flex'}}>
// <ButtonFilterCategory categoria='development'/>
// <ButtonFilterCategory categoria='action'/>
// <ButtonFilterCategory categoria='comedy'/>
// </div>
