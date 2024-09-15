<template>
  <div class="tap">
    <img class="tap__bg-img" src="/img/BGMain.png" alt="" />
    <div class="tap__info" ref="tapInfo" @touchstart="handleTap($event)">
      <img
        class="tap__cat-img"
        width="260"
        height="300"
        :src="!isTapActive ? `${route.path}/img/catBase.png` : `${route.path}/img/catBeam.png`"
        alt="cat"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useWebSocketStore } from '../../stores/useWebSocketStore';
import { useRoute } from 'vue-router';

const socket = useWebSocketStore();

const offSet = reactive({
  left: null,
  right: null,
});
const tapInfo = ref();
const isTapActive = ref(false);
const route = useRoute();
const timeoutTapActive = ref();

if (timeoutTapActive.value) clearTimeout(timeoutTapActive.value);

const createTapSpan = ($event: any) => {
  const elements = [];

  for (const touch of $event.targetTouches) {
    const { x, y } = $event.target.getBoundingClientRect();

    const span = document.createElement('span');
    let interval = null;
    let setLeft = touch.clientX - x;
    let setTop = touch.clientY - (y + 30);

    if (interval) clearInterval(interval);

    span.textContent = `+${socket.tap}`;
    span.style.position = 'absolute';
    span.style.pointerEvents = 'none';
    span.style.opacity = '1';

    let decrementOpacity = 1;

    interval = setInterval(() => {
      decrementOpacity -= 0.016;
      setLeft += 0.1;
      setTop -= 2;
      span.style.left = setLeft + 'px';
      span.style.top = setTop + 'px';
      span.style.opacity = decrementOpacity.toString();
    }, 16);

    elements.push(span);
  }

  return elements;
};

const handleTap = ($event: any) => {
  if ($event.touches.length > 10) return;

  let timeoutTapInfo = null;

  if (timeoutTapInfo) clearTimeout(timeoutTapInfo);

  socket.makeTap();
  isTapActive.value = true;

  const spans = createTapSpan($event);

  if (!spans) return;

  for (const span of spans) {
    tapInfo.value.appendChild(span);
  }

  timeoutTapInfo = setTimeout(() => {
    for (const span of spans) {
      span.remove();
    }
  }, 1000);

  timeoutTapActive.value = setTimeout(() => {
    if (!tapInfo.value.querySelectorAll('span')[0]) {
      isTapActive.value = false;
    }
  }, 1000);
};
</script>

<style scoped>
.tap {
  position: relative;
}

.tap__bg-img {
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.tap__info {
  position: relative;
  width: 260px;
  height: 300px;
  margin: 0 auto;
}

.tap__cat-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 60px auto 20px;
  animation: levitate 3s infinite alternate ease-in-out;
}

.tap__speed {
  position: absolute;
  left: v-bind('offSet.left+"px"');
  top: v-bind('offSet.right+"px"');
  z-index: 1;
  color: var(--color-white);
  animation-name: tap;
  animation-duration: 0.16s;
}

@keyframes levitate {
  0% {
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, -26px);
  }
}
</style>
