<template>
  <input
    type="text"
    :name="name"
    class="counter__input"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "CounterInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "0",
    },
    className: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput() {
      // console.log("handleInput: CounterInput", event.target);
    },
  },
};
</script>
