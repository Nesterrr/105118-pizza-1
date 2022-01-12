<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            class="radio ingredients__input"
            v-for="sauce in sauces"
            :key="sauce.id"
          >
            <RadioButton
              type="radio"
              name="sauce"
              :value="sauce.sauceVariant"
              @click="onSelectSauce(sauce.id)"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="ingredient in ingredients"
              :key="ingredient.id"
            >
              <AppDrag :transfer-data="ingredient">
                <SelectorItem
                  :ingridientName="ingredient.ingridientName"
                  :name="ingredient.name"
                />
              </AppDrag>
              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--minus"
                  @click="onSelectIngredient(ingredient.id, '-')"
                  :disabled="
                    currentIngredients.find(
                      ({ quantity, ingredientId }) =>
                        ingredientId === ingredient.id && quantity === 0
                    )
                  "
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <CounterInput
                  name="counter"
                  :value="getIngredientValueById(ingredient.id)"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                  @click="onSelectIngredient(ingredient.id, '+')"
                  :disabled="
                    currentIngredients.find(
                      ({ quantity, ingredientId }) =>
                        ingredientId === ingredient.id && quantity >= 3
                    )
                  "
                >
                  <span class="visually-hidden">Больше</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
import SelectorItem from "@/common/components/SelectorItem";
import CounterInput from "@/common/components/CounterInput";
import AppDrag from "@/common/components/AppDrag";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    RadioButton,
    SelectorItem,
    CounterInput,
    AppDrag,
  },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    currentIngredients: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onSelectIngredient(id, sign) {
      this.$emit("selectIngredient", id, sign);
    },
    onSelectSauce(sauce) {
      this.$emit("selectSauce", sauce);
    },
    getIngredientValueById(id) {
      // console.log("id: ", this.currentIngredients);
      const index = this.currentIngredients.findIndex((ingredient) => {
        return ingredient.ingredientId === id;
      });
      // console.log("getIngredientValueById: ", index);
      if (index === -1) return 0;
      const value = this.currentIngredients[index].quantity;
      return value ? value : 0;
    },
  },
};
</script>
