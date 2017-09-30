import React, {Component} from 'react';
import { connect } from 'react-redux';
import { hideCellType } from '../actions/index';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class HideCellType extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
      <button onClick={() => this.props.hideCellType(this.props.cellType)} style={normal}>
        {this.props.label}
      </button>
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
  padding: '1px 4px',
  fontSize: '12px',
  color: 'grey',
  outline: 'none',
  backgroundColor: '#e5e5e5',
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({hideCellType: hideCellType }, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HideCellType);

HideCellType.propTypes = {
  cellType: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};
