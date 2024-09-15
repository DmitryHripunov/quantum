<template>
  <div class="modal__content">
    <div class="modal__icon">
      <IconBoost />
    </div>

    <h2 class="modal__title">Up power</h2>

    <p class="modal__desc">Recharge your energy to the limit and do another round of mining</p>

    <div class="modal__balance">
      <AppBalance
        :balanceType="socket.showcasePower?.next.currency"
        :imgWidth="39"
        :imgHeight="39"
        :fontSize="'32px'"
        :fontWeight="700"
        :color="'var(--color-white)'"
        :balance="nextCost"
      />
    </div>

    <button class="modal__btn-get" :disabled="isEnoughBalance" @click="upPower">GET</button>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import AppBalance from '../balance/AppBalance.vue';
import IconBoost from '../icons/IconBoost.vue';
import { computed } from 'vue';
import { useWebSocketStore } from '../../stores/useWebSocketStore';

const socket = useWebSocketStore();

defineProps({
  open: {
    type: Boolean,
  },
});

const upPower = () => {
  socket.upPower();
};

const isEnoughBalance = computed(() => {
  if (!socket.showcasePower || !socket.balance) {
    return true;
  }

  return socket.balance.soft < socket.showcasePower?.next.cost;
});

const nextCost = computed(() => {
  if (!socket.showcasePower) {
    return '0';
  }

  return socket.showcasePower?.next.cost.toLocaleString('en-US');
});
</script>

