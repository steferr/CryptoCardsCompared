import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showColumn } from '../actions/index'
import PropTypes from 'prop-types';
import { PRIMARY } from '../utilities/constants'

class ShowColumnButton extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    // console.log(this.props.showColumn);
//
    return(
      <div>
        <button style={normal}>
          Show
        </button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({showColumn: showColumn }, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowColumnButton);

ShowColumnButton.propTypes = {
  columnID: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};

const normal = {
  // borderRadius: '100px',
  border: 'none',
  padding: '1px 4px',
  fontSize: '12px',
  color: PRIMARY,
  outline: 'none',
  backgroundColor: '#fff',
  cursor: 'pointer',
}
