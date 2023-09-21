<script setup></script>
<template>
  <section class="text-lg font-bold">
    <ul class="flex space-x-5">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
      <li>
        <router-link to="/blog">Blogs</router-link>
      </li>
    </ul>
  </section>
</template>

<style scoped>
a {
  font-weight: bold;
}
</style>
