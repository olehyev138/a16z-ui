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

        <template v-if="i !== authors.length - 1 && authors.length == 2"
          >&nbsp;and&nbsp;</template
        >
        <template v-if="i !== authors.length - 1 && authors.length > 2"
          >&nbsp;,&nbsp;</template
        >
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
  },
  mounted() {
    this.getSinglePost(this.postData.ID);
    // console.log(this.postData.ID, this.callFrom);
  },
};
</script>
