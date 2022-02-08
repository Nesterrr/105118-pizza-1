<template>
  <div class="cart__form">
    <div class="cart-form">
      <label class="cart-form__select">
        <span class="cart-form__label">Получение заказа:</span>

        <select name="test" class="select">
          <option value="1">Заберу сам</option>
          <option value="2">Новый адрес</option>
          <option value="3">Дом</option>
        </select>
      </label>

      <label class="input input--big-label">
        <span>Контактный телефон:</span>
        <AppInput
          type="text"
          name="tel"
          placeholder="+7 999-999-99-99"
          value=""
        />
      </label>
      <CartFormAddress />
    </div>
  </div>
</template>
<script>
import { CartFormAddress } from "@/modules/Cart";
export default {
  name: "CartForm",
  components: {
    CartFormAddress,
  },
};
</script>
