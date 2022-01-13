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
          :currentIngredients="pizza.ingredients"
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
              :currentIngredients="pizza.ingredients"
              :doughId="pizza.doughId"
              :sauceId="pizza.sauceId"
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
        name: "",
        sauceId: 1,
        doughId: 1,
        sizeId: 1,
        ingredients: [],
      },
    };
  },
  computed: {
    getPizzaTotalPrice() {
      const { doughId } = this.pizza;
      const dough = this.dough.find((item) => item.id === doughId);
      // const sauce = this.sauces.find((item) => item.id === sauceId);
      // let ingredients = this.pizza.ingridients
      //   ? this.pizza.ingridients.reduce((prev, current) => {
      //       const ingredient = this.ingridients.find(
      //         (item) => item.id === current.ingredientId
      //       );
      //       return prev + current.quantity * ingredient.price;
      //     }, 0)
      //   : 0;
      return dough?.price; // + sauce?.price + ingredients; //this.dough.find((item) => item.id === doughId);
      // const { dough, size, sauce } = this.pizza;
      // return (
      //   (dough.price +
      //     sauce.price +
      // this.ingredients.reduce(
      //   (prev, current) => prev + current.quantity * current.price,
      //   0
      // )) *
      //   size.multiplier
      // );
    },
  },
  methods: {
    selectDough(id) {
      this.pizza.doughId = id;
    },
    selectSize(id) {
      this.pizza.sizeId = id;
    },
    selectIngredient(id, sign) {
      const index = this.pizza.ingredients.findIndex(
        (elem) => elem.ingredientId === id
      );
      if (index === -1) {
        this.pizza.ingredients.push({ quantity: 1, ingredientId: id });
      } else {
        if (sign === "+") {
          this.pizza.ingredients[index].quantity += 1;
        } else {
          this.pizza.ingredients[index].quantity -= 1;
        }
      }
    },
    selectSauce(id) {
      this.pizza.sauceId = id;
    },
    moveIngedient(ingredient) {
      const ingredientValue = this.pizza.ingredients.find(
        (item) => item.ingredientId === ingredient.id
      );
      if (ingredientValue?.quantity < 3 || !ingredientValue) {
        this.selectIngredient(ingredient.id, "+");
      }
    },
  },
};
</script>
