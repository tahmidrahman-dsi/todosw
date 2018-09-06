import React from 'react';
import './todo-list-item.css';

const ListItem = (props) => {
  return(
    <div>
      <div className = "todo-title">
        <p className = "todo-title-text">{props.item.title}</p>
      </div>

      <div className = "todo-body">
        <p className = "todo-body-text">{props.item.body}</p>
      </div>

        <button className = "button-delete-list-item" onClick = {() => props.onDeleteItem(props.item)}>
          <p style ={{ fontSize: 8}}>delete</p>
        </button>
    </div>
  );
}

export default ListItem;
