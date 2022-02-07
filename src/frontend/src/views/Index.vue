<template>
  <!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>V!U!E! Pizza - главная</title>
    </head>
    <body>
      <AppLayoutHeader />
      <AppLayoutMain>
        <BuilderDoughSelector />
        <BuilderSizeSelector />
        <BuilderIngredientsSelector />
        <AppLayoutContent>
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>
          <AppDrop @drop="moveIngedient">
            <BuilderPizzaView />
          </AppDrop>
          <BuilderPriceCounter />
        </AppLayoutContent>
      </AppLayoutMain>
    </body>
  </html>
</template>
<script>
import { mapActions } from "vuex";
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import {
  BuilderDoughSelector,
  BuilderIngredientsSelector,
  BuilderPizzaView,
  BuilderPriceCounter,
  BuilderSizeSelector,
} from "@/modules/Builder";
import AppDrop from "@/common/components/AppDrop";
import AppLayoutMain from "@/layouts/AppLayoutMain";
import AppLayoutContent from "@/layouts/AppLayoutContent";

export default {
  name: "Index",
  components: {
    AppLayoutHeader,
    AppLayoutMain,
    AppLayoutContent,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderPriceCounter,
    AppDrop,
  },
  methods: {
    ...mapActions("Builder", {
      selectIngredient: "updateIngredientAmount",
    }),
    moveIngedient(ingredient) {
      this.selectIngredient({ ingredient, sign: "+" });
    },
  },
};
</script>
