import React from 'react';
import './common.css';
import {connect} from 'react-redux';
import Level3Component from './level3_component';

const styles = {
  width: '100px',
  height: '100px'
}


class Level2Component extends React.Component {
  render() {
    return (
      <div>
        <div className = {this.props.activated?  "node-activated" :  "node-inactivated"} style = {styles}>
           <p className = "node-title">Level 2</p>
        </div>

        <div className = "child-container">
          <Level3Component/>
          <Level3Component/>
        </div>

      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return  { activated: state.lvl_2 };
}

export default connect(mapStateTopProps)(Level2Component);
