<template>
  <div>
    <div class="level mr">Level #{{ socket.level }}</div>

    <div class="tap-progress mr"></div>

    <div class="mr">
      {{ socket.balance.soft }}
    </div>

    <div class="tap" @click="handleTap($event)">
      <div class="tap__speed" v-if="offSet.right && offSet.left">+{{ socket.speed }}</div>
    </div>

    <div class="energy mr">Energy: {{ socket.power }} / {{ socket.powerMax }}</div>

    <div class="mr">balanceToLevelUp: {{ socket.balanceToLevelUp }}</div>
    <div class="mr">nextCostTap: {{ socket.nextCostTap }}</div>
    <div class="mr">speed: {{ socket.speed }}</div>
    <div class="mr">nextCostPower: {{ socket.nextCostPower }}</div>
    <div class="mr">nextLevelValue: {{ socket.nextLevelValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useWebSocketStore } from '../stores/useWebSocketStore';

const offSet = reactive({
  left: null,
  right: null,
});

const toNextLevelPercentages = computed(() => {
  return ((socket.nextLevelValue - socket.balance.soft) / socket.nextLevelValue) * 100;
});

const handleTap = ($event: any) => {
  let timeoutId = null;

  if (timeoutId) clearTimeout(timeoutId);

  offSet.left = $event.offsetX;
  offSet.right = $event.offsetY;
  socket.makeTap();

  timeoutId = setTimeout(() => {
    offSet.left = null;
    offSet.right = null;
  }, 120);
};

const socket = useWebSocketStore();
</script>

<style scoped>
.tap {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: rgb(89, 98, 105);
  margin: 24px auto;
}

.tap__speed {
  position: absolute;
  left: v-bind('offSet.left+"px"');
  top: v-bind('offSet.right+"px"');
  z-index: 1;
  color: #fff;
  /* animation: tap ease 0 infinite; */
  animation-name: speedInfo;
  animation-duration: 0.16s;
}

@keyframes speedInfo {
  0% {
    transform: translateY(-10px);
    opacity: 1;
  }
  50% {
    transform: translateY(-40px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0.1;
  }
}

.mr {
  margin: 16px 0;
}

.tap-progress {
  height: 8px;
  border-radius: 8px;
  background-color: #323247;
  position: relative;
  width: 100%;
}

.tap-progress::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: v-bind('toNextLevelPercentages+"%"');
  height: 8px;
  border-radius: 8px;
  background: radial-gradient(ellipse at 0 100%, #ad12f5, #fdac62, #ff33ba);
}
</style>

