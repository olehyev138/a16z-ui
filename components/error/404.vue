<template>
  <div id="wrapper">
    <div class="page-not-found">
      <div class="inner">
        <strong><span>404</span></strong>
        <h5>
          <span>we could not find the page</span> <br />
          <span>you where looking for</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: "Page not found 404",
    };
  },
};
</script>
