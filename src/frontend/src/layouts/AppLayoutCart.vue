<template>
  <main class="content cart">
    <div class="container">
      <div class="cart__title">
        <h1 class="title title--big">Корзина</h1>
      </div>
      <div v-if="isEmptyCart" class="sheet cart__empty">
        <p>В корзине нет ни одного товара</p>
      </div>
      <div v-else>
        <slot name="cartList" />
        <slot name="cartAdditional" />
        <slot name="cartForm" />
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "AppLayoutCart",
  data() {
    return {
      isEmptyCart: false,
    };
  },
};
</script>
