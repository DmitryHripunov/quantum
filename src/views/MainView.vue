<template>
  <div>
    <div class="level mr">Level #{{ socket.level }}</div>

    <div class="tap-progress mr"></div>

    <div class="tap mr" @click="socket.makeTap">
      {{ socket.balance.soft }}

      <div class="tap__number">
        {{ counterWithOutLastNumber }}<span :class="eventTap ? 'tap__last-number' : ''">{{ counterLastNumber }}</span>
      </div>
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
import { computed, ref } from 'vue';
import { useWebSocketStore } from '../stores/useWebSocketStore';

const toNextLevelPercentages = computed(() => {
  return ((socket.nextLevelValue - socket.balance.soft) / socket.nextLevelValue) * 100;
});

const eventTap = ref(false);

const counterWithOutLastNumber = computed(() => {
  const number = socket.balance.soft;
  const numberArray = number.toString().split('');
  const numberWithOutLastNumber = numberArray.slice(0, numberArray.length - 1).join('');

  return numberWithOutLastNumber;
});

const counterLastNumber = computed(() => {
  const number = socket.balance.soft;

  const numberArray = number.toString().split('');
  const lastNumberFromArray = numberArray[numberArray.length - 1];
  return lastNumberFromArray;
});

const socket = useWebSocketStore();
</script>

<style scoped>
.tap {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: rgb(89, 98, 105);
  margin: 24px auto;
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

