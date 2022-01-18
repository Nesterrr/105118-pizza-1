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
        <BuilderDoughSelector
          :dough="dough"
          @selectDough="onSelectDough"
          :selectedDough="pizza.dough"
        />
        <BuilderSizeSelector
          :sizes="sizes"
          @selectSize="onSelectSize"
          :selectedSize="pizza.size"
        />
        <BuilderIngredientsSelector
          :sauces="sauces"
          :ingredients="ingredients"
          @selectIngredient="onSelectIngredient"
          @selectSauce="onSelectSauce"
          :selectedSauce="pizza.sauce"
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
              :ingredients="pizza.ingredients"
              :size="`${pizza.dough.scale === 'light' ? 'small' : 'big'}`"
              :sauce="pizza.sauce.sauceVariant"
            />
          </AppDrop>
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
import AppDrop from "@/common/components/AppDrop";
import pizza from "@/static/pizza.json";
import { sizes, dough, sauces, ingredients } from "./helper";

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
    const extendedIngredients = pizza.ingredients.map((ingredient, index) => ({
      ...ingredient,
      ingredientName: ingredients[index],
      quantity: 0,
    }));
    return {
      dough: pizza.dough.map((doughVariant, index) => ({
        ...doughVariant,
        scale: dough[index],
      })),
      ingredients: extendedIngredients,
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
          price: 300,
          scale: "light",
        },
        size: {
          multiplier: 1,
          scale: "small",
        },
        sauce: {
          price: 50,
          sauceVariant: "tomato",
        },
        ingredients: extendedIngredients,
      },
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
    onSelectDough(param) {
      this.pizza.dough = this.dough.find((item) => item.id === param.id);
    },
    onSelectSize(param) {
      this.pizza.size = this.sizes.find((item) => item.id === param.id);
    },
    changeIngredientAmount(index, sign) {
      const deltaWithSign = Math.sign(`${sign}1`);
      this.pizza.ingredients[index].quantity =
        this.pizza.ingredients[index].quantity + deltaWithSign;
    },
    onSelectIngredient(param, sign) {
      const index = this.pizza.ingredients.findIndex(
        (elem) => elem.id === param.id
      );
      this.changeIngredientAmount(index, sign);
    },
    onSelectSauce(param) {
      this.pizza.sauce = this.sauces.find((item) => item.id === param.id);
    },
    moveIngedient(ingredient) {
      const ingredientValue = this.pizza.ingredients.find(
        (item) => item.id === ingredient.id
      );

      const index = this.pizza.ingredients.findIndex(
        (elem) => elem.id === ingredientValue.id
      );
      this.changeIngredientAmount(index, "+");
    },
  },
};
</script>
