import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems(state) {
      let total = 0;
      for (const item of state.items) {
        total += item.quantity;
      }
      return total;
    },

    totalPrice(state) {
      let total = 0;
      for (const item of state.items) {
        total += item.price * item.quantity;
      }
      return total;
    }
  },

  actions: {
    addToCart(product) {
      const index = this.findIndexInCart(this.items, product.id);

      if (index !== -1) {
        this.items[index].quantity++;
      } else {
        this.items.push({ 
          ...product, 
          quantity: 1,
          price: parseFloat(product.price) 
        });
      }
    },

    removeFromCart(productId) {
      const index = this.findIndexInCart(this.items, productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },

    updateQuantity(productId, quantity) {
      const index = this.findIndexInCart(this.items, productId);
      if (index !== -1) {
        this.items[index].quantity = Number(quantity);
      }
    },

    clearCart() {
      this.items = [];
    },

    findIndexInCart(items, id) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          return i;
        }
      }
      return -1;
    }
  }
});
