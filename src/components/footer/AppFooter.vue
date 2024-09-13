<template>
  <footer class="footer" :class="{ 'footer--hidden': socket.pendingWebSocket }">
    <div class="container">
      <div class="footer__wrapper">
        <router-link class="footer__link" :to="{ name: 'main' }">
          <IconAtom />
          Mine
        </router-link>

        <router-link class="footer__link" :to="{ name: 'boost' }">
          <IconBoost />
          Boost
        </router-link>

        <router-link class="footer__link" :to="{ name: 'friends' }">
          <IconFriends />
          Friends
        </router-link>

        <router-link class="footer__link" :to="{ name: 'tasks' }">
          <IconTasks />
          Tasks
        </router-link>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
import IconAtom from '../icons/IconAtom.vue';
import IconBoost from '../icons/IconBoost.vue';
import IconFriends from '../icons/IconFriends.vue';
import IconTasks from '../icons/IconTasks.vue';
import { useWebSocketStore } from '../../stores/useWebSocketStore';

const socket = useWebSocketStore();
</script>

<style scoped>
.footer {
  margin: 32px 0;
  font-size: 16px;
}

.footer--hidden {
  opacity: 0;
}

.footer__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 20px 20px 30px 30px;
  background-color: var(--color-black-hard);
  box-shadow: 0px 4px 20px 0px #9f56f533;
  filter: blur(0.2px);
  border: solid 1px transparent;
  position: relative;
}

.footer__wrapper::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  border: inherit;
  border-radius: inherit;
  background: linear-gradient(var(--color-black) 0 0) padding-box,
    linear-gradient(180deg, var(--color-black), #9543f3) border-box;
  content: '';
}

.footer__link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  color: #8d8da5;
  font-size: 12px;
  padding: 12px 18px;
  border-radius: 20px;
  transition: color var(--duration), background var(--duration);
}

.footer__link .svg-fill,
.footer__link .svg-stroke {
  width: 24px;
  height: 24px;
}

.footer__link .svg-fill {
  fill: #8d8da5;
  transition: fill var(--duration);
}

.footer__link .svg-stroke {
  stroke: #8d8da5;
  transition: stroke var(--duration);
}

.footer__link.link-active {
  color: var(--color-white);
  background: #7d14d026;
}

.footer__link.link-active .svg-stroke {
  stroke: #8221f1;
}

.footer__link.link-active .svg-fill {
  fill: #8221f1;
}
</style>
