<template>
  <span :class="`filling filling--${ingredientName}`">
    {{ name }}
  </span>
</template>
<script>
export default {
  name: "SelectorItem",
  props: {
    name: {
      type: String,
      default: "",
    },
    ingredientName: {
      type: String,
      default: "",
    },
  },
};
</script>
