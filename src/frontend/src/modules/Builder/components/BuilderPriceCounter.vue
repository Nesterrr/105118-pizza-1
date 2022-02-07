<template>
  <div class="content__result">
    <p>Итого: {{ getTotalPrice }} ₽</p>
    <button type="button" class="button" disabled>Готовьте!</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BuilderPriceCounter",
  computed: {
    ...mapGetters("Builder", ["totalPrice"]),
    getTotalPrice() {
      return this.totalPrice;
    },
  },
};
</script>
