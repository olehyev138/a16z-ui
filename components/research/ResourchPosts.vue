<template>
  <div class="container">
    <div class="article">
      <div class="row">
        <div class="col-sm-2">
          <span class="category-title">{{ postData.post_type }} /</span>
        </div>
        <div class="col-sm-7">
          <h5>
            <a href="#">{{ postData.post_title }}</a>
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
    <!-- <div class="article has-img">
      <div class="row">
        <div class="col-sm-2">
          <span class="category-title">article /</span>
        </div>
        <div class="col-sm-7">
          <h5><a href="#">auction design for web3</a></h5>
          <span class="posted-by">
            <a href="#">Scott Kominers</a> and
            <a href="#">Tim Roughgarden</a></span
          >
          <ul class="tags">
            <li><a class="tag small-tag" href="#">crypto & web3</a></li>
            <li><a class="tag small-tag" href="#">blockchain</a></li>
            <li><a class="tag small-tag" href="#">ntfs</a></li>
          </ul>
        </div>
        <div class="col-sm-3 col-md-2 col-md-offset-1">
          <div class="img">
            <a href="#">
              <img src="@/assets/images/card-img-06.png" alt="" />
              <span class="icon-play"></span>
            </a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    postData: {
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
  },
};
</script>
