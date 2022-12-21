<template>
  <div class="container">
    <section v-if="!$util.isEmpty(Compaies)">
      <ul class="highlight-list three-cols has-alphabets has-divider">
        <li v-for="(company, i) in Compaies" :key="i">
          <span class="title">{{ company.title.rendered }}</span>
          <a href="#" class="btn-link underlined">
            27 available roles
            <span class="icon-arrow-right"></span>
          </a>
        </li>
      </ul>
    </section>
    <section v-else></section>
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    Compaies: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {
    async getSinglePost(postId = 0) {
      this.authors = [];
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
      }
    },
  },
  mounted() {},
};
</script>
