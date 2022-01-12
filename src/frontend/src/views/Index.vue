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
        <BuilderDoughSelector :dough="dough" @selectDough="selectDough" />
        <BuilderSizeSelector :sizes="sizes" @selectSize="selectSize" />
        <BuilderIngredientsSelector
          :sauces="sauces"
          :ingredients="ingredients"
          :currentIngredients="pizza1.ingredients"
          @selectIngredient="selectIngredient"
          @selectSauce="selectSauce"
        />
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
            <BuilderPizzaView
              :ingredients="ingredients"
              :currentIngredients="pizza1.ingredients"
              :doughId="pizza1.doughId"
              :sauceId="pizza1.sauceId"
            />
          </AppDrop>
          <BuilderPriceCounter :price="getPizzaTotalPrice" />
        </AppLayoutContent>
      </AppLayoutMain>
    </body>
  </html>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutMain from "@/layouts/AppLayoutMain";
import AppLayoutContent from "@/layouts/AppLayoutContent";
import BuilderDoughSelector from "@/modules/Builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/Builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/Builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/Builder/components/BuilderPizzaView";
import BuilderPriceCounter from "@/modules/Builder/components/BuilderPriceCounter";
import AppDrop from "@/common/components/AppDrop";
import pizza from "@/static/pizza.json";
import { sizes, dough, sauces, ingridients } from "./helper";

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
  data() {
    const ingredients = pizza.ingredients.map((ingridient, index) => ({
      ...ingridient,
      ingridientName: ingridients[index],
      quantity: 0,
    }));
    return {
      dough: pizza.dough.map((doughVariant, index) => ({
        ...doughVariant,
        scale: dough[index],
      })),
      ingredients,
      sauces: pizza.sauces.map((sauce, index) => ({
        ...sauce,
        sauceVariant: sauces[index],
      })),
      sizes: pizza.sizes.map((size, index) => ({
        ...size,
        scale: sizes[index],
      })),
      pizza: {
        dough: {
          price: 0,
          scale: "small",
        },
        size: {
          multiplier: 1,
          scale: "big",
        },
        sauce: {
          price: 0,
          sauceName: "tomato",
        },
        ingredients,
      },
      pizza1: {
        name: "",
        sauceId: 1,
        doughId: 1,
        sizeId: 1,
        quantity: 0,
        ingredients: [],
      },
    };
  },
  computed: {
    getPizzaTotalPrice() {
      return 10;
      // const { dough, size, sauce } = this.pizza;
      // return (
      //   (dough.price +
      //     sauce.price +
      //     this.ingredients.reduce(
      //       (prev, current) => prev + current.quantity * current.price,
      //       0
      //     )) *
      //   size.multiplier
      // );
    },
  },
  methods: {
    selectDough(id) {
      this.pizza1.doughId = id;
    },
    selectSize(id) {
      this.pizza1.sizeId = id;
    },
    selectIngredient(id, sign) {
      const index = this.pizza1.ingredients.findIndex(
        (elem) => elem.ingredientId === id
      );
      if (index === -1) {
        this.pizza1.ingredients.push({ quantity: 1, ingredientId: id });
      } else {
        if (sign === "+") {
          this.pizza1.ingredients[index].quantity += 1;
        } else {
          this.pizza1.ingredients[index].quantity -= 1;
        }
      }
    },
    selectSauce(id) {
      this.pizza1.sauceId = id;
    },
    moveIngedient(ingredient) {
      const ingredientValue = this.pizza1.ingredients.find(
        (item) => item.ingredientId === ingredient.id
      );
      if (ingredientValue?.quantity < 3 || !ingredientValue) {
        this.selectIngredient(ingredient.id, "+");
      }
    },
  },
};
</script>
