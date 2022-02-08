<template>
  <div class="cart-form__address">
    <span class="cart-form__label">Новый адрес:</span>

    <div class="cart-form__input">
      <label class="input">
        <span>Улица*</span>
        <AppInput type="text" name="street" value="" />
      </label>
    </div>

    <div class="cart-form__input cart-form__input--small">
      <label class="input">
        <span>Дом*</span>
        <AppInput type="text" name="house" value="" />
      </label>
    </div>

    <div class="cart-form__input cart-form__input--small">
      <label class="input">
        <span>Квартира</span>
        <AppInput type="text" name="apartment" value="" />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartFormAddress",
};
</script>
