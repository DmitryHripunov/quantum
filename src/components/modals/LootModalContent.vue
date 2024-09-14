<template>
  <div class="loot-modal">
    <h2 class="loot-modal__title">Take the prize</h2>

    <img class="loot-modal__img" width="170" height="150" src="/img/chests.png" alt="chests" />

    <p class="loot-modal__desc">You received</p>

    <div class="loot-modal__balance">
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

    <button class="loot-modal__btn" @click="makeCloseModal">GET</button>
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

<style scoped >
.loot-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

.loot-modal::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/img/BGChest.png') 50% -70% / 100% 80% no-repeat;
  z-index: -1;
}

.loot-modal__title {
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 24px;
}

.loot-modal__img {
  display: block;
  margin: 0 auto 40px auto;
}

.loot-modal__desc {
  margin-bottom: 24px;
}

.loot-modal__balance {
  margin-bottom: 24px;
}

.loot-modal__btn {
  font-weight: 500;
  font-size: 18px;
  color: var(--color-black);
  min-width: 180px;
  padding: 16px;
  background-color: var(--color-yellow);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
