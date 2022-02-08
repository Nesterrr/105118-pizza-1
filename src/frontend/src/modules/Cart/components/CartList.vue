<template>
  <ul class="cart-list sheet">
    <li v-for="item in items" :key="item" class="cart-list__item">
      <CartListProduct />
      <CartListCounter />
      <CartListPrice />
      <div class="cart-list__button">
        <button type="button" class="cart-list__edit">Изменить</button>
      </div>
    </li>
  </ul>
</template>

<script>
import CartListProduct from "@/modules/Cart/components/CartListProduct";
import CartListCounter from "@/modules/Cart/components/CartListCounter";
import CartListPrice from "@/modules/Cart/components/CartListPrice";

export default {
  name: "CartList",
  components: {
    CartListProduct,
    CartListCounter,
    CartListPrice,
  },
  data() {
    return {
      items: [0, 1],
    };
  },
};
</script>
