import React from 'react';
import './common.css';
import {connect} from 'react-redux';
import Level4Component from './level4_component';

const styles = {
  width: '100px',
  height: '100px'
}

class Level3Component extends React.Component {
  render() {
    return (
      <div>
        <div className = {this.props.activated?  "node-activated" :  "node-inactivated"} style = {styles}>
           <p className = "node-title">Level 3</p>
        </div>

        <div className = "child-container">
          <Level4Component/>
          <Level4Component/>
        </div>

      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return  { activated: state.lvl_3 };
}

export default connect(mapStateTopProps)(Level3Component);
