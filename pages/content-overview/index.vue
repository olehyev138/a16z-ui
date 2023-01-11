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
          <div
            class="col-sm-3 xs-first"
            v-if="
              !$util.isEmpty(filterfocusArea) ||
              !$util.isEmpty(filterTheme) ||
              !$util.isEmpty(filterSeries) ||
              !$util.isEmpty(filterStage)
            "
          >
            <div class="explore-sidebar onlyMobile">
              <h6>explore</h6>
              <div class="link-block" v-if="!$util.isEmpty(filterfocusArea)">
                <strong
                  class="title"
                  @click="openCloseMobile('focus')"
                  :class="[filterfocusAreaC == true ? 'active' : '']"
                  >Focus areas</strong
                >
                <ul
                  class="link-list"
                  :id="[filterfocusAreaC == true ? 'active' : 'Inactive']"
                >
                  <li
                    v-for="(val, i) in filterfocusArea"
                    :key="i + 'focusAreas'"
                  >
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>
              <div class="link-block" v-if="!$util.isEmpty(filterTheme)">
                <strong
                  class="title"
                  @click="openCloseMobile('theme')"
                  :class="[filterThemeC ? 'active' : '']"
                  >topics/ themes</strong
                >
                <ul
                  class="link-list"
                  :id="[filterThemeC ? 'active' : 'Inactive']"
                >
                  <li v-for="(val, i) in filterTheme" :key="i + 'filterTheme'">
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>

              <div class="link-block" v-if="!$util.isEmpty(filterSeries)">
                <strong
                  class="title"
                  :class="[filterSeriesC ? 'active' : '']"
                  @click="openCloseMobile('series')"
                  >SERIES</strong
                >
                <ul
                  class="link-list"
                  :id="[filterSeriesC ? 'active' : 'Inactive']"
                >
                  <li
                    v-for="(val, i) in filterSeries"
                    :key="i + 'filterSeries'"
                  >
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>
              <div class="link-block" v-if="!$util.isEmpty(filterStage)">
                <strong
                  class="title"
                  @click="openCloseMobile('stage')"
                  :class="[filterStageC ? 'active' : '']"
                  >FORMATS</strong
                >
                <ul
                  class="link-list"
                  :id="[filterStageC ? 'active' : 'Inactive']"
                >
                  <li v-for="(val, i) in filterStage" :key="i + 'filterStage'">
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="explore-sidebar onlydesktop">
              <h6>explore</h6>
              <div class="link-block" v-if="!$util.isEmpty(filterfocusArea)">
                <strong class="title">Focus areas</strong>
                <ul class="link-list">
                  <li
                    v-for="(val, i) in filterfocusArea"
                    :key="i + 'focusAreas'"
                  >
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>
              <div class="link-block" v-if="!$util.isEmpty(filterTheme)">
                <strong class="title">topics/ themes</strong>
                <ul class="link-list">
                  <li v-for="(val, i) in filterTheme" :key="i + 'filterTheme'">
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>

              <div class="link-block" v-if="!$util.isEmpty(filterSeries)">
                <strong class="title">SERIES</strong>
                <ul class="link-list">
                  <li
                    v-for="(val, i) in filterSeries"
                    :key="i + 'filterSeries'"
                  >
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
                </ul>
              </div>
              <div class="link-block" v-if="!$util.isEmpty(filterStage)">
                <strong class="title">FORMATS</strong>
                <ul class="link-list">
                  <li v-for="(val, i) in filterStage" :key="i + 'filterStage'">
                    <a href="javascript:void(0)" v-html="val"></a>
                  </li>
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
      filterfocusArea: [],
      filterTheme: [],
      filterSeries: [],
      filterStage: [],
      filterfocusAreaC: false,
      filterThemeC: false,
      filterSeriesC: false,
      filterStageC: false,

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
      var terms = [];
      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          let posts = response.posts.data;
          this.Allposts = posts;
          // console.log("editorial page Allposts response = ", this.Allposts);
        }
        if (!this.$util.isEmpty(response.posts.terms)) {
          terms = response.posts.terms;
        }
      }
      return terms;
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
    },
    paginate(arrayData = []) {
      return arrayData.slice(
        (this.page - 1) * this.per_page,
        this.page * this.per_page
      );
    },
    exploreItems(arr) {
      var focusAreas = [];
      var series = [];
      var themes = [];
      var stage = [];
      arr.forEach((element, i) => {
        if (!this.$util.isEmpty(element.focus_areas)) {
          const focusAreasData = element.focus_areas;
          focusAreasData.forEach((val) => {
            if (focusAreas.indexOf(val.name) === -1) {
              focusAreas.push(val.name);
            }
          });
        }
        if (!this.$util.isEmpty(element.series)) {
          const seriesData = element.series;
          seriesData.forEach((val) => {
            if (series.indexOf(val.name) === -1) {
              series.push(val.name);
            }
          });
        }
        if (!this.$util.isEmpty(element.themes)) {
          const themesData = element.themes;
          themesData.forEach((val) => {
            if (themes.indexOf(val.name) === -1) {
              themes.push(val.name);
            }
          });
        }
        if (!this.$util.isEmpty(element.stage)) {
          const stageData = element.stage;
          stageData.forEach((stage) => {
            if (stage.indexOf(stage.name) === -1) {
              stage.push(stage.name);
            }
          });
        }
      });

      this.filterfocusArea = focusAreas;
      this.filterSeries = series;
      this.filterTheme = themes;
      this.filterStage = stage;

      console.log("focusAreasData = ", focusAreas);
      console.log("seriesData = ", series);
      console.log("themesData = ", themes);
      console.log("stageData = ", stage);
    },
    openCloseMobile(type = "") {
      switch (type) {
        case "focus":
          this.filterfocusAreaC = !this.filterfocusAreaC;
          this.filterThemeC = false;
          this.filterSeriesC = false;
          this.filterStageC = false;
          break;
        case "theme":
          this.filterfocusAreaC = false;
          this.filterThemeC = !this.filterThemeC;
          this.filterSeriesC = false;
          this.filterStageC = false;
          break;
        case "series":
          this.filterfocusAreaC = false;
          this.filterThemeC = false;
          this.filterSeriesC = !this.filterSeriesC;
          this.filterStageC = false;
          break;
        case "stage":
          this.filterfocusAreaC = false;
          this.filterThemeC = false;
          this.filterSeriesC = false;
          this.filterStageC = !this.filterStageC;
          break;
      }
    },
  },
  async mounted() {
    let allPosts = await this.fetchPosts();
    this.exploreItems(allPosts);
  },
};
</script>
<style scoped>
#active,
#Inactive {
  opacity: 0;
  -moz-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  -webkit-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}
#active {
  display: block;
  opacity: 1;
}
#Inactive {
  display: none;
  opacity: 0;
}
@media (max-width: 768px) {
  .onlydesktop {
    display: none !important;
  }
  .onlyMobile {
    display: block;
  }
}
@media (min-width: 768px) {
  .onlydesktop {
    display: block !important;
  }
  .onlyMobile {
    display: none !important;
  }
}
</style>
