<template>
    <div>
      <button @click="counterStore.increment">+</button>
      <span>{{ counterStore.count }}</span>
      <button @click="counterStore.decrement">-</button>
    </div>
  </template>
  
  <script>
  import { useCounterStore } from './store/counter';
  
  export default {
    setup() {
      const counterStore = useCounterStore();
      return { counterStore };
    },
  };
  </script>