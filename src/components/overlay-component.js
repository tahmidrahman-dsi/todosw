import React, { PureComponent } from 'react';
import '../styles/overlay-component.css';

class OverLayComponent extends PureComponent {
  render() {
    return (
      <div className = "container">
        <h1>{this.props.displayText}</h1>
      </div>
    );
  }
}

export default OverLayComponent;
