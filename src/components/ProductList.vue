<template>
  <div class="col-span-8 overflow-auto">
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
      { id: 5, name: "Product 5", description: "Description 5", price: 500 },
      { id: 6, name: "Product 6", description: "Description 6", price: 600 },
      { id: 7, name: "Product 7", description: "Description 7", price: 700 },
      { id: 8, name: "Product 8", description: "Description 8", price: 800 },
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
