import React, { PureComponent } from 'react';
import OverLayComponent from './overlay-component';
import '../styles/ball-drop.css';

class BallDropComponent extends PureComponent {
  state = { mouseEntered: false };

  mouseEntered() {
    this.setState({ mouseEntered: true })
  }

  mouseRemoved() {
    this.setState({ mouseEntered: false })
  }
  
  render() {
    return (
      <div className = "stage"   onMouseOver = {this.mouseEntered.bind(this)} onMouseOut = {this.mouseRemoved.bind(this)}>
        <OverLayComponent displayText = "Hover to start animation" />
        <div className = {this.state.mouseEntered? "ball-hover" : "ball" }></div>
      </div>
    );
  }
}

export default BallDropComponent;
