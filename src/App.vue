<template>
  <AppPreloader v-if="socket.pendingWebSocket && !socket.webSocketError" />

  <main class="main" v-else>
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>

  <AppFooter />

  <BaseModal v-model:open="userHasLoot">
    <LootModalContent v-model:open="userHasLoot" />
  </BaseModal>
</template>

<script setup lang="ts">
//@ts-ignore
import AppFooter from './components/footer/AppFooter.vue';
//@ts-ignore
import AppPreloader from './components/preloader/AppPreloader.vue';
//@ts-ignore
import BaseModal from './components/modals/BaseModal.vue';
//@ts-ignore
import LootModalContent from './components/modals/LootModalContent.vue';

import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useWebSocketStore } from './stores/useWebSocketStore';

const socket = useWebSocketStore();

const userHasLoot = ref(false);

watch(socket, async (value) => {
  // console.log(value.lootBox);
  if (value.lootBox?.balance.soft || value.lootBox?.balance.hard) {
    userHasLoot.value = true;
  }
});

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
