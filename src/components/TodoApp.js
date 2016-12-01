import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'uuid';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the house'
        },
        {
          id: uuid(),
          text: 'Wash the dishes'
        },
        {
          id: uuid(),
          text: 'Pimp the ride'
        }
      ]
    };
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text
        }
      ]
    });
  }

  render() {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}
