<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    @click="onClick"
    :class="className"
    :checked="checked"
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
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
