import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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

  handleAddTodo(text) {
    alert('new todo: ' + text);
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}
