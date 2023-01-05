<template>
  <div class="container">
    <section v-if="!$util.isEmpty(companyData)">
      <ul class="highlight-list three-cols has-alphabets has-divider">
        <li v-for="(company, i) in companyData" :key="i">
          <span class="title">{{ i }}</span>
          <a href="#" class="btn-link underlined">
            {{ company.length }} available roles
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
      type: Object,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      companyData: [],
    };
  },
  methods: {
    async getSinglePost(postId = 0) {
      this.authors = [];
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
      }
    },
  },
  mounted() {
    const ordered = Object.keys(this.Compaies)
      .sort()
      .reduce((obj, key) => {
        obj[key] = this.Compaies[key];
        return obj;
      }, {});
    this.companyData = ordered;
  },
};
</script>
