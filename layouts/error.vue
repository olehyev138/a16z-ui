<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from "~/components/error/404.vue";
import error500 from "~/components/error/500.vue";
export default {
  name: "layout-error",
  head() {
    return {
      title: "404",
    };
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error500;
    },
  },
};
</script>
