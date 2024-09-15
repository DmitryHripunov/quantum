<template>
  <div class="boost-view">
    <div class="boost-view__header">
      <div class="boost-view__container">
        <h1 class="boost-view__title">Boost</h1>

        <div class="boost-view__energy-icon">
          <IconBoost />
        </div>
      </div>
    </div>

    <div class="boost-view__list">
      <div class="boost-view__container">
        <h3 class="boots-view__card-title">Free boosters</h3>
      </div>

      <!-- <div class="boots-view__card">
        <div class="boost-view__container">
          <div class="boost-view__icon boost-view__icon--boost">
            <IconBoost />
          </div>

          <div class="boots-view__card-detail">
            <div class="boots-view__card-desc">Full energy</div>

            <div class="boots-view__card-info">3/3 available</div>
          </div>

          <button class="boots-view__card-btn">
            <span class="boots-view__card-btn-arrow"></span>
            <span class="boots-view__card-btn-arrow"></span>
            <span class="boots-view__card-btn-arrow"></span>
          </button>
        </div>
      </div> -->

      <CardTap @modal-open="makeUpTapModalOpen" />

      <div class="boost-view__container">
        <h3 class="boots-view__card-title boots-view__card-title--huge-top">Other booosters</h3>
      </div>

      <CardPower @modal-open="makeUpPowerModalOpen" />

      <CardSpeed @modal-open="makeUpSpeedModalOpen" />

      <CardSoon />
    </div>

    <BaseModal v-model:open="upPowerModalOpen">
      <UpPowerModal v-model:open="upPowerModalOpen" />
    </BaseModal>

    <BaseModal v-model:open="upSpeedModalOpen">
      <UpSpeedModal v-model:open="upSpeedModalOpen" />
    </BaseModal>

    <BaseModal v-model:open="upTapModalOpen">
      <UpTapModal v-model:open="upTapModalOpen" />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import IconBoost from '../components/icons/IconBoost.vue';
// @ts-ignore
import BaseModal from '../components/modals/BaseModal.vue';
// @ts-ignore
import UpPowerModal from '../components/modals/UpPowerModal.vue';
// @ts-ignore
import UpSpeedModal from '../components/modals/UpSpeedModal.vue';
// @ts-ignore
import UpTapModal from '../components/modals/UpTapModal.vue';
// @ts-ignore
import CardTap from '..//components/boostCards/CardTap.vue';
// @ts-ignore
import CardPower from '../components/boostCards/CardPower.vue';
// @ts-ignore
import CardSpeed from '..//components/boostCards/CardSpeed.vue';
// @ts-ignore
import CardSoon from '..//components/boostCards/CardSoon.vue';

const upPowerModalOpen = ref(false);
const upSpeedModalOpen = ref(false);
const upTapModalOpen = ref(false);

const makeUpTapModalOpen = () => {
  upTapModalOpen.value = true;
};

const makeUpPowerModalOpen = () => {
  upPowerModalOpen.value = true;
};

const makeUpSpeedModalOpen = () => {
  upSpeedModalOpen.value = true;
};
</script>

<style scoped>
.boost-view__header {
  position: relative;
  display: flex;
  align-items: center;
  margin: 32px 0;
}

.boost-view__container {
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.boost-view__title {
  font-size: 40px;
  font-weight: 700;
  color: #beddf8;
  padding: 16px 24px;
  border-radius: 20px;
  border: 1px;
  background: linear-gradient(90deg, rgba(141, 141, 165, 0.4) 0%, rgba(38, 38, 56, 0) 100%);
  width: calc(100vw - 48px);
  position: relative;
  z-index: -1;
}

.boost-view__energy-icon .svg-fill {
  position: absolute;
  top: 0;
  right: 40px;
  fill: #89acca;
  width: 140px;
  height: 170px;
}

.boots-view__card-title {
  font-size: 16px;
  line-height: 1;
  margin-bottom: 16px;
  font-weight: 600;
}

.boots-view__card-title--huge-top {
  margin-top: 16px;
}
</style>
