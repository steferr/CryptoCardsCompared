import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import CardListItemCell from './card_list_item_cell'
// import ButtonFilterCategory from '../containers/button_filter_category'

class CardListItem extends Component {
  render() {
    // <Cancellami />
    return (
        <div style={container} key ={this.props.title} onClick = { this.props.onClick}
        >
          <CardListItemCell
            cellType={'title'}
            content={this.props.title}
            visible={true}
            style={Object.assign({}, interni, titolo)}
          />
          <CardListItemCell
          cellType={'cardIssuer'}
          content={this.props.cardIssuer}
          visible={true}
          style={Object.assign({}, interni, pagine)}
          />
          <CardListItemCell
          cellType={'pages'}
          content={this.props.pages}
          visible={true}
          style={Object.assign({}, interni, pagine)}
          />
          <CardListItemCell
            cellType={'category'}
            content={this.props.category}
            visible={true}
            style={Object.assign({}, interni, categoria)}
          />
          <CardListItemCell
            cellType={'price'}
            content={this.props.price}
            visible={true}
            style={Object.assign({}, interni, pagine)}
          />
        </div>
        // <div style={container} key ={this.props.title} onClick = { this.props.onClick}
        // >
        //   <div style={Object.assign({}, interni, titolo)}>
        //     {this.props.title}
        //   </div>
        //   <div style={Object.assign({}, interni, categoria)}>
        //     {this.props.category}
        //   </div>
        //   <div style={Object.assign({}, interni, pagine)}>
        //     {this.props.pages}
        //   </div>
        // </div>
    )
  }
}
const container = {
  cursor: 'pointer',
  width: '100%',
  border: '1px solid #e5e5e5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  margin: '8px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0px, 10px, 10px, #cccccc'
}

const interni = {
  fontSize: '13px',
  padding: '14px',
  margin: '0px 0px 0px 0px',
  textAlign: 'center',
  // border: '1px solid red',
}

const titolo = {
  fontSize: '18px',
  color: '#333',
  fontWeight: 'bold',
  width: '200px',
}

const categoria = {
  width: '120px',
}

const pagine = {
  width: '60px',
}
// // Anything that comes out from this function ends up as props on the cardList container.
// function mapDispatchToProps(dispatch) {
//   // Whenever selectBook is called, the result should be passed to all of our reducers.
//   // This happens through the dispatch function. bindActionCreators makes so that this happens.
//   return bindActionCreators({selectedBook: selectBook}, dispatch)
// }
//
// // Whatever will return will show up as props inside of cardList.
// function mapStateToProps(stato) {
//   return {
//     books: stato.books,
//     hiddenCells: stato.hiddenCells
//   }
// }
// Promote cardList from a Component to a container. It needs to know about this
// new dispatch method, selectBook. Make it available as props.
// export default connect(mapStateToProps, mapDispatchToProps)(cardListItem);
export default CardListItem
