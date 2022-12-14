<template>
  <div id="wrapper">
    <div class="page-not-found">
      <div class="bg-img">
        <img src="@/assets/images/bg-not-found.svg" alt="">
      </div>
      <div class="inner">
        <strong><span>500</span></strong>
        <h5>
          <span>we could not find the </span> <br />
          <div v-if="error != null">
            <br />
            <p>{{ error.message }}</p>
          </div>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomErrorPage",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: "500",
    };
  },
};
</script>
