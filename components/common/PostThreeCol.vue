<template>
  <div class="box" v-if="!$util.isEmpty(postData)">
    <span class="category-title"
      >{{
        !$util.isEmpty(postData.post_type) ? postData.post_type : "article"
      }}
      /</span
    >
    <h6>
      <a href="#">{{ postData.post_title }}</a>
    </h6>
    <div class="authors" v-if="!$util.isEmpty(authors) && authors.length > 1">
      <span v-for="(author, i) in authors" :key="i">
        <a href="#">{{ author }}</a>
        <template v-if="i !== authors.length - 1">&nbsp;and&nbsp;</template>
      </span>
    </div>
    <div v-else>
      <a href="#">{{ authors[0] }}</a>
    </div>
    <ul class="tags" v-if="!$util.isEmpty(tags)">
      <li v-for="(tag, i) in tags" :key="i">
        <a class="tag small-tag" href="#">{{ tag }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "postThreeCol",
  props: {
    callFrom: {
      type: String,
      required: false,
    },
    postData: {
      type: Object,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      authors: [],
      tags: [],
    };
  },
  methods: {
    async getSinglePost(postId = 0) {
      const response = await this.$api.common.getSinglePost(postId);
      // console.log("getSinglePost = ", response);
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
    // this.getSinglePost(this.postData.ID);
    console.log(this.postData.ID, this.callFrom);
  },
};
</script>
