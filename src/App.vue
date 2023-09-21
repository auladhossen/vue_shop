<script setup></script>

<template>
  <header
    class="bg-white border-b-light-100 border-b h-20 flex px-5 py-4 drop-shadow-sm sticky top-0 left-0 z-50 text-2xl"
  >
    <div class="flex w-full justify-between">
      <div class="font-bold text-blue-500">E.Shop</div>
      <div><router-view name="SideBar"></router-view></div>
    </div>
  </header>
  <section>
    <main class="p-5 w-full">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped></style>
