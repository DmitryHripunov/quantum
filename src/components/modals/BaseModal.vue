<template>
  <Teleport to="#teleport">
    <Transition name="slide">
      <div v-show="open" class="modal">
        <div class="modal__wrapper">
          <button class="modal__close" @click="makeCloseModal">X</button>

          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:open']);

const makeCloseModal = () => {
  emit('update:open', false);
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #161522b2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 24px 16px;
  border-radius: 20px 20px 30px 30px;
  background: linear-gradient(0deg, #2d2d43 0%, #232335 100%);
  border: 1px solid #5a5a80;
}

.modal__close {
  position: absolute;
  top: -16px;
  right: 12px;
  width: 35px;
  height: 35px;
  display: block;
  border: 1px solid #5b5b80;
  color: #5b5b80;
  border-radius: 50%;
  padding: 8px;
  background: #2d2d43;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  font-size: 16px;
}
</style>
