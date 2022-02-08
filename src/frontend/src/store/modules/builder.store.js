import { capitalize } from "@/common/helpers";
import { UPDATE_PIZZA, UPDATE_INGREDIENT } from "@/store/mutations-types";

const entity = "builder";
const module = capitalize(entity);
const namespace = { entity, module };

export default {
  namespaced: true,
  state: {
    builder: {
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
      ingredients: [],
    },
  },
  actions: {
    setDough({ commit, rootState }, doughVariant) {
      const { price, id, scale } = rootState.pizza.dough.find(
        (item) => item.id === doughVariant.id
      );
      commit(
        UPDATE_PIZZA,
        {
          ...namespace,
          value: {
            dough: {
              id,
              price,
              scale,
            },
          },
        },
        { root: true }
      );
    },
    setSize({ commit, rootState }, size) {
      const { scale, multiplier } = rootState.pizza.sizes.find(
        (item) => item.id === size.id
      );
      commit(UPDATE_PIZZA, {
        ...namespace,
        value: {
          size: {
            scale,
            multiplier,
          },
        },
      });
    },
    setSauce({ commit, rootState }, sauce) {
      const { price, sauceVariant } = rootState.pizza.sauces.find(
        (item) => item.id === sauce.id
      );
      commit(
        UPDATE_PIZZA,
        {
          ...namespace,
          value: {
            sauce: {
              price,
              sauceVariant,
            },
          },
        },
        { root: true }
      );
    },
    updateIngredientAmount({ commit, rootState }, data) {
      const index = rootState.pizza.ingredients.findIndex(
        (elem) => elem.id === data.ingredient.id
      );
      const deltaWithSign = Math.sign(`${data.sign}1`);
      commit(UPDATE_INGREDIENT, {
        ...namespace,
        value: {
          deltaWithSign,
          index,
        },
      });
    },
  },
  getters: {
    totalPrice({ builder: { dough, size, sauce, ingredients } }) {
      return (
        (dough.price +
          sauce.price +
          ingredients.reduce(
            (prev, current) => prev + current.quantity * current.price,
            0
          )) *
        size.multiplier
      );
    },
  },
  mutations: {
    [UPDATE_INGREDIENT](state, { entity, value: { index, deltaWithSign } }) {
      state[entity].ingredients[index].quantity += deltaWithSign;
    },
  },
};
