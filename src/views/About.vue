<template>
    <app-header />
  <div class="container mx-auto mt-8">
    <h2 class="text-2xl font-bold mt-4">About This App</h2>
    <p class="mt-2">
      This is a simple To-Do List app built with Vue.js 3, Tailwind CSS, Vue Router, and Vuex for state management.
    </p>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>
