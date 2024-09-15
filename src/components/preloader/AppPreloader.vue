<template>
  <div class="container preloader">
    <span v-if="socket.pendingWebSocket">loading...</span>

    <span v-else-if="socket.webSocketError">{{ socket.webSocketError }}</span>

    <div v-else># Заглушка</div>
  </div>
</template>

<script setup lang="ts">
import { useWebSocketStore } from '../../stores/useWebSocketStore';

const socket = useWebSocketStore();
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-black);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.preloader__svg {
  display: inline-block;
  width: 300px;
  height: 300px;
}

.preloader__svg path {
  stroke: url(#stripes);
  stroke-width: 1;
  animation-name: dasharray;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-direction: alternate-reverse;
  display: none;
}

.preloader__svg-2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  stroke: url(#stripes);
  stroke-width: 1;
  animation-name: dasharray2;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-direction: alternate;
}

@keyframes dasharray {
  0% {
    stroke-dasharray: 500 1;
    opacity: 0;
  }
  100% {
    stroke-dasharray: 1 550;
    opacity: 1;
  }
}

@keyframes dasharray2 {
  0% {
    opacity: 1;
    stroke-dasharray: 500 1;
  }
  100% {
    opacity: 0;
    stroke-dasharray: 1 550;
  }
}
</style>
