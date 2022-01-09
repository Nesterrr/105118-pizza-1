<template>
  <span :class="`filling filling--${ingridientName}`">
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
    ingridientName: {
      type: String,
      default: "",
    },
  },
};
</script>
