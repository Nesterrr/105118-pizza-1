<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    @click="$emit('click')"
    :class="className"
    :checked="checked"
  />
</template>

<script>
export default {
  name: "RadioButton",
  model: {
    prop: "value",
    event: "click",
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
