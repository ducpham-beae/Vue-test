<template>
  <div :class="['relative top-0 left-0 w-full bg-white p-4 mb-4 shadow-lg z-10 rounded-lg border overflow-auto', { 'hidden': isClosed }]">
    <div class="grid gap-4 grid-cols-2 h-full">
      <div class="flex">
        <img :src="product.src || 'https://via.placeholder.com/600'" :alt="product.name" class="w-full aspect-[4/3] object-cover rounded-md m-auto" />
      </div>
      <div>
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-gray-500 mb-4">{{ product.description }}</p>
        <p class="text-xl font-bold text-blue-600 mb-4">${{ product.price }}</p>
      </div>
    </div>

    <!-- <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold">{{ product.name }}</h2>
      <p class="text-gray-700">{{ product.description }}</p>
      <p class="text-xl font-semibold text-blue-600">${{ product.price }}</p>
      <button @click="closeDetail" class="mt-4 text-red-500">Close</button>
    </div> -->
  </div>
</template>

<script>

export default {
  props: {
    product: Object,
  },
  setup(props) {


    const closeDetail = () => {
      props.product = null;
    };

    return {
      closeDetail,
    };
  },
};
</script>

<style scoped>
/* Style for product detail modal */
</style>
