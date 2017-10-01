import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import CardListItem from './card_list_item';

class CardList extends Component {
  renderList() {
    // console.log('- - - - cardList - - - ');
    // console.log(this.props.cardList);
    return this.props.cardList.map((card) => {
      if (this.props.hiddenCells.indexOf(card.category) == -1)
        return (
          <CardListItem
            key = { card.title }
            cellType = { card.cellType }
            title = { card.title }
            pages = { card.pages }
            price = {card.price }
            category = { card.category }
            cardIssuer = { card.cardIssuer }
            onClick = { () => this.props.selectedBook(card) }
          />
        )
      else
        return (<div key = {card.title}></div>)
    })
  }
  render() {
    return (
      <div
        style = {{height: '2400px'}}
      >
      <ul
        className="list-group col-sm-12"
      >
        {this.renderList()}
      </ul>
      </div>
    )
  }
}

// Anything that comes out from this function ends up as props on the cardList container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  // This happens through the dispatch function. bindActionCreators makes so that this happens.
  return bindActionCreators({selectedBook: selectBook}, dispatch)
}

// Whatever will return will show up as props inside of cardList.
function mapStateToProps(state) {
  return {
    cardList: state.cardList,
    state: state, //se lo tolgo non ordina più
    hiddenCells: state.hiddenCells
  }
}
// Promote cardList from a Component to a container. It needs to know about this
// new dispatch method, selectBook. Make it available as props.
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
