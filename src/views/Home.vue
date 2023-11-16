<template>
    <app-header />
    <section class="container mx-auto pt-8 pb-8 flex items-center justify-center flex-col">
    <add-todo @add="addTodo" />
    <todo-list :todos="todos" @toggle="toggleTodo" @remove="removeTodo" />
    
    </section>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AddTodo,
    TodoList,
    AppHeader,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo(newTodo) {
      this.$store.commit('ADD_TODO', newTodo);
    },
    toggleTodo(todo) {
      this.$store.commit('TOGGLE_TODO', todo);
    },
    removeTodo(todoId) {
      this.$store.commit('REMOVE_TODO', todoId);
    },
  },
};
</script>
