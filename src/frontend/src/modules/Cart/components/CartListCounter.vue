<template>
  <div class="counter cart-list__counter">
    <button type="button" class="counter__button counter__button--minus">
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" value="1" />
    <button
      type="button"
      class="counter__button counter__button--plus counter__button--orange"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "CartListCounter",
};
</script>
