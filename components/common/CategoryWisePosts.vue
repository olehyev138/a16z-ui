<template>
  <div v-if="!$util.isEmpty(posts)">
    <div class="article" v-for="(post, i) in posts" :key="i">
      <div class="row">
        <div class="col-sm-2">
          <template v-if="callFrom == 'homePage'">
            <span class="category-title">{{ post.post_type }} /</span>
          </template>
          <template v-if="callFrom == 'policyPage'">
            <span class="category-title">09.02.22 / article</span>
          </template>
        </div>
        <div class="col-sm-10 col-md-8">
          <h6>
            <a href="#">{{ post.post_title }}</a>
          </h6>
          <span
            class="posted-by"
            v-if="!$util.isEmpty(post.authorList) && post.authorList.length > 1"
          >
            <span v-for="(author, i) in post.authorList" :key="i">
              <a href="#">{{ author }}</a>
              <template v-if="i !== post.authorList.length - 1"
                >&nbsp;and&nbsp;</template
              >
            </span>
          </span>
          <span v-else>
            <a href="#">{{ post.authorList[0] }}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    callFrom: {
      type: String,
      required: false,
      default: "homepage",
    },
    categorySlug: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      posts: [],
      authors: [],
    };
  },
  methods: {
    async getCategoryWisepost(categorySlug) {
      let payload = {
        post_type: ["any"],
        posts_per_page: "2",
        tax_query: {
          taxonomy: "focus-areas",
          field: "slug",
          terms: categorySlug,
        },
      };
      const response = await this.$api.common.getCategoryWisepost(payload);
      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          let posts = response.posts.data;
          posts.forEach(async (val, index) => {
            posts[index].authorList = [];
            let authorArr = await this.getSinglePost(val.ID);
            posts[index].authorList = authorArr;
          });
          this.posts = posts;
        }
      }
    },
    async getSinglePost(postId) {
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
        if (!this.$util.isEmpty(response.acf)) {
          let authors = response.acf.authors ? response.acf.authors : "";
          return this.$util.stringToArray(authors, "and");
        }
      }
    },
  },
  mounted() {
    this.getCategoryWisepost(this.categorySlug);
  },
};
</script>
