<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import axios from "axios";
const products = ref([]);

onBeforeMount(() => {
  axios.get("https://dummyjson.com/products?limit=20").then((res) => {
    products.value = res.data.products;
  });
});
</script>
<template>
  <div class="px-5">
    <div
      class="mb-10 flex border-2 rounded"
      v-for="product in products"
      :key="product.id"
    >
      <p>
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <img :src="product.thumbnail" alt="" />
        </router-link>
      </p>
      <div class="p-3">
        <h1 class="text-xl mb-2 font-bold">
          <router-link
            class="font-bold"
            :to="{ name: 'product', params: { id: product.id } }"
            >{{ product.title }}</router-link
          >
        </h1>
        <div class="flex flex-col">
          <span>{{ product.description }}</span>
          <span><strong>Price: </strong>${{ product.price }}</span>
          <span
            ><strong>Discount: </strong>{{ product.discountPercentage }}%</span
          >
        </div>
        <div class="text-blue-400 font-bold py-2 rounded cursor-pointer">
          <router-link
            class="font-bold"
            :to="{ name: 'product', params: { id: product.id } }"
            >View Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  min-width: 250px;
  max-width: 300px;
  height: 200px;
  border-radius: 5px;
}
</style>
