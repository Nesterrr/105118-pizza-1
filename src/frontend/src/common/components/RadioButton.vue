<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    @click="onClick"
    :class="className"
  />
</template>

<script>
export default {
  name: "RadioButton",
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
  },
  methods: {
    onClick() {
      this.$listeners.click();
    },
  },
};
</script>
