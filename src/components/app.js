import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';
// import ScrollArea from './scroll_area';
import Nav from './nav';
import CardList from '../containers/card_list';
import BookDetail from '../containers/active_book'
// import ButtonFilterCategory from '../containers/button_filter_category'
import SortBar from '../containers/sort_bar'
import Filters from '../containers/filters'
import CardListItemCell from '../containers/card_list_item_cell'
import ShowCellContainer from '../containers/show_cell_container'
// import ScrollArea from './scroll_area';
// import SimpleExample from './simple_example'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  // <BookDetail />
  render() {
    // console.log(window.innerHeight);
    const altezzaHeader = 60+80+72
    // let {'cacca', 'pipi', {key1: 1, key2: 2}} = this.eventPreviousValues;
    // console.log('merda');
    return (
      <div>
        <Nav />
        <div>
          <ShowCellContainer />
        </div>
        <div>
          <Filters />
        </div>
        <ScrollArea
        vertical = { true }
        stopScrollPropagation = { false }
        style = {{
          border: '1px solid red',
          touchAction: 'manipulation',
          display: 'block',
          height: '300px',
          // position: 'absolute',
          // top: '210px',
          marginTop: '210px',
          // zIndex: '-1',
        }}
        contentStyle = {{
          width: '3500px',
          // height: '300px',
        }}
        horizontalContainerStyle = {{
          opacity: '.6',
          height: '16px',
          borderRadius: '100px',
          backgroundColor: '#eee',
          backdropFilter: 'blur(2px)',
          marginRight: '30px',
          width: `${window.innerWidth-(16*4)}px`,
          position: 'fixed',
          bottom: '16px',
          left: '16px',
        }}
        horizontalScrollbarStyle = {{
          backgroundColor: '#aaa',
          borderRadius: '100px',
          opacity: '1',
          height: '16px',
        }}
        >
        <SortBar />
        <CardList />
        </ScrollArea>
        </div>
    );
  }
}
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
