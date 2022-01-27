<template>
  <header class="header">
    <div class="header__logo">
      <a href="index.html" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </a>
    </div>
    <div class="header__cart">
      <a href="cart.html">0 ₽</a>
    </div>
    <div class="header__user">
      <router-link to="/login" class="header__login"
        ><span>Войти</span></router-link
      >
    </div>
    <router-view />
  </header>
</template>
<script>
export default {
  name: "AppLayoutHeader",
};
</script>
