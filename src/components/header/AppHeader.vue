<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__user">
        <div class="header__user-img">DH</div>

        <div class="header__user-name">{{ socket.level?.current }} LVL</div>
      </div>

      <div class="header__balance">
        <AppBalance
          :balanceType="'hard'"
          :imgWidth="24"
          :imgHeight="32"
          :fontSize="'18px'"
          :fontWeight="700"
          :color="'var(--color-yellow)'"
          :balance="socket.balance?.hard.toLocaleString('en-US')"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWebSocketStore } from '../../stores/useWebSocketStore';
//@ts-ignore
import AppBalance from '../balance/AppBalance.vue';

const socket = useWebSocketStore();
</script>

<style scoped>
.header {
  margin: 32px 0;
}

.header__wrapper {
  display: flex;
  padding: 16px 24px;
  border-radius: 30px 30px 20px 20px;
  background-color: var(--color-black-soft);
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.header__user {
  display: flex;
  align-items: center;
  border-radius: 22px 18px 18px 22px;
  background-color: var(--color-gray-hard);
  padding-right: 8px;
  flex-shrink: 0;
}

.header__user-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgb(9, 135, 231);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.header__user-name {
  font-size: 12px;
  font-weight: 700;
}
</style>
