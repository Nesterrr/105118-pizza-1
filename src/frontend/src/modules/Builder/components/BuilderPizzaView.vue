<template>
  <div class="content__constructor">
    <div
      :class="`pizza pizza--foundation--${
        builder.dough.scale === 'light' ? 'small' : 'big'
      }-${builder.sauce.sauceVariant}`"
    >
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
import { mapState } from "vuex";
export default {
  name: "BuilderPizzaView",
  computed: {
    ...mapState("Builder", ["builder"]),
    actualIngredients() {
      const result = [];
      this.builder.ingredients
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
