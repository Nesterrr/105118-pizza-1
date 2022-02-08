<template>
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>V!U!E! Pizza - корзина</title>
    </head>
    <body>
      <AppLayoutHeader />
      <form action="test.html" method="post" class="layout-form">
        <AppLayoutCart>
          <template v-slot:cartList>
            <CartList />
          </template>
          <template v-slot:cartAdditional>
            <CartAdditional />
          </template>
          <template v-slot:cartForm>
            <CartForm />
          </template>
        </AppLayoutCart>
        <AppLayoutCartFooter>
          <template v-slot:price>
            <b>{{ price }}</b>
          </template>
          <template v-slot:submit>
            <button type="submit" class="button">Оформить заказ</button>
          </template>
        </AppLayoutCartFooter>
      </form>
    </body>
  </html>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutCart from "@/layouts/AppLayoutCart";
import AppLayoutCartFooter from "@/layouts/AppLayoutCartFooter";
import { CartList, CartAdditional, CartForm } from "@/modules/Cart";

export default {
  name: "Cart",
  components: {
    AppLayoutHeader,
    AppLayoutCart,
    AppLayoutCartFooter,
    CartList,
    CartAdditional,
    CartForm,
  },
  data() {
    return {
      price: "Итого: 2 228 ₽",
    };
  },
};
</script>
