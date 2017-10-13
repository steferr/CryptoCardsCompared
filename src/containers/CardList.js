import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import CardListItem from './CardListItem';
import { GREY_LIGHT } from '../utilities/constants'
import { getHeightFilterExpanded } from '../utilities/styles'
class CardList extends Component {

  renderList() {
    // console.log('- - - - cardList - - - ');
    return this.props.visibleCards.map((card, index) => {
      // console.log(card.cardID);
      if (this.props.hiddenColumns.indexOf(card.columnID) == -1) {
        // const isEven = (i) => { return index % 2 == 0 }
        // // console.log(isEven(index));

        // offsetY = {this.props.offsetY}
        return (
          <CardListItem
            key = { card.cardID }
            card = {card}
            isEven = { index % 2 == 0 }
          />
        )
      }
      else
        return (<div key = {card.cardID}></div>)
    })
  }

  render() {
    // console.log(getHeightFilterExpanded());
// console.log(this.props.windowSize.width);

    return (
      <div
        style = {{
          // height: '2400px',
          width: '3896px',
          // marginRight:'16px',
          marginBottom: `${getHeightFilterExpanded(this.props.windowSize.width)+32}px`,
          position: 'relative',
          // top: '132px',
          zIndex: '-1',
          backgroundColor: GREY_LIGHT,
        }}
      >
        <ul
          style = {{
            padding: 0,
        }}>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    cardList: state.mainReducer.cardList,
    visibleCards: state.mainReducer.visibleCards,
    state: state.mainReducer, //se lo tolgo non ordina più
    hiddenColumns: state.mainReducer.hiddenColumns,
    windowSize: state.mainReducer.windowSize,
  }
}
export default connect(mapStateToProps)(CardList);
