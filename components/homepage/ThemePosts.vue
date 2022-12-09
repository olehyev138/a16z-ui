<template>
  <div class="rail-slider" v-if="!$util.isEmpty(posts)">
    <div class="card-wrap" v-for="(post, i) in posts" :key="i">
      <span class="category-title">{{ post.post_type }} /</span>
      <div class="card">
        <div class="img-hold">
          <a href="#">
            <img
              v-if="$util.isEmpty(post.thumb)"
              src="@/assets/images/card-img01.jpg"
              alt="image description"
            />
            <img v-else :src="post.thumb" alt="image description" />
          </a>
        </div>
        <h6>
          <a href="#">{{ post.post_title }}</a>
        </h6>
        <span
          class="posted-by"
          v-if="!$util.isEmpty(post.authorList) && post.authorList.length > 1"
        >
          <span v-for="(author, i) in post.authorList" :key="i">
            <a href="#">{{ author }}&nbsp;</a>
            <template v-if="i !== post.authorList.length - 1"
              >& &nbsp;</template
            >
          </span>
        </span>
        <span v-else>
          <a href="#">{{ post.authorList[0] }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "themePost",
  props: {
    terms: {
      type: String,
      required: true,
      default: "nfts",
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getCategoryWisepost(terms) {
      let payload = {
        post_type: "any",
        posts_per_page: "4",
        tax_query: {
          taxonomy: "themes",
          field: "slug",
          terms: terms,
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
            posts[index].thumb = "";
            let singlePost = await this.getSinglePost(val.ID);
            let authors = singlePost.authors ? singlePost.authors : "";
            posts[index].authorList = this.$util.stringToArray(authors, "and");
            if (!this.$util.isEmpty(response.acf)) {
            }
          });
          this.posts = posts;
        }
      }
    },
    async getSinglePost(postId) {
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
        if (!this.$util.isEmpty(response.acf)) {
          return response.acf;
        }
      }
    },
  },
  mounted() {
    this.getCategoryWisepost(this.terms);
  },
};
</script>
