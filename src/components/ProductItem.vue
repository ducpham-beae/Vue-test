<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  product: Object,
  state: Object,
  isAdd: Boolean
});
</script>
<template>
  <div class="grid grid-cols-12 gap-4 border-t p-4">
    <div class="col-span-8">
      <h3 class="text-xl font-semibold">{{ product.name }}</h3>
      <!-- <p class="text-gray-500 mb-4">{{ product.description }}</p> -->
      <p class="text-md text-black mb-3">${{ product.price }}</p>
      <button @click="props.state.showDetail(product)" class="text-blue-500">Show Detail</button>

    </div>
    <div class="col-span-4 flex flex-col gap-4">
      <img src="https://via.placeholder.com/600" alt="Product Image"
        class="w-auto aspect-[4/3] object-cover rounded-md shadow" />
      <div class="relative">
        <button v-if="!isAdd" @click="props.state.addToCart(product)" :data-id="product.id"
          class="font-bold uppercase bg-white text-green-500 py-2 px-4 rounded w-full shadow-lg ease-linear duration-300">
          Add
        </button>

        <form v-else @submit.prevent action=""
          class="flex flex-row flex-wrap gap-2 ease-linear duration-300">
          <button type="button" class="w-[40px] h-[40px] bg-white shadow-sm mr-auto border rounded minus" @click="(props.state.changeQuantity(product.id, $event))">-</button>
          <input type="text" class="flex-grow max-w-10 border rounded text-center" :value="product.quantity || 1" @keyup.enter="(props.state.updateQuantity(product.id, parseInt($event.target.value)))">
          <button type="button" class="w-[40px] h-[40px] bg-white shadow-sm ml-auto border rounded plus" @click="(props.state.changeQuantity(product.id, $event))">+</button>
        </form>
      </div>
    </div>
  </div>
</template>
