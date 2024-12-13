<script setup>
const props = defineProps({
  cart: Array,
  total: String,
  count: String,
  update: Function,
  clear: Function
});
</script>
<template>
  <div class="col-span-4">
    <div class="rounded-lg text-black p-4 sticky top-4">
      <h3 class="text-xl font-semibold mb-4">Cart</h3>
      <div v-if="cart.length" class="flex items-center gap-2 mb-4">
        <span class="uppercase">{{props.count}} </span>
        <span class="ml-auto text-blue-500 flex " @click="props.clear">
          Reset
          <svg class="w-[24px] h-[24px]" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z" fill-rule="nonzero"/></svg>
        </span>
      </div>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div v-for="item in props.cart" :key="item.id" class="relative flex flex-col justify-start items-start p-2 bg-white rounded-lg border-2 border-dashed">
          <img :src="item.src || 'https://via.placeholder.com/600'" :alt="item.name" class="w-full aspect-square object-cover rounded-md m-auto" />
          <!-- <div class="flex items-center space-x-2">
            <input v-model="" type="number" min="0" class="w-12 p-1 text-center border rounded" />
          </div> -->
          <div class="flex w-full mt-2">
            <span class="mr-auto">{{ item.name }}</span>
            <span class="ml-auto text-gray-500">x{{ item.quantity }}</span>
          </div>

          <button class="bg-gray-500 hover:bg-red-500 ease-linear transition-300 text-white p-2 w-[32px] h-[32px] fill-white rounded absolute right-1 top-1"
            @click="props.update(item.id, 0)">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                fill-rule="nonzero" />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span>Total: </span>
        <span class="font-bold text-red-500">{{ total }}</span>
      </div>
    </div>
  </div>
</template>
