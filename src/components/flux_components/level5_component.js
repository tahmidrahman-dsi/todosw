import React from 'react';
import './common.css';
import {connect} from 'react-redux';

const styles = {
  width: '50px',
  height: '50px'
}

class Level5Component extends React.Component {
  render() {
    return (
      <div>
        <div className = {this.props.activated?  "node-activated" :  "node-inactivated"} style = {styles}>
           <p className = "node-title">Level 5</p>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return  { activated: state.lvl_5 };
}

export default connect(mapStateTopProps)(Level5Component);
