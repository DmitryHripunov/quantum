<template>
  <div class="modal__content modal__content--loot">
    <h2 class="modal__title">Take the prize</h2>

    <div class="modal__bg"></div>

    <img class="modal__img-chests" width="170" height="150" src="/img/chests.png" alt="chests" />

    <p class="modal__desc">You received</p>

    <div class="modal__balance">
      <AppBalance
        :balanceType="socket.lootBox?.balance?.soft ? 'soft' : 'hard'"
        :imgWidth="39"
        :imgHeight="39"
        :fontSize="'32px'"
        :fontWeight="700"
        :color="'var(--color-white)'"
        :balance="prettyBalance"
      />
    </div>

    <button class="modal__btn-get" @click="makeCloseModal">GET</button>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { computed } from 'vue';
//@ts-ignore
import AppBalance from '../balance/AppBalance.vue';

import { useWebSocketStore } from '../../stores/useWebSocketStore';

const socket = useWebSocketStore();

defineProps({
  open: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:open']);

const makeCloseModal = () => {
  emit('update:open', false);
};

const prettyBalance = computed(() => {
  const balance = 0;
  if (socket.lootBox?.balance?.soft) return `${+socket.lootBox?.balance?.soft.toLocaleString('en-US')}`;
  if (socket.lootBox?.balance?.hard) return `${+socket.lootBox?.balance?.hard.toLocaleString('en-US')}`;
  return `${+balance.toLocaleString('en-US')}`;
});
</script>
