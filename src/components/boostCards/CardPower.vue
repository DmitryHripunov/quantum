<template>
  <div class="boost-card">
    <div class="boost-card__container">
      <div class="boost-card__icon boost-card__icon--boost">
        <IconBoost />
      </div>

      <div class="boost-card__detail">
        <div class="boost-card__desc">Up Power</div>

        <div class="boost-card__detail-wrapper">
          <AppBalance
            :balanceType="socket.showcasePower?.next.currency"
            :imgWidth="14"
            :imgHeight="17"
            :fontSize="'12px'"
            :fontWeight="500"
            :color="'var(--color-yellow)'"
            :balance="socket.showcasePower?.next.cost.toLocaleString('en-US')"
          />

          <div class="boost-card__info">3/3 available</div>

          <div class="boost-card__lvl">LVL 2</div>
        </div>
      </div>

      <button class="boost-card__btn" @click="$emit('modal-open')">
        <span class="boost-card__btn-arrow"></span>
        <span class="boost-card__btn-arrow"></span>
        <span class="boost-card__btn-arrow"></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import AppBalance from '../balance/AppBalance.vue';
import IconBoost from '../icons/IconBoost.vue';
import { useWebSocketStore } from '../../stores/useWebSocketStore';

const socket = useWebSocketStore();
</script>
