<template>
  <div class="balance">
    <img
      v-if="balanceType === 'hard'"
      :width="imgWidth"
      :height="imgHeight"
      class="balance__img"
      src="/img/iconBalanceHard.png"
      alt="balance"
    />

    <img
      v-if="balanceType === 'soft'"
      :width="imgWidth"
      :height="imgHeight"
      class="balance__img"
      src="/img/iconBalanceSoft.png"
      alt="balance"
    />

    <div class="balance__info">
      {{ balance }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  balanceType: {
    type: String,
  },
  imgWidth: {
    type: Number,
  },

  imgHeight: {
    type: Number,
  },
  fontSize: {
    type: String,
  },
  fontWeight: {
    type: Number,
  },
  color: {
    type: String,
  },
  balance: {
    type: String,
  },
});
</script>

<style scoped>
.balance {
  display: flex;
  align-items: center;
}

.balance__info {
  line-height: 1;
  font-size: v-bind('fontSize');
  color: v-bind('color');
  font-weight: v-bind('fontWeight');
}

.balance__img {
  content: '';
  display: inline-block;
  margin-right: 8px;
  object-fit: contain;
}
</style>
