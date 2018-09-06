import React from 'react';
import './common.css';
import {connect} from 'react-redux';
import Level2Component from './level2_component';

class Level1Component extends React.Component {
  render() {
    return (
      <div>
        <div className = "first-node">
          <div className = {this.props.activated?  "node-activated" :  "node-inactivated"}>
            <p className = "node-title">Level 1</p>
          </div>
        </div>
        <div className = "child-container" style = {{ flexDirection: 'row' }}>
          <Level2Component/>
          <Level2Component/>
        </div>

      </div>
    );
  }
}

const mapStateTopProps = (state) => {
  return  { activated: state.lvl_1 };
}

export default connect(mapStateTopProps)(Level1Component);
