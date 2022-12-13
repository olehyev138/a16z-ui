<template>
  <div class="container">
    <div class="article">
      <div class="row">
        <div class="col-sm-2">
          <span class="category-title">11.16.22 / {{ featuredPostData.post_type }}</span>
        </div>
        <div class="col-sm-10 col-md-8">
          <h5>
            <a href="#">{{ featuredPostData.post_title }}</a>
          </h5>
          <span
            class="posted-by"
            v-if="!$util.isEmpty(authors) && authors.length > 1"
          >
            <span v-for="(author, i) in authors" :key="i">
              <a href="#">{{ author }}</a>
              <template v-if="i !== authors.length - 1"
                >&nbsp;and&nbsp;</template
              >
            </span>
          </span>
          <span v-else>
            <a href="#">{{ authors[0] }}</a>
          </span>
          <ul class="tags" v-if="!$util.isEmpty(tags)">
            <li v-for="(tag, i) in tags" :key="i">
              <a class="tag small-tag" href="#">{{ tag }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    featuredPostData: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data() {
    return {
      authors: [],
      tags: [],
    };
  },
  methods: {
    async getSinglePost(postId) {
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
        this.tags = response.tags;
        if (!this.$util.isEmpty(response.acf)) {
          let authors = response.acf.authors ? response.acf.authors : "";
          this.authors = this.$util.stringToArray(authors, "and");
        }
      }
    },
  },
  mounted() {
    this.getSinglePost(this.featuredPostData.ID);
  },
};
</script>
