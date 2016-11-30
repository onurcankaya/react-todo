import React, { Component } from 'react';
import TodoList from 'TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the house'
        },
        {
          id: 3,
          text: 'Wash the dishes'
        },
        {
          id: 4,
          text: 'Pimp the ride'
        }
      ]
    };
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}
