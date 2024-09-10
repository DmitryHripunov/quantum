<template>
  <AppHeader />

  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/appHeader/AppHeader.vue';
import AppFooter from './components/appFooter/AppFooter.vue';
</script>
