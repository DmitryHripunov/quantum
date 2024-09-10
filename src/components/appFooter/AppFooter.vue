<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <router-link to="home">Tap</router-link>
        <router-link to="about">Store</router-link>
        <router-link to="home">Friends</router-link>
        <router-link to="home">Tasks</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 30px 24px;
  border-radius: 20px 20px 30px 30px;
  background-color: var(--color-black-soft);
}
</style>
