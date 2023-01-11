<template>
  <div class="mainHeader">
    <Nuxt />
    <Cookies></Cookies>
  </div>
</template>

<script>
export default {
  name: "layout-default",
  head() {
    return {
      title: "a16ccrypto",
    };
  },
  mounted() {
    // this.stickyHeader();
    // this.Tabs();
    // this.CustomSelect();
  },
};
</script>
