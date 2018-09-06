import React, { Component } from 'react';
import '../styles/listItem.css';

const ListItem = ({ item }) => {
  return (
    <div className = "list-item-body">
      <p className = "list-item-text">{item}</p>
      <div className = "seperator" />
    </div>
  );
}

class List extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        { data.map( (item,id) => <ListItem item = { item } key = { item.toString() } /> ) }
      </div>
    );
  }

}

export default List;
