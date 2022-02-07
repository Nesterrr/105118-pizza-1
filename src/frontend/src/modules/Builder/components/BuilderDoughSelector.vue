<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          :class="`
            dough__input dough__input--${doughVariant.scale}
          `"
          v-for="doughVariant in pizza.dough"
          :key="doughVariant.id"
        >
          <RadioButton
            type="radio"
            name="dought"
            :value="doughVariant.scale"
            className="visually-hidden"
            @click="onSelectDough(doughVariant)"
            :checked="builder.dough.scale === doughVariant.scale"
          />
          <b>{{ doughVariant.name }}</b>
          <span>Из твердых сортов пшеницы</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  computed: {
    ...mapState(["pizza"]),
    ...mapState("Builder", ["builder"]),
  },
  methods: {
    ...mapActions("Builder", {
      selectDough: "setDough",
    }),
    async onSelectDough(doughVariant) {
      await this.selectDough(doughVariant);
    },
  },
};
</script>
