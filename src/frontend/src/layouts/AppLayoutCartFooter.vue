<template>
  <section class="footer">
    <div class="footer__more">
      <router-link to="/" class="button button--border button--arrow">
        Хочу еще одну
      </router-link>
    </div>
    <p class="footer__text">
      Перейти к конструктору<br />чтоб собрать ещё одну пиццу
    </p>
    <div class="footer__price">
      <slot name="price" />
    </div>
    <div class="footer__submit">
      <slot name="submit" />
    </div>
  </section>
</template>
<script>
export default {
  name: "AppLayoutCartFooter",
};
</script>
