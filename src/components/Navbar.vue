<template>
    <nav>
      <v-app-bar app color="indigo" dark>
        <v-toolbar-title class="text-h5">Printer E-Shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/products">Products</v-btn>
        <v-btn text to="/cart">
          Cart
          <v-badge color="red" :content="totalItems" offset-x="-10">
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </v-app-bar>
    </nav>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart';
  
  export default {
    name: 'Navbar',
    data() {
      return {
        totalItems: 0,
      };
    },
    mounted() {
      this.updateTotalItems();
      this.cartStore = useCartStore();
      this.cartStore.$subscribe(() => {
        this.updateTotalItems();
      });
    },
    methods: {
      updateTotalItems() {
        const cartStore = useCartStore();
        this.totalItems = cartStore.totalItems;
      },
    },
  };
  </script>
  