<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label
          :class="`diameter__input diameter__input--${size.scale}`"
          v-for="size in sizes"
          :key="size.id"
        >
          <RadioButton
            type="radio"
            name="diameter"
            :value="size.scale"
            className="visually-hidden"
            @click="$emit('selectSize', size.id)"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
};
</script>
