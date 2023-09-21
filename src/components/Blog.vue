<script setup></script>
<template>
  <header>
    <h1>My Blog</h1>
    <p>Exploring the world one post at a time</p>
  </header>

  <div class="container">
    <div class="blog-post">
      <h2>Post Title 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo
        eu lorem bibendum ullamcorper. Vivamus in bibendum mauris.
      </p>
    </div>

    <div class="blog-post">
      <h2>Post Title 2</h2>
      <p>
        Phasellus nec lacus ac libero sollicitudin tincidunt. Integer ut
        consectetur lorem, vel tincidunt ex. Fusce consequat quam sit amet
        rhoncus.
      </p>
    </div>

    <div class="blog-post">
      <h2>Post Title 3</h2>
      <p>
        Suspendisse potenti. Fusce eget ullamcorper ligula. Etiam auctor nunc a
        arcu dictum, eget efficitur justo lacinia. Praesent vitae purus vitae
        leo dictum.
      </p>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.blog-post {
  margin-bottom: 30px;
}

.blog-post h2 {
  font-size: 24px;
  margin: 10px 0;
}

.blog-post p {
  line-height: 1.6;
}
</style>
