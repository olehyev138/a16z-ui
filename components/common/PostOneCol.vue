<template>
  <div class="article">
    <div class="row">
      <div class="col-sm-2">
        <span class="category-title" v-if="callFrom != 'policyPage'"
          >{{ formatDate(featuredPostData.post_date) }} /
          {{ featuredPostData.post_type }}
        </span>

        <span class="category-title" v-else
          >{{ formatDate(featuredPostData.post_date) }} /
          {{ featuredPostData.post_type }}</span
        >
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

            <template v-if="i !== authors.length - 1 && authors.length == 2"
              >&nbsp;and&nbsp;</template
            >
            <template v-if="i !== authors.length - 1 && authors.length > 2"
              >&nbsp;,&nbsp;</template
            >
          </span>
        </span>
        <span class="posted-by" v-else>
          <a href="#">{{ authors[0] }}</a>
        </span>
        <ul
          class="tags"
          v-if="!$util.isEmpty(tags) && callFrom != 'policyPage'"
        >
          <li v-for="(tag, i) in tags" :key="i">
            <a class="tag small-tag" href="#">{{ tag }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postOneCol",
  props: {
    callFrom: {
      type: String,
      required: false,
    },
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
      this.authors = [];
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
        this.tags = response.tags;
        if (!this.$util.isEmpty(response.acf)) {
          if (!this.$util.isEmpty(response.acf.authors)) {
            var authors = response.acf.authors;
            var authorsArr = [];
            for (var index = 0; index < authors.length; index++) {
              authorsArr.push(authors[index].post_title);
            }
            this.authors = authorsArr;
          }
        }
      }
    },
    formatDate(date) {
      return this.$moment(date).format("YYYY.M.D");
    },
  },
  mounted() {
    this.getSinglePost(this.featuredPostData.ID);
  },
};
</script>
