<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__item">@username</div>

        <div class="header__item">0 Mars Count</div>

        <!-- <button>Магазин</button> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
}

.header__wrapper {
  display: flex;
  padding: 30px 24px;
  border-radius: 20px 20px 30px 30px;
  background-color: var(--color-black-soft);
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
</style>
