import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CardListItemCell extends Component {
  render() {
    // // console.log(this.props);
    // {this.props.content}
    // console.log('this.props.hiddenCells');
    // console.log(this.props.hiddenCells);
    // console.log('this.props.cellType');
    // console.log(this.props.cellType);
    // console.log('this.props.hiddenCells.includes(this.props.cellType)');
    // console.log(this.props.hiddenCells.includes(this.props.cellType));

    if (this.props.hiddenCells.includes(this.props.cellType))
      return <div></div>
    // var togliSeUguale = (value) => {
    //   return value != action.payload;
    // }
    // // console.log(Object.assign({}, state, {hiddenCells: state.hiddenCells.filter(togliSeUguale)}
    else {
    return (
        <div style={this.props.style} >
          {this.props.content}
        </div>

    )}
  }
}
// export default CardListItemCell

function mapStateToProps(state) {
  return {
    hiddenCells: state.hiddenCells
  }
}

export default connect(mapStateToProps)(CardListItemCell);

CardListItemCell.propTypes = {
  cellType: PropTypes.string,
  visible: PropTypes.bool,
  content: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  // active: PropTypes.bool
};



//
// const interni = {
//   fontSize: '13px',
//   padding: '14px',
//   margin: '0px 0px 0px 0px',
//   textAlign: 'center',
//   // border: '1px solid red',
// }
//
// const titolo = {
//   fontSize: '18px',
//   color: '#333',
//   fontWeight: 'bold',
//   width: '200px',
// }
//
// const categoria = {
//   width: '120px',
// }
//
// const pagine = {
//   width: '60px',
// }
