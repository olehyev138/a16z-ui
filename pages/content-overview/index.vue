<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--about">
      <div class="container">
        <div class="highlight-display">
          <h1>content</h1>
        </div>
      </div>
    </header>

    <section class="content-overview">
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="article-wrap" v-if="!$util.isEmpty(Allposts)">
              <h6>all posts</h6>
              <ContentoverviewPost
                v-for="(post, i) in posts"
                :featuredPostData="post"
                :key="i + 'sec'"
              ></ContentoverviewPost>

              <client-only>
                <infinite-loading
                  :identifier="infiniteId"
                  @infinite="infiniteHandler"
                >
                  <div slot="no-more"></div>
                  <div slot="no-results"></div>
                </infinite-loading>
              </client-only>
            </div>
          </div>
          <div class="col-sm-3 xs-first">
            <div class="explore-sidebar" data-accordion>
              <h6>explore</h6>
              <div class="link-block">
                <strong class="title" data-more>Focus areas</strong>
                <ul class="link-list">
                  <li><a href="#">company building</a></li>
                  <li><a href="#">tech trends</a></li>
                  <li><a href="#">policy</a></li>
                  <li><a href="#">research</a></li>
                  <li><a href="#">code & engineering</a></li>
                </ul>
              </div>
              <div class="link-block">
                <strong class="title" data-more>topics/ themes</strong>
                <ul class="link-list">
                  <li><a href="#">auction design</a></li>
                  <li><a href="#">cryptography</a></li>
                  <li><a href="#">DAOs</a></li>
                  <li><a href="#">data availability</a></li>
                  <li><a href="#">DeFi</a></li>
                  <li><a href="#">gaming</a></li>
                  <li><a href="#">governance</a></li>
                  <li><a href="#">infrastructure</a></li>
                  <li><a href="#">media/ entertainment</a></li>
                  <li><a href="#">metaverse</a></li>
                  <li><a href="#">NFTs</a></li>
                  <li><a href="#">open source</a></li>
                  <li><a href="#">security</a></li>
                  <li><a href="#">social</a></li>
                  <li><a href="#">smart contracts</a></li>
                  <li><a href="#">tokenomics</a></li>
                  <li><a href="#">zero knowledge</a></li>
                </ul>
              </div>
              <div class="link-block">
                <strong class="title" data-more>series</strong>
                <ul class="link-list">
                  <li><a href="#">state of crypto reports</a></li>
                  <li><a href="#">the canons</a></li>
                </ul>
              </div>
              <div class="link-block">
                <strong class="title" data-more>formats</strong>
                <ul class="link-list">
                  <li><a href="#">podcasts</a></li>
                  <li><a href="#">code/ tools</a></li>
                  <li><a href="#">videos</a></li>
                  <li><a href="#">posts/ articles</a></li>
                  <li><a href="#">papers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "ContentOverviewPage",
  head() {
    return {
      title: "Content Overview",
    };
  },
  data() {
    return {
      Allposts: [],
      posts: [],

      page: 1,
      per_page: 15,
      infiniteId: +new Date(),
    };
  },
  methods: {
    async fetchPosts() {
      let payload = {
        post_type: ["any"],
        posts_per_page: -1,
      };
      const response = await this.$api.common.fetchPosts(payload);

      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          let posts = response.posts.data;
          this.Allposts = posts;
          console.log("editorial page Allposts response = ", this.Allposts);
        }
      }
    },

    async infiniteHandler($state) {
      var spliceData = [];
      let allPost = this.Allposts;

      if (allPost.length > this.per_page) {
        spliceData = this.paginate(allPost);
      } else {
        this.posts.push(...allPost);
        setTimeout(() => {
          $state.complete();
        }, 500);
      }

      if (!this.$util.isEmpty(spliceData)) {
        this.page += 1;
        this.posts.push(...spliceData);
        setTimeout(() => {
          $state.loaded();
        }, 500);
      } else {
        setTimeout(() => {
          $state.complete();
        }, 500);
      }
      console.log("infiniteHandler = this.posts", this.posts);
    },
    paginate(arrayData = []) {
      return arrayData.slice(
        (this.page - 1) * this.per_page,
        this.page * this.per_page
      );
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
