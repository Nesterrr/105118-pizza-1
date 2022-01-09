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
          <BuilderPizzaView
            :ingredients="pizza.ingredients"
            :size="`${pizza.dough.scale === 'light' ? 'small' : 'big'}`"
            :sauce="pizza.sauce.sauceVariant"
          />
          <BuilderPriceCounter :price="getPizzaPrice" />
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
      price: 0,
    };
  },
  computed: {
    getPizzaPrice() {
      const { dough, size, sauce } = this.pizza;
      return (
        (dough.price +
          sauce.price +
          this.ingredients.reduce(
            (prev, current) => prev + current.quantity * current.price,
            0
          )) *
        size.multiplier
      );
    },
  },
  methods: {
    selectDough(param) {
      this.pizza = {
        ...this.pizza,
        dough: this.dough.find((item) => item.id === param.id),
      };
    },
    selectSize(param) {
      this.pizza = {
        ...this.pizza,
        size: this.sizes.find((item) => item.id === param.id),
      };
    },
    selectIngredient(param, sign) {
      const index = this.pizza.ingredients.findIndex(
        (elem) => elem.id === param.id
      );
      if (sign === "+") {
        this.pizza.ingredients[index].quantity =
          this.pizza.ingredients[index].quantity + 1;
      } else {
        this.pizza.ingredients[index].quantity =
          this.pizza.ingredients[index].quantity - 1;
      }
    },
    selectSauce(param) {
      this.pizza = {
        ...this.pizza,
        sauce: this.sauces.find((item) => item.id === param.id),
      };
    },
  },
};
</script>
