import React from 'react';
import ListItem from './todo-list-item';

class TodoList extends React.Component {
  state = { listData: [] };
  url = 'http://localhost:3004/todos';

  render() {
    return (
      <div ref = {element => this.todoRoot = element}>
        {this.renderTodoList()}
      </div>
    );
  }


  componentDidMount() {
    this._fetchJSONfromApi();
    //this.onewWayCommunication();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.submitted) {
      this._fetchJSONfromApi();
    }
  }

  onewWayCommunication() {
    //ONE WAY COMMUNICATION
    navigator.serviceWorker.ready.then( worker => {
      worker.postMessage({
        "message": "Hello from script",
        "command": "oneWayCommunication"
      });
    })
    
  }

  onRemoveItem(item) {
    this.deleteItem(item);
  }

  async deleteItem(item) {
    await fetch(this.url+'/'+item.id, {
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      }
    }).then(response => {
      response.json().then( value => {
        this._fetchJSONfromApi();
      });
    })
  }

  renderTodoList() {
    return this.state.listData.length>0?this.state.listData.map(item => <ListItem key = {item.id} item = { item} onDeleteItem = {(item) => this.onRemoveItem(item)}/>):null;
  }


 async _fetchJSONfromApi() {
    await fetch(this.url)
    .then(response => {
      response.json().then( value => {
        this.setState({ listData: value });
        this.props.listReloaded();
      });
    });
  }
}

export default TodoList;
