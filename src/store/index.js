import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  mutations: {
    ADD_TODO(state, todoText) {
      const newTodo = {
        id: state.todos.length + 1,
        text: todoText,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));

    },
    TOGGLE_TODO(state, todo) {
      todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(state.todos));

    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(state.todos));

    },
  },
});
