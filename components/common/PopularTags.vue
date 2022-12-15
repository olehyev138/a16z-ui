<template>
  <ul class="tags">
    <template v-if="tags.length > showTagsLimiter">
      <li v-for="(tag, i) in displayedTags" :key="i">
        <a href="javscript:void(0)" class="tag white-tag" v-html="tag.name"></a>
      </li>
      <li>
        <a
          href="javascript:void(0)"
          @click="showAllTags = !showAllTags"
          class="tag white-tag"
          >...</a
        >
      </li>
    </template>
    <template v-else>
      <li v-for="(tag, i) in displayedTags" :key="i">
        <a href="javscript:void(0)" class="tag white-tag" v-html="tag.name"></a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    callFrom: {
      type: String,
      required: false,
    },

    tags: {
      type: Array,
      required: true,
      default: {},
    },
  },
  data() {
    return { showAllTags: false, showTagsLimiter: 15 };
  },
  computed: {
    displayedTags() {
      if (this.tags.length > this.showTagsLimiter) {
        if (!this.showAllTags) {
          return this.tags.slice(0, this.showTagsLimiter);
        } else {
          return this.tags;
        }
      } else {
        return this.tags;
      }
    },
  },
  methods: {
    async getPopularTags() {
      const response = await this.$api.homepage.getPopularTags();
      if (!this.$util.isEmpty(response) && !this.$util.isEmpty(response.tags)) {
        if (!this.$util.isEmpty(response.tags.data)) {
          this.tags = response.tags.data;
        }
      }
    },
  },
  mounted() {},
};
</script>
