<template>
  <div class="col-span-4">
    <div class="bg-gray-700 rounded-lg text-white p-4 sticky top-4">
      <h3 class="text-xl font-semibold">Cart</h3>
      <div v-for="(item, index) in cart" :key="index" class="flex items-center justify-between mb-2">
        <span>{{ item.name }}</span>
        <div class="flex items-center space-x-2">
          <input v-model="item.quantity" type="number" min="0" class="w-12 p-1 text-center border rounded" />
          <button @click="removeFromCart(index)" class="bg-red-500 text-white px-2 py-1 rounded-full">
            Remove
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span>Total:</span>
        <span class="font-bold">{{ total }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    cart: Array,
  },
  setup(props, { emit }) {
    const removeFromCart = (index) => {
      props.cart.splice(index, 1);
    };

    const total = computed(() => {
      return props.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    });

    return {
      removeFromCart,
      total,
    };
  },
};
</script>

<style scoped>
/* Style for cart */
</style>
