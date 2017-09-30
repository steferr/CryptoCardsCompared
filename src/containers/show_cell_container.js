import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCellButton from './show_cell_button';

class ShowCellContainer extends Component {
  constructor (props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }
  renderList() {
    return this.props.hiddenCells.map((cellType) => {
      // // console.log('- - renderList');
      // // console.log(cellType);
      return (
        <ShowCellButton
          cellType={cellType}
          label={cellType}
        />
      )
    })
  }

  // renderList() {
  //   return this.props.cardList.map((card) => {
  //       return (
  //         <CardListItem
  //           key = { card.title }
  //           cellType = { card.cellType }
  //           title = { card.title }
  //           pages = { card.pages }
  //           price = {card.price }
  //           category = { card.category }
  //           onClick = { () => this.props.selectedBook(card) }
  //         />
  //       )
  //   })
  // }

  render() {
    // console.log(' - - - ShowCellContainer - - - ');
    // console.log('this.props.hiddenCells')
    // console.log(this.props.hiddenCells)
    //hides the container when there are no hidden Cells
    if (this.props.hiddenCells.length == 0)
      return <div></div>
    else {
    // console.log('this.renderList()');
    // console.log(this.renderList());
    // console.log('this.renderList');
    // console.log(this.renderList);
    return (
      <div style={showCellContainerStyle}>
      {this.renderList()}
      </div>
    )
    }
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({hideCellType: hideCellType }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenCells: state.hiddenCells
  }
}

export default connect(mapStateToProps)(ShowCellContainer);

ShowCellContainer.propTypes = {
  cellType: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};

const showCellContainerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#fff',
  border: '1px solid #eee',
  padding: '20px',

}
