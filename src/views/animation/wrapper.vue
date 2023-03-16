<script setup>
import { ref, onMounted } from "vue";
</script>

<template>
  <nav>
    <RouterLink to="/animations/a-ball">A Ball</RouterLink>
    <RouterLink to="/animations/image-data">ImageData</RouterLink>
    <RouterLink to="/animations/invert-grayscale">Invert Grayscale</RouterLink>
    <RouterLink to="/animations/zoom-smoothing">Zoom Smoothing</RouterLink>
  </nav>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: rgb(255, 255, 255);
  width: 100%;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
