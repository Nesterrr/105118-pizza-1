<template>
  <component :is="layout">
    <slot />
  </component>
</template>
<script>
const defaultLayout = "AppLayoutMain";
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
    // modal() {
    //   const hasLoginModal = this.$route.meta.hasModal || false;
    //   return () => import (`@/layouts/${layout}.vue`);
    // },
    // watch: {
    //   $route(newVal) {
    //     console.log(newVal);
    //     this.showModal = newVal.meta?.showModal;
    //   },
    // },
  },
};
</script>
