<template>
  <input
    ref="input"
    :value="value"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "AppInput",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
