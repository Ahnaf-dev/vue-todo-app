<template>
    <ul>
      <li class="w-80 flex items-center mb-5" v-for="todo in todos" :key="todo.id">
        <span @click="toggleTodoStatus(todo)" :class="{ 'line-through': todo.completed, 'cursor-pointer': true }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" class="ml-auto text-red-500 border border-red-300 p-1 hover:bg-red-500 hover:text-white">Delete</button>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['todos'],
  methods: {
    toggleTodoStatus(todo) {
      this.$emit('toggle', todo);
    },
    removeTodo(id) {
      this.$emit('remove', id);
    },
  },
};
</script>
