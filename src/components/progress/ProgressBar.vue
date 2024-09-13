<template>
  <div class="progress-bar">
    <div class="progress-bar__scale"></div>

    <img class="progress-bar__img" width="50" height="46" src="/img/chests.png" alt="chests" />

    <div class="progress-bar__info">
      <span class="progress-bar__xp"> {{ socket.prettyLevelXP }} </span> /
      <span class="progress-bar__next"> {{ socket.prettyLevelNext }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWebSocketStore } from '../../stores/useWebSocketStore';

const socket = useWebSocketStore();
</script>

<style scoped>
.progress-bar {
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 0 16px;
  max-width: 320px;
  width: 100%;
}

.progress-bar__scale {
  height: 8px;
  border-radius: 8px;
  background-color: var(--color-black-middle);
  position: relative;
  flex: 1 1 200px;
}

.progress-bar__scale::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: v-bind('socket.getProgressPercentage+"%"');
  height: 8px;
  border-radius: 8px;
  background: radial-gradient(ellipse at 0 100%, #ad12f5, #fdac62, #ff33ba);
}

.progress-bar__img {
  flex: 0 0 50px;
  filter: drop-shadow(0px 0px 12px #ffffff60);
}

.progress-bar__info {
  font-size: 14px;
  line-height: 1;
  transform: translateY(-10px);
}

.progress-bar__next {
  color: var(--color-yellow);
}
</style>
