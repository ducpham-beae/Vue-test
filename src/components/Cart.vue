<script setup>
const props = defineProps({
  cart: Array,
  total: String,
  update: Function
});
</script>
<template>
  <div class="col-span-4">
    <div class="rounded-lg text-black p-4 sticky top-4">
      <h3 class="text-xl font-semibold">Cart</h3>
      <div v-for="item in props.cart" :key="item.id" :item="item" class="flex items-center justify-between mb-2">
        <span>{{ item.name }}</span>
        <div class="flex items-center space-x-2">
          <input v-model="item.quantity" type="number" min="0" class="w-12 p-1 text-center border rounded" />
          <button class="bg-red-500 text-white px-2 py-1 rounded-full" @click="props.update(item.id, 0)">
            Remove
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <span>Total: {{total}}</span>
        <span class="font-bold"></span>
      </div>
    </div>
  </div>
</template>
