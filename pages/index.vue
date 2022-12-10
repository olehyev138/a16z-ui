<template>
  <div id="wrapper">
    <Header></Header>

    <section class="hero">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-home.svg"
          />
          <source srcset="@/assets/images/bg-hero-home-sm.svg" />
          <img src="@/assets/images/bg-hero-home.svg" alt="" />
        </picture>
        <div class="row">
          <div class="col-md-8">
            <div class="highlight-display">
              <h2>
                {{
                  !$util.isEmpty(general_content.hero_title)
                    ? general_content.hero_title
                    : "we back bold entrepreneurs building the next internet"
                }}
              </h2>
            </div>
            <div class="desc">
              <h6>
                {{
                  !$util.isEmpty(general_content.hero_subtitle)
                    ? general_content.hero_subtitle
                    : "a16z crypto is a venture capital fund that invests in crypto and web3 startups."
                }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider" v-if="!$util.isEmpty(featured_posts)">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.featured_section_title)
            ? general_content.featured_section_title
            : "Featured"
        }}</span>
      </div>
    </div>

    <section class="featured">
      <Featured
        v-for="(post, i) in featured_posts"
        :featuredPostData="post"
        :key="i"
      ></Featured>
    </section>

    <section class="newsletter">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-sm-6">
              <h3>
                <span class="inline-bg-black">{{
                  !$util.isEmpty(general_content.newsletter_title)
                    ? general_content.newsletter_title
                    : "web3 weekly: your guide to the next internet"
                }}</span>
              </h3>
            </div>
            <div class="col-sm-5 col-sm-offset-1">
              <div class="txt">
                <p class="p1">
                  <span class="inline-bg-white">{{
                    !$util.isEmpty(general_content.newsletter_subtitle)
                      ? general_content.newsletter_subtitle
                      : "A weekly newsletter on the latest web3 research, writing, and code"
                  }}</span>
                </p>
              </div>
              <form class="subscribe-form style-1" action="#">
                <div class="form-group">
                  <div class="input">
                    <input
                      type="email"
                      :placeholder="
                        !$util.isEmpty(
                          general_content.newsletter_input_placeholder
                        )
                          ? general_content.newsletter_input_placeholder
                          : 'Enter email address'
                      "
                    />
                    <button type="submit" value="Subscribe">
                      {{
                        !$util.isEmpty(general_content.newsletter_button_text)
                          ? general_content.newsletter_button_text
                          : "Subscribe"
                      }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="announcement bg-grey">
      <div class="container">
        <div class="group-header has-dotted-border">
          <h6>
            {{
              !$util.isEmpty(general_content.announcements_title)
                ? general_content.announcements_title
                : "announcements"
            }}
          </h6>
          <a href="#" class="cta-w-arrow">{{
            !$util.isEmpty(general_content.announcements_cta_text)
              ? general_content.announcements_cta_text
              : "see all"
          }}</a>
        </div>
        <div class="cards-slider">
          <a href="#" class="card-news decor-style-1">
            <div class="content-t">
              <h5>
                <span>Crypto Startup </span>
                <span>School: relaunched </span>
                <span>and expanded</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news decor-style-2 purple">
            <div class="content-t">
              <h5>
                <span>Richard </span>
                <span>Rosenblatt</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news decor-style-3 maroon">
            <div class="content-t">
              <h5>
                <span>investing in</span>
                <span>PROOF</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news decor-style-4 teal">
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
        </div>
        <Announcements></Announcements>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(categories)">
      <div class="container">
        <span class="block-title">Catagories</span>
      </div>
    </div>

    <section class="categories">
      <div class="container">
        <div class="category-row" v-for="(category, i) in categories" :key="i">
          <div class="group-header bg-grey">
            <h6 v-html="category.name"></h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <CategoryWisePosts
            :categorySlug="category.slug"
            :taxonomy="category.taxonomy"
            callFrom="homePage"
          ></CategoryWisePosts>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(themes)">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.themes_section_title)
            ? general_content.themes_section_title
            : "Themes"
        }}</span>
      </div>
    </div>

    <section class="card-group-rail">
      <div class="container">
        <div class="rail-row" v-for="(theme, i) in themes" :key="i">
          <div class="group-header has-dotted-border">
            <h6>{{ theme.name }}</h6>
            <a href="#" class="cta-w-arrow">{{
              !$util.isEmpty(general_content.themes_cta_text)
                ? general_content.themes_cta_text
                : "see all"
            }}</a>
          </div>
          <ThemePosts :terms="theme.slug"></ThemePosts>
        </div>
      </div>
    </section>

    <section class="tags-banner" v-if="!$util.isEmpty(tags)">
      <div class="container">
        <div class="tags-banner-box">
          <span class="block-title">popular tags</span>
          <ul class="tags">
            <template v-if="tags.length > showTagsLimiter">
              <li v-for="(tag, i) in displayedTags" :key="i">
                <a
                  href="javscript:void(0)"
                  class="tag white-tag"
                  v-html="tag.name"
                ></a>
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
                <a
                  href="javscript:void(0)"
                  class="tag white-tag"
                  v-html="tag.name"
                ></a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  head() {
    return {
      title: "Home page",
    };
  },
  data() {
    return {
      general_content: [],
      featured_posts: [],
      categories: [],
      themes: [],
      announcements: [],
      showAllTags: false,
      showTagsLimiter: 15,
      tags: [],
    };
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
    async getAllContent() {
      const response = await this.$api.homepage.get();
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
        this.featured_posts = response.featured_posts;
        this.categories = response.focus_areas;
        this.themes = response.themes;
      }
      // console.log(response);
    },
    async getPopularTags() {
      const response = await this.$api.homepage.getPopularTags();
      if (!this.$util.isEmpty(response) && !this.$util.isEmpty(response.tags)) {
        if (!this.$util.isEmpty(response.tags.data)) {
          this.tags = response.tags.data;
        }
      }
    },
  },
  mounted() {
    this.getAllContent();
    this.getPopularTags();
  },
};
</script>
