<template>
    <v-container>
      <h1 class="text-center">Your Cart</h1>
      <div v-for="item in items" :key="item.id" class="my-2">
        <v-card class="d-flex">
          <v-card-text>
            <div>{{ item.name }}</div>
            <div>Quantity: {{ item.quantity }}</div>
            <div>Price: {{ item.price.toFixed(2) }}€</div>
            <div>Total: {{ (item.price * item.quantity).toFixed(2) }}€</div>
          </v-card-text>
          <v-img :src="`/img/${item.image}`" class="ma-3" height="100" width="100" contain></v-img>
          <v-card-actions class="ma-2">
            <v-btn icon @click="removeFromCart(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div v-if="totalItems > 0" class="text-h5 my-3">
        <div>Total Price: {{ totalPrice.toFixed(2) }}€</div>
        <v-btn color="primary" class="mt-3" @click="goToCheckout">Proceed to Checkout</v-btn>
      </div>
      <div v-else class="text-h5 my-3 text-center">Your cart is empty.</div>
    </v-container>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/cart';
  
  export default {
    name: 'Cart',
    data() {
      return {
        cartStore: useCartStore(),
      };
    },
    computed: {
      items() {
        return this.cartStore.items;
      },
      totalItems() {
        return this.cartStore.totalItems;
      },
      totalPrice() {
        return this.cartStore.totalPrice;
      }
    },
    methods: {
      removeFromCart(productId) {
        this.cartStore.removeFromCart(productId);
      },
      goToCheckout() {
        this.$router.push('/checkout');
      }
    }
  };
  </script>