<template>
  <Teleport to="#teleport">
    <Transition name="fade">
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
