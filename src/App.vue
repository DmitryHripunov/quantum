<template>
  <div class="container preloader" v-show="socket.pendingWebSocket">
    <span v-if="!socket.webSocketError">LOADING...</span>

    <span v-else>WEbSocket Connecter Error</span>
  </div>

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

onMounted(async () => {
  await socket.handleWebSocket();
});

onUnmounted(() => {
  socket.closeWebSocket();
});
</script>
