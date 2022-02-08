import Vue from "vue";
import Vuex from "vuex";
import { SET_ENTITY, UPDATE_PIZZA } from "@/store/mutations-types";
import modules from "@/store/modules";
import { normalizePizza } from "@/common/helpers";
import pizza from "@/static/pizza.json";

Vue.use(Vuex);

const state = () => ({
  pizza: {
    dough: [],
    ingredients: [],
    sauces: [],
    sizes: [],
  },
});

const actions = {
  async init({ dispatch }) {
    dispatch("fetchPizza");
  },
  fetchPizza({ commit }) {
    const data = normalizePizza(pizza);
    commit(SET_ENTITY, {
      module: null,
      entity: "pizza",
      value: data,
    });
    commit(UPDATE_PIZZA, {
      module: "Builder",
      entity: "builder",
      value: { ingredients: data.ingredients },
    });
  },
};
const mutations = {
  [SET_ENTITY](state, { module, entity, value }) {
    module ? (state[module][entity] = value) : (state[entity] = value);
  },
  [UPDATE_PIZZA](state, { module, entity, value }) {
    if (module) {
      state[module][entity] = {
        ...state[module][entity],
        ...value,
      };
    } else {
      state[entity] = {
        ...state[entity],
        ...value,
      };
    }
  },
};
export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [],
  modules,
});
