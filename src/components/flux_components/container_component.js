import React, { Component } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import '../../styles/flux-test.css';
import Level1Component from './level1_component';

class FluxTestComponent extends Component {
  _dispatchAction1() {
    store.dispatch({ type: 'lvl_1'});
  }

  _dispatchAction2() {
    store.dispatch({ type: 'lvl_2'});
  }

  _dispatchAction3() {
    store.dispatch({ type: 'lvl_3'});
  }

  _dispatchAction4() {
    store.dispatch({ type: 'lvl_4'});
  }

  _dispatchAction5() {
    store.dispatch({ type: 'lvl_5'});
  }


  render() {
    return (
      <Provider store = {store}>
        <div className = "container-flux">
          <p id = "title">Class Hierarchy Tree</p>

          <div className = "dispatcher-button-container">
            <h3>Activate all nodes in </h3>
            <button onClick = {this._dispatchAction1.bind(this)}>Level 1</button>
            <button onClick = {this._dispatchAction2.bind(this)}>Level 2</button>
            <button onClick = {this._dispatchAction3.bind(this)}>Level 3</button>
            <button onClick = {this._dispatchAction4.bind(this)}>Level 4</button>
            <button onClick = {this._dispatchAction5.bind(this)}>Level 5</button>
          </div>

          <div className = "tree-container">
            <Level1Component/>
          </div>

        </div>
      </Provider>
    );
  }
}

export default FluxTestComponent;
