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
              v-model="sauce.sauceVariant"
              @click="onSelectSauce(sauce)"
              :checked="selectedSauce.sauceVariant === sauce.sauceVariant"
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
              <AppDrag
                :transfer-data="ingredient"
                :draggable="isDruggable(ingredient.quantity)"
              >
                <SelectorItem
                  :ingredientName="ingredient.ingredientName"
                  :name="ingredient.name"
                />
              </AppDrag>
              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--minus"
                  @click="onSelectIngredient(ingredient, '-')"
                  :disabled="ingredient.quantity === 0"
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <CounterInput name="counter" :value="ingredient.quantity" />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                  @click="onSelectIngredient(ingredient, '+')"
                  :disabled="isButtonDisabled(ingredient.quantity)"
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
import { MAX_IGREDIENT_QUANTITY } from "@/modules/Builder/helper";

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
    selectedSauce: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSelectIngredient(ingredient, sign) {
      this.$emit("selectIngredient", ingredient, sign);
    },
    onSelectSauce(sauce) {
      this.$emit("selectSauce", sauce);
    },
    isButtonDisabled(quantity) {
      return quantity >= MAX_IGREDIENT_QUANTITY;
    },
    isDruggable(quantity) {
      return quantity < MAX_IGREDIENT_QUANTITY;
    },
  },
};
</script>
