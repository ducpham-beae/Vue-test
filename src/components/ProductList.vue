<script setup>
import ProductItem from './ProductItem.vue';

import { reactive, defineProps } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  state: Object
});
</script>

<template>
  <div class="col-span-8 overflow-auto">
    <!-- <ProductDetail :product="selectedProduct" v-if="selectedProduct" /> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-h-screen">
      <ProductItem v-for="product in products" :key="product.id" :product="product" :state="state" :isAdd="state.cart.some(item => item.id === product.id)"  class="grid grid-cols-12 gap-4 border-t p-4"/>
    </div>
  </div>
</template>
