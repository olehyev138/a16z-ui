<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--announcement">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-announcement.svg"
          />
          <source srcset="@/assets/images/bg-hero-announcement-sm.svg" />
          <img src="@/assets/images/bg-hero-announcement.svg" alt="" />
        </picture>
        <div class="highlight-display hld--amber">
          <h1>Announcements</h1>
        </div>
      </div>
    </header>

    <div class="section-divider" v-if="!$util.isEmpty(featured_announcements)">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>

    <section
      class="featured-cards-announcement"
      v-if="!$util.isEmpty(featured_announcements)"
    >
      <div class="container">
        <Announcements
          :announcements="featured_announcements"
          key="featured_announcements"
        ></Announcements>
        <!-- <div class="cards-slider">
          <a href="#" class="card-news teal decor-style-4">
            <div class="content-t">
              <div class="head">
                <span class="name">Jason Milionis</span>
                <span class="twiter-id">@handlehere</span>
              </div>
              <h5 class="sub-title">
                <span>We proudly contributed to the</span>
                <span>$165M Series B financing round</span>
                <span>that @uniswap Labs announced </span>
                <span>today...</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
              <span class="icon-twitter"></span>
            </div>
          </a>
        </div> -->
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Latest</span>
      </div>
    </div>

    <section class="featured">
      <div class="container">
        <LatestPosts
          v-for="(post, i) in latestPost"
          :postData="post"
          :key="i + 'latest-post-news'"
        ></LatestPosts>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "News",
    };
  },
  name: "NewsPage",
  data() {
    return {
      general_content: [],
      featured_announcements: [],
      latestPost: [],
    };
  },
  computed: {},
  methods: {
    async getAnnouncements() {
      const response = await this.$api.newspage.getAnnouncements();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response.acf;
        this.featured_announcements = response.featured_announcements;
      }
    },
    async getLatestPost() {
      let payload = {
        post_type: ["announcement"],
        posts_per_page: -1,
      };
      const response = await this.$api.common.fetchPosts(payload);
      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          let latestPost = response.posts.data;
          this.latestPost = latestPost;
          // console.log("latestPost == ", latestPost);
        }
      }
    },
  },
  mounted() {
    this.getAnnouncements();
    this.getLatestPost();
  },
};
</script>
