<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <router-link :to="{ name: 'main' }">Tap</router-link>
        <router-link :to="{ name: 'store' }">Store</router-link>
        <router-link to="home">Friends</router-link>
        <router-link to="home">Tasks</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin: 32px 0;
  font-size: 16px;
}

.footer__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 24px;
  border-radius: 20px;
  background: linear-gradient(180deg, #0b0b1380, 99%, #9543f3);

  filter: drop-shadow(0px 4px 0 hsla(268, 89%, 65%, 0.2));
}
</style>
