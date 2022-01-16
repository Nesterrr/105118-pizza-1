<template>
  <div class="content__constructor">
    <div :class="`pizza pizza--foundation--${size}-${sauce}`">
      <div class="pizza__wrapper">
        <div
          v-for="ingredient in actualIngredients"
          :key="`${ingredient.id}-${ingredient.index}`"
          :class="`pizza__filling pizza__filling--${
            ingredient.ingredientName
          } pizza__filling${getIngredienClasstModificator(ingredient.index)}`"
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
      const result = [];
      this.ingredients
        .filter((item) => item.quantity)
        .forEach((element) => {
          Array.from({ length: element.quantity }, () => ({
            id: element.id,
            quantity: element.quantity,
            ingredientName: element.ingredientName,
          })).forEach((item, index) => {
            result.push({ ...item, index });
          });
        });
      return result;
    },
  },
  methods: {
    getIngredienClasstModificator(index) {
      switch (index) {
        case 1:
          return "--second";
        case 2:
          return "--third";
        default:
          return "";
      }
    },
  },
};
</script>
<style scoped>
@import "~@/assets/scss/blocks/pizza.scss";
</style>
