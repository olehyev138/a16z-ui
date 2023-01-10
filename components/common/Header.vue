<!-- Please remove this file from your project -->
<template>
  <header id="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/"
          ><img src="~/assets/images/logo.svg" alt="a16zcrypto"
        /></NuxtLink>
      </div>
      <div class="header-r">
        <NuxtLink to="/follow-us" class="btn btn--sm">follow us</NuxtLink>
        <button
          type="button"
          class="search"
          @click="openSearchNav(), fetchPosts()"
        >
          <span class="icon-search"></span>
        </button>
        <button
          type="button"
          class="menu nav-opener"
          @click="openNav(), fetchPosts()"
        >
          <span class="icon-menu"></span>
        </button>
      </div>
    </div>

    <div class="menu-slide">
      <a
        href="javascript:void(0)"
        @click="closeNavbar()"
        class="menu-close icon-cross nav-opener"
      ></a>
      <a
        href="javascript:void(0)"
        class="menu-search icon-search search-opener"
        @click="openSearchwindow()"
      ></a>
      <div class="inner">
        <div class="wrap">
          <nav>
            <span class="menu-title">menu</span>
            <ul class="nav" style="display: block">
              <li>
                <NuxtLink
                  :class="currentRoute == 'about' ? 'active' : ''"
                  to="/about"
                  >about</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :class="currentRoute == 'team' ? 'active' : ''"
                  to="/team"
                  >team</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :class="currentRoute == 'portfolio' ? 'active' : ''"
                  to="/portfolio"
                  >portfolio</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :class="
                    currentRoute == 'careers-jobs-with-us' ? 'active' : ''
                  "
                  to="/careers-jobs-with-us"
                  >jobs</NuxtLink
                >
              </li>

              <li>
                <a
                  href="javascript:void(0)"
                  @click="openNavLinkOpen()"
                  id="contentWindow"
                  class="hasdrop-a"
                  >content</a
                >
                <div class="drop-menu">
                  <div class="i1">
                    <div class="inner">
                      <div class="wrap">
                        <div class="sub-menu-holder">
                          <div class="sub-menu">
                            <span class="menu-title">Focus Areas</span>
                            <ul>
                              <li>
                                <a href="#"><span>01 /</span> law & policy</a>
                              </li>
                              <li>
                                <a href="#"
                                  ><span>02 /</span> company building</a
                                >
                              </li>
                              <li>
                                <a href="#"
                                  ><span>03 /</span> research in practice
                                </a>
                              </li>
                              <li>
                                <a href="#"><span>04 /</span> tech trends</a>
                              </li>
                              <li>
                                <a href="#"><span>02 /</span> builder blocks</a>
                              </li>
                            </ul>
                          </div>
                          <div class="sub-menu">
                            <span class="menu-title">popular topics</span>
                            <ul>
                              <li><a href="#">decentralization</a></li>
                              <li><a href="#">zero knowledge</a></li>
                              <li><a href="#">security</a></li>
                              <li><a href="#">NFTs</a></li>
                              <li><a href="#">state of crypto</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div class="nav-footer">
            <form class="subscribe-form" action="#">
              <div class="form-group">
                <label for="sign-up">Newsletter sign up</label>
                <div class="input">
                  <input
                    id="sign-up"
                    type="email"
                    placeholder="Enter email address"
                  />
                  <button type="submit" value="Subscribe">Subscribe</button>
                </div>
              </div>
            </form>
            <ul class="sign-in-with">
              <li><a href="#">twitter</a></li>
              <li><a href="#">github</a></li>
              <li><a href="#">linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="search-slide">
      <div class="search-bar">
        <button
          class="close search-opener"
          @click="closeSearchWindow()"
        ></button>
        <div class="inner">
          <div class="wrap">
            <div class="search-form">
              <label for="search" class="menu-title">search</label>
              <div class="input">
                <input
                  type="text"
                  v-model="searchQuery"
                  @input="debounceSearch(allPosts)"
                  placeholder="Search"
                />
                <button>
                  <span
                    @click="clearSearchQuery()"
                    class="icon-cross"
                    :style="
                      !$util.isEmpty(searchQuery)
                        ? 'display:block'
                        : 'display:none'
                    "
                  >
                  </span>
                  <span
                    class="icon-search"
                    :style="
                      $util.isEmpty(searchQuery)
                        ? 'display:block'
                        : 'display:none'
                    "
                  ></span>
                </button>
              </div>
            </div>
            <div class="search-results" v-if="!$util.isEmpty(searchResult)">
              <ul>
                <li
                  v-for="(post, i) in searchResult.slice(0, 6)"
                  :key="i + 'search-result'"
                >
                  <span class="category-title">{{ post.post_type }} /</span>
                  <span class="title">
                    <a
                      href="javascript:void(0)"
                      v-html="highlight(post.post_title)"
                    >
                    </a>
                  </span>
                </li>
              </ul>
              <a
                href="javascript:void(0)"
                class="link"
                @click="goToSearchResultPage()"
                v-if="searchResult.length > 6"
                >see more results</a
              >
            </div>
            <div
              class="search-results"
              v-if="$util.isEmpty(searchResult) && !$util.isEmpty(searchQuery)"
            >
              <span class="title">
                <a href="javascript:void(0)">
                  {{ searchEmpty }}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      debounce: null,
      searchQuery: "",
      searchEmpty: "Searching....",
      searchResult: [],
      allPosts: [],
    };
  },
  computed: {
    currentRoute() {
      return this.$nuxt.$route.name ? this.$nuxt.$route.name : "";
    },
  },
  methods: {
    openNav() {
      if (process.client) {
        $(".mainHeader").addClass("nav-active");
        this.openNavCommon();
      }
    },
    openSearchNav() {
      if (process.client) {
        $(".mainHeader").addClass("nav-active search-active");
        this.openNavCommon();
      }
    },
    openSearchwindow() {
      if (process.client) {
        $(".mainHeader").toggleClass("search-active");
      }
      console.log("openSearchwindow:call");
    },
    closeSearchWindow() {
      if (process.client) {
        $(".mainHeader").removeClass("search-active");
      }
      console.log("closeSearchWindow:call");
    },
    closeNavbar() {
      console.log("closeNavbar:call");
      if (process.client) {
        $(".mainHeader").removeClass("nav-active");
        $(".mainHeader").removeClass("search-active");
        $("#contentWindow").removeClass("active");
      }
      this.clearSearchQuery();
    },
    openNavCommon() {
      if (process.client) {
        $(".nav li").each(function () {
          var item = $(this);
          var drop = item.find("ul");
          var link = item.find("a").eq(0);
          if (drop.length) {
            item.addClass("hasdrop");
            if (link.length)
              link
                .addClass("hasdrop-a")
                .attr({ "data-more": "", "data-outside": "" });
          }
        });
      }
    },
    openNavLinkOpen() {
      if (process.client) {
        if ($(".mainHeader").hasClass("search-active")) {
          $(".mainHeader").removeClass("search-active");
        }
        $("#contentWindow").toggleClass("active");
        $(".drop-menu").toggle();
      }
    },
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
          this.allPosts = posts;
          console.log("navbar search  response allPosts = ", this.allPosts);
        }
      }
    },
    debounceSearch(postData = []) {
      this.searchEmpty = "Searching...";
      this.searchResult = [];
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (!this.$util.isEmpty(this.searchQuery)) {
          let dataArr = postData.filter((type) => {
            return (
              type.post_title
                .toLowerCase()
                .indexOf(this.searchQuery.toLowerCase()) >= 0
            );
          });
          this.searchResult = dataArr;
          if (this.$util.isEmpty(dataArr)) {
            this.searchEmpty = "No data found!!";
          }
          console.log("debounceSearch = ", dataArr);
        }
      }, 600);
    },
    clearSearchQuery() {
      this.searchResult = [];
      this.searchQuery = "";
    },
    goToSearchResultPage() {
      this.$nuxt.$router.push({
        path: "/search-results",
        query: { term: this.searchQuery },
      });
    },
    highlight(text) {
      if (!this.$util.isEmpty(this.searchQuery)) {
        return text.replace(new RegExp(this.searchQuery, "gi"), (match) => {
          return "<span>" + match + "</span>";
        });
      }
    },
  },
  mounted() {},
  created() {},
};
</script>
