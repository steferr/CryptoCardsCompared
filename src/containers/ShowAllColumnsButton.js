import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllColumns } from '../actions/index'
import PropTypes from 'prop-types';
import { PRIMARY } from '../utilities/constants'
import { primaryButtonStyle } from '../utilities/styles'

class ShowAllColumnsButton extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    // console.log(this.props.showColumn);
//
    return(
        <button onClick={() => this.props.showAllColumns()} style={Object.assign({}, primaryButtonStyle, container)}>
          <div style= {text}>ShowAll</div>
        </button>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({showAllColumns: showAllColumns }, dispatch)
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllColumnsButton);

ShowAllColumnsButton.propTypes = {
  columnID: PropTypes.string,
  label: PropTypes.string,
  // active: PropTypes.bool
};
const text = {
  color: '#fff',
}
const container = {
  // borderRadius: '100px',
  // border: 'none',
  // padding: '0px 32px',
  // margin: 'auto',
  alignSelf: 'stretch',
  margin: '12px 16px',
  // width: '120px',
  // textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
  // fontSize: '14px',
  // textTransform: 'uppercase',
  // color: 'red',
  // // outline: 'none',
  // backgroundColor: 'yellow',
  // cursor: 'pointer',
}
