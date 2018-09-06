import React from 'react';
import './common.css';
import {connect} from 'react-redux';
import Level5Component from './level5_component';

const styles = {
  width: '100px',
  height: '100px'
}

class Level4Component extends React.Component {
  render() {
    return (
      <div>
        <div className = {this.props.activated?  "node-activated" :  "node-inactivated"} style = {styles}>
           <p className = "node-title">Level 4</p>
        </div>

        <div className = "child-container">
          <Level5Component/>
          <Level5Component/>
        </div>

      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return  { activated: state.lvl_4 };
}

export default connect(mapStateTopProps)(Level4Component);
