<template>
    <h2 class="text-2xl font-bold mb-4">To-Do List</h2>

  <div class="mt-4 mb-4">
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task... (Press Enter To Add)" class="p-2 border rounded w-80">
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$emit('add', this.newTodo.trim());
        this.newTodo = '';
      }
    },
  },
};
</script>
