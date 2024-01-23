<template>
  <nav>
    <router-link to="/" :class="{ 'active': isRouteActive('/') }">Home</router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #333;
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
  