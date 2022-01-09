<template>
  <div class="content__constructor">
    <div :class="`pizza pizza--foundation--${size}-${sauce}`">
      <div class="pizza__wrapper">
        <div v-for="ingredient in actualIngredients" :key="ingredient.id">
          <div
            v-for="ingredientItem in Array.from(
              { length: ingredient.quantity },
              (_junk, index) => index
            )"
            :key="ingredientItem"
            :class="`pizza__filling pizza__filling--${getIngredienClasstModificator(
              ingredient.ingridientName,
              ingredientItem
            )}`"
          ></div>
        </div>
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
    size: {
      type: String,
      default: "big",
    },
    sauce: {
      type: String,
      default: "tomato",
    },
  },
  computed: {
    actualIngredients() {
      return this.ingredients.filter(({ quantity }) => Boolean(quantity));
    },
  },
  methods: {
    getIngredienClasstModificator(ingredient, index) {
      switch (index) {
        case 0:
          return ingredient;
        case 1:
          return `${ingredient}--second`;
        case 2:
          return `${ingredient}--third`;
        default:
          return ingredient;
      }
    },
  },
};
</script>
<style scoped>
@import "~@/assets/scss/blocks/pizza.scss";
</style>
