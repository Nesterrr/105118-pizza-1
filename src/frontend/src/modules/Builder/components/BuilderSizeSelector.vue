<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          :class="`diameter__input diameter__input--${size.scale}`"
          v-for="size in pizza.sizes"
          :key="size.id"
        >
          <RadioButton
            type="radio"
            name="diameter"
            :value="size.scale"
            className="visually-hidden"
            @click="onSelectSize(size)"
            :checked="builder.size.scale === size.scale"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  computed: {
    ...mapState(["pizza"]),
    ...mapState("Builder", ["builder"]),
  },
  methods: {
    ...mapActions("Builder", {
      selectSize: "setSize",
    }),
    async onSelectSize(scale) {
      await this.selectSize(scale);
    },
  },
};
</script>
