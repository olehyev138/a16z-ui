<template>
  <div id="wrapper">
    <Header></Header>

    <section class="hero-heading">
      <div class="container">
        <div class="highlight-display">
          <h1 v-if="$util.isEmpty($route.params.postType)">Papers</h1>
          <h1 v-else>{{ $route.params.postType }}</h1>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(postData)">
      <div class="container">
        <span class="block-title">({{ totalPost }})Results</span>
      </div>
    </div>

    <section class="search-results-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-2">
            <a href="#" class="filter-opener">filter</a>
            <div class="filter-boxes-wrap">
              <div class="filter-box" v-if="!$util.isEmpty(filterfocusArea)">
                <a
                  href="javascript:void(0)"
                  @click="toggleFilters('filterFocusAreaToggle')"
                  :class="[filterFocusAreaToggle == false ? 'active' : '']"
                  class="search-topic"
                  >Focus Areas</a
                >
                <ul class="topic-list" v-if="!filterFocusAreaToggle">
                  <li v-for="(area, i) in filterfocusArea" :key="i + 'area'">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        :value="area.id"
                        v-model="filterfocusAreaSelected"
                        @change="filerPosts()"
                      />
                      <span class="fake-input"></span>
                      <span
                        class="fake-label"
                        v-html="$util.showHtml(area.name)"
                      ></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="filter-box" v-if="!$util.isEmpty(filterTheme)">
                <a
                  href="javascript:void(0)"
                  @click="toggleFilters('filterTopicToggle')"
                  :class="[filterTopicToggle == false ? 'active' : '']"
                  class="search-topic"
                  >topics/ themes</a
                >
                <ul class="topic-list" v-if="!filterTopicToggle">
                  <li v-for="(theme, i) in filterTheme" :key="i + 'theme'">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        :value="theme.id"
                        v-model="filterThemeSelected"
                        @change="filerPosts()"
                      />
                      <span class="fake-input"></span>
                      <span
                        class="fake-label"
                        v-html="$util.showHtml(theme.name)"
                      ></span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="filter-box" v-if="!$util.isEmpty(filterSeries)">
                <a
                  href="javascript:void(0)"
                  @click="toggleFilters('filterSeriesToggle')"
                  :class="[filterSeriesToggle == false ? 'active' : '']"
                  class="search-topic"
                  >series</a
                >
                <ul class="topic-list" v-if="!filterSeriesToggle">
                  <li v-for="(series, i) in filterTheme" :key="i + 'series'">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        :value="series.id"
                        v-model="filterSeriesSelected"
                        @change="filerPosts()"
                      />
                      <span class="fake-input"></span>
                      <span
                        class="fake-label"
                        v-html="$util.showHtml(series.name)"
                      ></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8 col-md-10" v-if="!$util.isEmpty(postData)">
            <div
              v-for="(post, i) in postData"
              :key="i"
              class="article article-searched-result"
            >
              <span class="category-title">{{ formatDate(post.date) }}</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="javascript:void(0)"
                      ><span v-html="$util.showHtml(post.title.rendered)"></span
                    ></a>
                  </h6>
                  <span
                    class="posted-by"
                    v-if="
                      !$util.isEmpty(post.authors) && post.authors.length > 1
                    "
                  >
                    <span v-for="(author, i) in post.authors" :key="i">
                      <a href="javascript:void(0)">{{ author.post_title }}</a>

                      <template
                        v-if="
                          i !== post.authors.length - 1 &&
                          post.authors.length == 2
                        "
                        >&nbsp;and&nbsp;</template
                      >
                      <template
                        v-if="
                          i !== post.authors.length - 1 &&
                          post.authors.length > 2
                        "
                        >&nbsp;,&nbsp;</template
                      >
                    </span>
                  </span>
                  <span class="posted-by" v-else>
                    <a href="javascript:void(0)">{{
                      post.authors[0].post_title
                    }}</a>
                  </span>
                  <!-- <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul> -->
                </div>
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
  name: "SearchResultsPage",
  head() {
    return {
      title: "Archive posts",
    };
  },
  data() {
    return {
      filterFocusAreaToggle: false,
      filterTopicToggle: false,
      filterSeriesToggle: false,
      filterfocusArea: [],
      filterTheme: [],
      filterSeries: [],
      filterfocusAreaSelected: [],
      filterThemeSelected: [],
      filterSeriesSelected: [],
      totalPost: 0,
      postData: [],
      postRawData: [],
    };
  },
  methods: {
    toggleFilters(filterItem = "filterFocusAreaToggle") {
      if (filterItem == "filterFocusAreaToggle") {
        this.filterFocusAreaToggle = !this.filterFocusAreaToggle;
      } else if (filterItem == "filterTopicToggle") {
        this.filterTopicToggle = !this.filterTopicToggle;
      } else if (filterItem == "filterSeriesToggle") {
        this.filterSeriesToggle = !this.filterSeriesToggle;
      }
    },
    formatDate(date) {
      return this.$moment(date).format("YYYY.M.D");
    },
    async getTypeWisePosts(postType) {
      const response = await this.$api.postType.getTypeWisePosts(postType);
      if (!this.$util.isEmpty(response)) {
        var focusAreasIds = [];
        var seriesIds = [];
        var themesIds = [];
        response.forEach((element, i) => {
          if (!this.$util.isEmpty(element.acf.authors)) {
            response[i]["authors"] = element.acf.authors;
          }

          if (!this.$util.isEmpty(element["focus-areas"])) {
            const focusAreas = element["focus-areas"];
            focusAreas.forEach((val) => {
              if (focusAreasIds.indexOf(val) === -1) {
                focusAreasIds.push(val);
              }
            });
          }
          if (!this.$util.isEmpty(element["series"])) {
            const series = element["series"];
            series.forEach((val) => {
              if (seriesIds.indexOf(val) === -1) {
                seriesIds.push(val);
              }
            });
          }
          if (!this.$util.isEmpty(element["themes"])) {
            const themes = element["themes"];
            themes.forEach((theme) => {
              if (themesIds.indexOf(theme) === -1) {
                themesIds.push(theme);
              }
            });
          }
        });

        await this.getFilterFocusArea(focusAreasIds);
        await this.getFilterThemes(themesIds);
        await this.getFilterSeries(seriesIds);
        this.totalPost = response.length;
        this.postRawData = response;
        console.log("created = getTypeWisePosts ", response);
      }
    },
    // async getPostTags(postId) {
    //   const response = await this.$api.common.getSinglePost(postId);
    //   var tags = [];
    //   if (!this.$util.isEmpty(response)) {
    //     tags = response.tags;
    //   }
    //   return tags;
    // },
    async getFilterFocusArea(focusAreasIds = []) {
      if (!this.$util.isEmpty(focusAreasIds)) {
        const response = await this.$api.postType.getFilterFocusArea();
        if (
          !this.$util.isEmpty(response) &&
          !this.$util.isEmpty(focusAreasIds)
        ) {
          // console.log("focusAreasIds = ", focusAreasIds);
          this.filterfocusArea = response.filter(function (e) {
            return focusAreasIds.indexOf(e.id) != -1;
          });
          // console.log("this.filterfocusArea = ", this.filterfocusArea);
        }
      }
    },
    async getFilterThemes(themesIds = []) {
      if (!this.$util.isEmpty(themesIds)) {
        const response = await this.$api.postType.getFilterThemes();
        if (!this.$util.isEmpty(response) && !this.$util.isEmpty(themesIds)) {
          // console.log("themesIds = ", themesIds);
          this.filterTheme = response.filter(function (e) {
            return themesIds.indexOf(e.id) != -1;
          });
          // console.log("this.filterTheme = ", this.filterTheme);
        }
      }
    },
    async getFilterSeries(seriesIds = []) {
      if (!this.$util.isEmpty(seriesIds)) {
        const response = await this.$api.postType.getFilterSeries();
        if (!this.$util.isEmpty(response) && !this.$util.isEmpty(seriesIds)) {
          // console.log("seriesIds = ", seriesIds);
          this.filterSeries = response.filter(function (e) {
            return seriesIds.indexOf(e.id) != -1;
          });
          // console.log("this.filterSeries = ", this.filterSeries);
        }
      }
    },
    filerPosts() {
      if (
        !this.$util.isEmpty(this.filterfocusAreaSelected) ||
        !this.$util.isEmpty(this.filterThemeSelected) ||
        !this.$util.isEmpty(this.filterSeriesSelected)
      ) {
        console.log("filerPosts = if");
        var filteredData = [];
        var focusAreas = [];
        var themes = [];
        var series = [];
        this.postRawData.forEach((element) => {
          focusAreas = element["focus-areas"];
          themes = element["themes"];
          series = element["series"];

          if (!this.$util.isEmpty(focusAreas)) {
            let focusArea = focusAreas.filter((e) => {
              return this.filterfocusAreaSelected.indexOf(e) != -1;
            });
            if (!this.$util.isEmpty(focusArea)) {
              filteredData.push(element);
            }
          }

          if (!this.$util.isEmpty(themes)) {
            let theme = themes.filter((e) => {
              return this.filterThemeSelected.indexOf(e) != -1;
            });
            if (!this.$util.isEmpty(theme)) {
              filteredData.push(element);
            }
          }

          if (!this.$util.isEmpty(series)) {
            let seris = series.filter((e) => {
              return this.filterSeriesSelected.indexOf(e) != -1;
            });
            if (!this.$util.isEmpty(seris)) {
              filteredData.push(element);
            }
          }
        });

        this.postData = filteredData;
      } else {
        this.postData = this.postRawData;
      }
    },
  },
  async created() {
    await this.getTypeWisePosts(this.$route.params.postType);
    this.filerPosts();
  },
};
</script>
