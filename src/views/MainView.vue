<template>
  <div class="main-page">
    <AppHeader />

    <div class="main-page__balance">
      <AppBalance
        :balanceType="'soft'"
        :imgWidth="48"
        :imgHeight="48"
        :fontSize="'48px'"
        :fontWeight="700"
        :color="'var(--color-white)'"
        :balance="socket.prettyBalanceSoft"
      />
    </div>

    <div class="main-page__progress">
      <ProgressBar />
    </div>

    <div class="main-page__tap">
      <AppTap />
    </div>

    <div class="main-page__energy">
      <div class="main-page__energy-icon">
        <span class="main-page__energy-burger"></span>

        <IconBoost />
      </div>

      <div class="main-page__energy-info">{{ socket.power?.current }} / {{ socket.power?.max }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import AppHeader from '../components/header/AppHeader.vue';
//@ts-ignore
import AppBalance from '../components/balance/AppBalance.vue';
//@ts-ignore
import ProgressBar from '../components/progress/ProgressBar.vue';
//@ts-ignore
import IconBoost from '../components/icons/IconBoost.vue';
//@ts-ignore
import AppTap from '../components/tap/AppTap.vue';

import { useWebSocketStore } from '../stores/useWebSocketStore';

const socket = useWebSocketStore();
</script>

<style scoped>
.main-page__balance {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.main-page__energy {
  border-radius: 12px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  background-color: #913df3;
  min-width: 140px;
  padding: 10px 16px;
  gap: 0 8px;
  font-size: 16px;
  line-height: 1;
  filter: drop-shadow(0 10px 60px #7d14d0cc) drop-shadow(10px 20px 80px #da259c4d);
}

.main-page__energy-icon .svg-fill {
  fill: var(--color-white);
  width: 16px;
  height: 18px;
}

.main-page__energy-burger {
  display: inline-block;
  width: 8px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-white);
  position: relative;
}

.main-page__energy-burger::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 8px;
  display: inline-block;
  width: 4px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-white);
}

.main-page__energy-burger::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 15px;
  display: inline-block;
  width: 8px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-white);
}
</style>

