<template>
  <div class="col-span-8 p-4 overflow-auto">
    <ProductDetail :product="selectedProduct" v-if="selectedProduct" />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @show-detail="showProductDetail"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProductItem from "./ProductItem.vue";
import ProductDetail from "./ProductDetail.vue";

export default {
  components: {
    ProductItem,
    ProductDetail,
  },
  setup() {
    const products = ref([
      { id: 1, name: "Product 1", description: "Description 1", price: 100 },
      { id: 2, name: "Product 2", description: "Description 2", price: 200 },
      { id: 3, name: "Product 3", description: "Description 3", price: 300 },
      { id: 4, name: "Product 4", description: "Description 4", price: 400 },
    ]);

    const selectedProduct = ref(null);

    const showProductDetail = (product) => {
      selectedProduct.value = product;
    };

    const addToCart = (product) => {
      console.log("Added to cart:", product);
    };

    return {
      products,
      selectedProduct,
      showProductDetail,
      addToCart,
    };
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
