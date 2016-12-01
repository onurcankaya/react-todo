module.exports = {
  setTodos: (todos) => {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: () => {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (err) {

    }

    return Array.isArray(todos) ? todos : [];
  }
};
