<template>
  <div class="container preloader" v-show="socket.preloading">LOADING...</div>

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
import { onMounted, onUnmounted } from 'vue';
import { useWebSocketStore } from './stores/useWebSocketStore';

const socket = useWebSocketStore();

const visibilitychange = async () => {
  if (document.hidden) {
    socket.closeWebSocket();
  } else {
    await socket.handleWebSocket();
  }
};

onMounted(async () => {
  await socket.handleWebSocket();
  document.addEventListener('visibilitychange', visibilitychange);
});

onUnmounted(() => {
  socket.closeWebSocket();
  document.removeEventListener('visibilitychange', visibilitychange);
});
</script>
