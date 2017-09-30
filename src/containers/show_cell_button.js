import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { showCellType } from '../actions/index'
// import { hideCellType } from '../actions/index';

class ShowCellButton extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    // console.log(this.props);
    return(
      <div>
        <button onClick={() => this.props.showCellType(this.props.cellType)} style={normal}>
          {this.props.label}
        </button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({showCellType: showCellType }, dispatch)
}

function mapStateToProps(state) {
  return {
    hiddenCells: state.hiddenCells
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCellButton);

ShowCellButton.propTypes = {
  cellType: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};

const normal = {
  borderRadius: '100px',
  border: 'none',
  padding: '1px 4px',
  fontSize: '12px',
  color: 'grey',
  outline: 'none',
  backgroundColor: '#e5e5e5',
}
