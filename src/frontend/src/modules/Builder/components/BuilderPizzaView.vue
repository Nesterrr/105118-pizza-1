<template>
  <div class="content__constructor">
    <div
      :class="`pizza pizza--foundation--${getDoughFromId(
        doughId
      )}-${getSauceFromId(sauceId)}`"
    >
      <div class="pizza__wrapper">
        <div
          v-for="ingredient in actualIngredients"
          :key="`${ingredient.id}${ingredient.index}`"
          :class="`pizza__filling pizza__filling--${getIngredientNameById(
            ingredient.id
          )} ${getIngredienClasstModificator(ingredient.index)}`"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BuilderPizzaView",
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    currentIngredients: {
      type: Array,
      required: true,
    },
    doughId: {
      type: Number,
      default: 1,
    },
    sauceId: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    actualIngredients() {
      const result = [];
      this.currentIngredients.forEach((item) => {
        Array.from({ length: item.quantity }, item.id).forEach((_junk, index) =>
          result.push({ id: item.ingredientId, index: index })
        );
      });
      return result;
    },
  },
  methods: {
    getIngredienClasstModificator(index) {
      switch (index) {
        case 1:
          return `pizza__filling--second`;
        case 2:
          return `pizza__filling--third`;
        default:
          return "";
      }
    },
    getDoughFromId(id) {
      const dough = ["small", "big"];
      return dough[id - 1];
    },
    getSauceFromId(id) {
      const sauces = ["tomato", "creamy"];
      return sauces[id - 1];
    },
    getIngredientNameById(id) {
      const result = this.ingredients.find((item) => item.id === id);
      return result && result.ingridientName;
    },
  },
};
// <div
//  v-for="ingredient in currentIngredients.filter((currentIngredient) =>
//    Boolean(currentIngredient.quantity)
//  )"
//  :key="ingredient.ingredientId"
//  :class="`pizza__filling pizza__filling--${getIngredientNameById(
//    ingredient.ingredientId
//  )} ${getIngredienClasstModificator(ingredient.quantity)}`"
//></div>
</script>
<style scoped>
@import "~@/assets/scss/blocks/pizza.scss";
</style>
