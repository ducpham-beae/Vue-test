<template>
  <div class="grid grid-cols-12 gap-4 border p-4 rounded-lg shadow-sm bg-white">
    <div class="col-span-8">
      <h3 class="text-lg font-semibold">{{ product.name }}</h3>
      <!-- <p class="text-gray-500 mb-4">{{ product.description }}</p> -->
      <p class="text-xl font-bold text-blue-600 mb-4">${{ product.price }}</p>
      <button @click="showDetail" class="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg">Show Detail</button>

    </div>
    <div class="col-span-4 flex flex-col gap-4">
      <img src="https://via.placeholder.com/600" alt="Product Image"
        class="w-auto aspect-[4/3] object-cover rounded-md" />
      <div class="relative shadow-lg">
        <button @click="addToCartHandler" class="bg-green-500 text-white py-2 px-4 rounded-md w-full  ease-linear duration-300">
          Add
        </button>
        <form action="" class="flex flex-row flex-wrap gap-2 ease-linear duration-300 absolute top-0 left-0 w-full opacity-0 pointer-events-none">
          <button type="button" class="w-[40px] h-[40px] shadow-sm mr-auto border rounded-md">-</button>
          <input type="text" class="flex-grow max-w-10 border rounded-md text-center" value="1">
          <button type="button" class="w-[40px] h-[40px] shadow-sm ml-auto border rounded-md">+</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  emits: ["show-detail", "add-to-cart"],
  setup(props, { emit }) {
    const showDetail = () => {
      emit("show-detail", props.product);
    };

    const addToCartHandler = () => {
      emit("add-to-cart", props.product);
    };

    return {
      showDetail,
      addToCartHandler,
    };
  },
};
</script>

<style scoped>
/* Style for individual product item */
</style>
