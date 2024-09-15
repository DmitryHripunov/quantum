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
        <p class="boots-view__card-title">Free boosters</p>
      </div>

      <div class="boots-view__card">
        <div class="boost-view__container">
          <div class="boost-view__icon boost-view__icon--boost">
            <IconBoost />
          </div>

          <div class="boots-view__card-detail">
            <div class="boots-view__card-desc">Full energy</div>

            <div class="boots-view__card-info">3/3 available</div>
          </div>

          <button class="boots-view__card-btn">>>></button>
        </div>
      </div>

      <div class="boost-view__container">
        <p class="boots-view__card-title boots-view__card-title--huge-top">Other booosters</p>
      </div>

      <div class="boots-view__card">
        <div class="boost-view__container">
          <div class="boots-view__card-desc">All day energy limit</div>

          <div class="boots-view__card-detail">
            <div class="">ICON</div>

            <div class="">3/3 available</div>
            <div class="">LVL 2</div>
          </div>

          <button class="boots-view__card-btn">>>></button>
        </div>
      </div>

      <div class="boots-view__card">
        <div class="boost-view__container">
          <div class="boots-view__card-desc">Multitap</div>

          <div class="boots-view__card-detail">
            <div class="">ICON</div>

            <div class="">3/3 available</div>
            <div class="">LVL 2</div>
          </div>

          <button class="boots-view__card-btn">>>></button>
        </div>
      </div>

      <div class="boots-view__card">
        <div class="boost-view__container">
          <div class="boots-view__card-desc">Auto tap bot</div>

          <button class="boots-view__card-btn">Soon</button>
        </div>
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
}

.boost-view__container {
  max-width: 380px;
  margin: 0 auto;
}

.boost-view__title {
  font-size: 40px;
  font-weight: 700;
  color: #beddf8;
  padding: 16px 24px;
  border-radius: 20px;
  border: 1px;
  background: linear-gradient(90deg, rgba(141, 141, 165, 0.4) 0%, rgba(38, 38, 56, 0) 100%);
  width: 380px;
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
  margin-top: 60px;
}

.boots-view__card {
  position: relative;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 30px 30px 0 0;
  z-index: 1;
  min-height: 100px;
}

.boots-view__card::before {
  position: absolute;
  content: '';
  z-index: -1;
  inset: 0;
  border: inherit;
  border-radius: inherit;
  background: linear-gradient(var(--color-black) 0 0) padding-box,
    linear-gradient(0deg, rgba(21, 21, 31, 0) 0%, #5a5a80 100%) border-box;
}

.boost-view__container {
  display: flex;
  align-items: center;
}

.boots-view__card-btn {
  margin-left: auto;
}

.boost-view__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #5a5a8033;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(0deg, rgba(20, 20, 31, 0) 0%, #333348 100%);
  padding: 16px 36px 36px;
  margin-right: 16px;
  height: 100%;
  border-bottom: none;
}

.boost-view__icon--boost .svg-fill {
  width: 20px;
  height: 30px;
  fill: #ff33ba;
}
</style>
