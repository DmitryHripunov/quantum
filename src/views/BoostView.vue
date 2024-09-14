<template>
  <div class="boost-view">
    <div class="boost-view__header">
      <h1 class="boost-view__title">Boost</h1>

      <div class="boost-view__energy-icon">
        <span class="boost-view__energy-burger"></span>

        <IconBoost />
      </div>
    </div>

    <div class="boost-view__list">
      <p class="boots-view__card-title">Free boosters</p>

      <div class="boots-view__card">
        <div class="boots-view__card-desc">Full energy</div>

        <div class="boots-view__card-detail">
          <div class="">3/3 available</div>
        </div>

        <button class="boots-view__card-btn">>>></button>
      </div>

      <p class="boots-view__card-title">Other booosters</p>

      <div class="boots-view__card">
        <div class="boots-view__card-desc">All day energy limit</div>

        <div class="boots-view__card-detail">
          <div class="">ICON</div>

          <div class="">3/3 available</div>
          <div class="">LVL 2</div>
        </div>

        <button class="boots-view__card-btn">>>></button>
      </div>

      <div class="boots-view__card">
        <div class="boots-view__card-desc">Multitap</div>

        <div class="boots-view__card-detail">
          <div class="">ICON</div>

          <div class="">3/3 available</div>
          <div class="">LVL 2</div>
        </div>

        <button class="boots-view__card-btn">>>></button>
      </div>

      <div class="boots-view__card">
        <div class="boots-view__card-desc">Auto tap bot</div>

        <button class="boots-view__card-btn">Soon</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBoost from '../components/icons/IconBoost.vue';
</script>

<style scoped>
.boost-view__header {
  position: relative;
  display: flex;
  align-items: center;
  margin: 32px 0;
  max-width: 380px;
}

.boost-view__title {
  font-size: 40px;
  font-weight: 700;
  color: #beddf8;
  padding: 16px 24px;
  border-radius: 20px;
  border: 1px;
  background: linear-gradient(270deg, rgba(141, 141, 165, 0.4) 0%, rgba(38, 38, 56, 0) 100%);
  width: 100%;
  max-width: calc(100% - 50px);
  position: relative;
  z-index: -1;
}

.boost-view__energy-icon .svg-fill {
  position: absolute;
  top: 0;
  right: 0;
  fill: #89acca;
  width: 140px;
  height: 170px;
}
</style>
