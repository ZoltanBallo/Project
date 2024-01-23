<template>
  <div id="app">
    <Navigacia />
    <router-view />
  </div>
</template>

<script>
import Navigacia from "@/components/Navigacia.vue";
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navigacia,
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fffffff7;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

nav {
  background-color: #000000;
  padding: 10px;
}

router-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

.active {
  font-weight: bold;
}
</style>