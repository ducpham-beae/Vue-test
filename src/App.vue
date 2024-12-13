<script setup>
import { reactive, computed } from "vue";
import productData from '@/products.json';
import ProductList from "./components/ProductList.vue";
import ProductDetail from "./components/ProductDetail.vue";
import Cart from "./components/Cart.vue";

const state = reactive({
  products: productData,
  cart: [],
  selectedProduct: productData[0],

  // findInCart: (id) => {
  //   return state.cart.find(item => item.id === id);
  // },
  findIndexInCart: (id) => {
    return state.cart.findIndex(item => item.id === id)
  },
  addToCart: (product) => {
    const existingPosition = state.findIndexInCart(product.id);
    if (existingPosition > -1) {
      state.cart[existingPosition].quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  },
  showDetail: (product) => {
    state.selectedProduct = product
  },
  updateQuantity: (id, quantity) => {
    if (Number.isNaN(quantity)) {
      quantity = 0;
      //return;
    }
    const existingPosition = state.findIndexInCart(id);
    if(quantity <= 0 && existingPosition > -1){
      state.cart.splice(state.findIndexInCart(id), 1);
    } else {
      state.cart[existingPosition].quantity = quantity;
    }
  },
  changeQuantity: (id, event) => {
    let parent = event.target.closest('form');
    let input = parent.querySelector('input');
    if(event.target.classList.contains('plus')){
      input.value = parseInt(input.value) + 1;
    } else {
      input.value = parseInt(input.value) - 1;
    }
    state.updateQuantity(id, input.value)
  },
  clear: () => {
    state.cart = []
  },
  // total: () => {
  //   return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // },
  // count: () => {
  //   return `${state.cart.length}/${state.products.length} Added`
  // }
});

const total = computed(() => {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const count = computed(() => {
  return `${state.cart.length}/${state.products.length} Added`;
});
</script>

<template>
  <div class="min-h-screen grid grid-cols-12  gap-4 p-4 rounded-lg bg-gray-50 container m-auto">
    <ProductDetail :product="state.selectedProduct" v-if="state.selectedProduct" />
    <ProductList :products="state.products" :state="state" />
    <Cart :cart="state.cart" :total="total" :update="state.updateQuantity" :clear="state.clear" :count="count"/>
  </div>
</template>
