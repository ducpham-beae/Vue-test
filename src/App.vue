<template>
  <div class="min-h-screen grid grid-cols-12 gap-4 rounded-lg bg-gray-100 container m-auto">
    <ProductList @add-to-cart="handleAddToCart" />
    <Cart :cart="cart" />
  </div>
</template>

<script>
import { ref } from "vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

export default {
  components: {
    ProductList,
    Cart,
  },
  setup() {
    const cart = ref([]);

    const handleAddToCart = (product) => {
      const existingProduct = cart.value.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    return {
      cart,
      handleAddToCart,
    };
  },
};
</script>

<style scoped>
/* Global styles for App */
</style>
