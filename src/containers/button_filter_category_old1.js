import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showCategory, hideCategory } from '../actions/index';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class ButtonFilterCategory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: true
    }
    this.onButtonClick = this.onButtonClick.bind(this)
    this.isPartofhiddenCells = this.isPartofhiddenCells.bind(this)
  }
  isPartofhiddenCells() {
    //controllo se la categoria è presente nelle hiddenCells dello stato
    // // console.log('this.props.state.hiddenCells from button filter category');
    // // console.log(this.props.state.hiddenCells);
    return this.props.state.hiddenCells.indexOf(this.props.categoria)
  }
  onButtonClick() {
    // // console.log(this.isPartofhiddenCells());
    // var indice = this.props.state.hiddenCells.indexOf(this.props.categoria)
    // se non è presente allora la aggiungo
    if (this.isPartofhiddenCells() == -1) {

      this.props.nascondiCategoria(this.props.categoria);
      // // console.log(this.props.state.hiddenCells);
    }
    //altrimenti la rimuovo
    else
    this.props.vediCategoria(this.props.categoria);
  }
  render() {
    // var isHidden = this.props.state.hiddenCells.indexOf(this.props.categoria)
    if ( this.isPartofhiddenCells() !== -1) {
      var stilePulsante = normal
      var descrizione = <p>nascosto</p>
    }
    else {
      var stilePulsante = hidden
      var descrizione = <p>visibile</p>
    }
    return (
      <div>
      <button onClick={() => this.onButtonClick()} style={stilePulsante}>{this.props.categoria}</button>
      {descrizione}
      </div>
    )
  }
}
const hidden = {
  borderRadius: '100px',
  border: 'none',
  padding: '4px 20px',
  display: 'block',
  outline: 'none',
}

const normal = {
  borderRadius: '100px',
  border: 'none',
  padding: '4px 20px',
  color: 'grey',
  outline: 'none',
  backgroundColor: '#e5e5e5',
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({vediCategoria: showCategory, nascondiCategoria: hideCategory }, dispatch)
}

function mapStateToProps(stato) {
  return {
    state: stato
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilterCategory);

ButtonFilterCategory.propTypes = {
  categoria: PropTypes.string,
  // active: PropTypes.bool
};
