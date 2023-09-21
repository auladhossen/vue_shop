//create home component
<script setup>
import { useRoute } from "vue-router";
import { ref, reactive, onBeforeMount } from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id;
const product = reactive({});

onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
    product.id = res.data.id;
    product.title = res.data.title;
    product.description = res.data.description;
    product.thumbnail = res.data.thumbnail;
    product.brand = res.data.brand;
    product.category = res.data.category;
    product.rating = res.data.rating;
    product.discountPercentage = res.data.discountPercentage;
  });
});
</script>
<template>
  <div class="mb-10 flex border-2 rounded">
    <div>
      <img :src="product.thumbnail" alt="" />
    </div>
    <div class="p-3">
      <h1 class="text-xl mb-2 font-bold">
        {{ product.title }}
      </h1>
      <p>
        {{ product.description }}
      </p>
      <p><strong>Brand: </strong>{{ product.brand }}</p>
      <p><strong>Rating: </strong>{{ product.rating }}</p>
      <p><strong>Discount: </strong>{{ product.discountPercentage }}</p>
      <p><strong>Category: </strong>{{ product.category }}</p>
    </div>
  </div>
</template>

<style></style>
