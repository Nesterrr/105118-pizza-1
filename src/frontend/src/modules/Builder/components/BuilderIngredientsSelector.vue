<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            class="radio ingredients__input"
            v-for="sauce in pizza.sauces"
            :key="sauce.id"
          >
            <RadioButton
              type="radio"
              name="sauce"
              :value="sauce.sauceVariant"
              @click="selectSauce(sauce)"
              :checked="builder.sauce.sauceVariant === sauce.sauceVariant"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              class="ingredients__item"
              v-for="(ingredient, index) in pizza.ingredients"
              :key="ingredient.id"
            >
              <AppDrag
                :transfer-data="ingredient"
                :draggable="isDruggable(builder.ingredients[index].quantity)"
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
                  @click="selectIngredient({ ingredient, sign: '-' })"
                  :disabled="builder.ingredients[index].quantity === 0"
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <CounterInput
                  name="counter"
                  :value="`${builder.ingredients[index].quantity}`"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                  @click="selectIngredient({ ingredient, sign: '+' })"
                  :disabled="
                    isButtonDisabled(builder.ingredients[index].quantity)
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
import { mapActions, mapState } from "vuex";
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
  computed: {
    ...mapState(["pizza"]),
    ...mapState("Builder", ["builder"]),
  },
  methods: {
    ...mapActions("Builder", {
      selectSauce: "setSauce",
      selectIngredient: "updateIngredientAmount",
    }),
    isButtonDisabled(quantity) {
      return quantity >= MAX_IGREDIENT_QUANTITY;
    },
    isDruggable(quantity) {
      return quantity < MAX_IGREDIENT_QUANTITY;
    },
  },
};
</script>
