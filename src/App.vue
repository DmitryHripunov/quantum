<template>
  <AppPreloader />

  <main class="main">
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
//@ts-ignore
import AppFooter from './components/footer/AppFooter.vue';
//@ts-ignore
import AppPreloader from './components/preloader/AppPreloader.vue';
import { onMounted, onUnmounted } from 'vue';
import { useWebSocketStore } from './stores/useWebSocketStore';

const socket = useWebSocketStore();

const checkDocumentVisible = async () => {
  if (document.hidden) {
    socket.closeWebSocket();
  } else {
    await socket.handleWebSocket();
  }
};

onMounted(async () => {
  await socket.handleWebSocket();
  document.addEventListener('visibilitychange', checkDocumentVisible);
});

onUnmounted(() => {
  socket.closeWebSocket();
  document.removeEventListener('visibilitychange', checkDocumentVisible);
});
</script>
