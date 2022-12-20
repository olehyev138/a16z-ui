<template>
  <div id="wrapper">
    <Header></Header>

    <section class="hero-heading">
      <div class="container">
        <div class="highlight-display hld--pacific">
          <h1>Law & <span class="nxt-line">Policy</span></h1>
        </div>
      </div>
    </section>

    <section class="editorial">
      <div class="divider"></div>
      <div class="container">
        <div class="row">
          <div class="col-xs-2 col-sm-2">
            <span class="block-title"
              >({{ !$util.isEmpty(posts) ? posts.length : 0 }})</span
            >
          </div>
          <div class="col-xs-10 col-sm-7">
            <span class="block-title">Results</span>
          </div>
          <div class="col-sm-3">
            <div class="select" v-if="!$util.isEmpty(posts)">
              <select @change="filterPost()" v-model="postType">
                <option
                  v-for="(posttype, i) in postTypes"
                  :key="i + 'filter'"
                  :value="posttype == 'Format/ All' ? 'all' : posttype"
                >
                  {{ posttype }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="featured"
      v-if="!$util.isEmpty(posts) && !$util.isEmpty(filteredPostsOne)"
    >
      <div class="container">
        <PostOneCol
          v-for="(post, i) in filteredPostsOne"
          :featuredPostData="post"
          :key="i + 'sec-1'"
          callFrom="lawPage"
        ></PostOneCol>
        <!-- <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">10.04.22 / article</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6>
                <a href="#"
                  >zero gas wasted: winning the IAmTheOptimizor challenge</a
                >
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <template>
      <div class="section-divider bg-grey">
        <div class="container">
          <span class="block-title">Featured</span>
        </div>
      </div>

      <section class="profile-featured bg-grey">
        <div class="container">
          <div class="row">
            <div
              class="col-sm-4"
              v-for="(post, i) in featured_posts"
              :key="i + 'featured'"
            >
              <PostThreeCol
                :postData="post"
                callFrom="policypage"
              ></PostThreeCol>
            </div>
          </div>
        </div>
      </section>
    </template>

    <section
      class="featured"
      v-if="!$util.isEmpty(posts) && !$util.isEmpty(filteredPostsTwo)"
    >
      <div class="container">
        <PostOneCol
          v-for="(post, i) in filteredPostsTwo"
          :featuredPostData="post"
          :key="i + 'sec-2'"
          callFrom="lawPage"
        ></PostOneCol>
      </div>
    </section>

    <section class="tags-banner" v-if="!$util.isEmpty(tags)">
      <div class="container">
        <div class="tags-banner-box">
          <span class="block-title">popular tags</span>
          <PopularTags :tags="tags" key="editorialPage"></PopularTags>
        </div>
      </div>
    </section>

    <section class="featured" v-if="!$util.isEmpty(posts)">
      <div class="container">
        <PostOneCol
          v-for="(post, i) in lastSectionPost"
          :featuredPostData="post"
          :key="i + 'sec-3'"
          callFrom="lawPage"
        ></PostOneCol>

        <client-only>
          <infinite-loading
            :identifier="infiniteId"
            @infinite="infiniteHandler"
          >
            <!-- <div slot="spinner">
            </div>  -->
            <div slot="no-more"></div>
            <div slot="no-results"></div>
          </infinite-loading>
        </client-only>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "EditorialListPage",
  head() {
    return {
      title: "Editorial list",
      postType: "",
    };
  },
  data() {
    return {
      featured_posts: [],
      filteredPostsOne: [],
      filteredPostsTwo: [],
      filteredPostsThree: [],
      lastSectionPost: [],
      posts: [],
      tags: [],
      postTypes: ["Format/ All"],
      postType: "all",

      page: 1,
      per_page: 5,
      infiniteId: +new Date(),
    };
  },
  methods: {
    async getFeaturePosts() {
      const response = await this.$api.lawAndPolicyPage.get();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.featured_posts = response.featured_resources;
      }
    },
    async fetchPosts() {
      let payload = {
        post_type: "any",
        posts_per_page: -1,
        tax_query: {
          taxonomy: "focus-areas",
          field: "slug",
          terms: "law-policy",
        },
      };
      const response = await this.$api.common.fetchPosts(payload);

      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          let posts = response.posts.data;
          for (var index = 0; index < posts.length; index++) {
            posts[index].authorList = [];
            try {
              if (this.postTypes.indexOf(posts[index].post_type) === -1) {
                this.postTypes.push(posts[index].post_type);
              }
            } catch (error) {}
          }
          this.posts = posts;
          this.filterPost();
          // console.log("editorial page response = ", posts);
        }
      }
    },

    async getSinglePost(postId = 0) {
      var authorsArr = [];
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
        if (!this.$util.isEmpty(response.acf)) {
          if (!this.$util.isEmpty(response.acf.authors)) {
            var authors = response.acf.authors;

            for (var index = 0; index < authors.length; index++) {
              authorsArr.push(authors[index].post_title);
            }
            return authorsArr;
          }
        }
      }
    },
    async getPopularTags() {
      const response = await this.$api.homepage.getPopularTags();
      if (!this.$util.isEmpty(response) && !this.$util.isEmpty(response.tags)) {
        if (!this.$util.isEmpty(response.tags.data)) {
          this.tags = response.tags.data;
        }
      }
    },
    postsSliceIntoChunks(arr, sizes = [3, 3, 1000]) {
      const copy = [...arr];
      const result = [];
      let i = 0;
      while (i <= arr.length && copy.length) {
        result.push(copy.splice(0, sizes[i % sizes.length]));
        i++;
      }
      // console.log(result);
      return result;
    },
    filterPost() {
      this.lastSectionPost = [];
      this.page = 1;
      this.infiniteId += 1 + this.postType;
      if (this.postType !== "all") {
        let dataArr = this.posts.filter((type) => {
          return type.post_type == this.postType;
        });
        if (dataArr.length <= 9) {
          let chunkArr = this.postsSliceIntoChunks(dataArr, [2, 2, 1000]);
          this.filteredPostsOne = !this.$util.isEmpty(chunkArr[0])
            ? chunkArr[0]
            : [];
          this.filteredPostsTwo = !this.$util.isEmpty(chunkArr[1])
            ? chunkArr[1]
            : [];
        } else if (dataArr.length >= 10) {
          let chunkArr = this.postsSliceIntoChunks(dataArr, [3, 4, 1000]);
          this.filteredPostsOne = !this.$util.isEmpty(chunkArr[0])
            ? chunkArr[0]
            : [];
          this.filteredPostsTwo = !this.$util.isEmpty(chunkArr[1])
            ? chunkArr[1]
            : [];
        }
      } else {
        let chunkArr = this.postsSliceIntoChunks(this.posts, [3, 4, 1000]);
        this.filteredPostsOne = !this.$util.isEmpty(chunkArr[0])
          ? chunkArr[0]
          : [];
        this.filteredPostsTwo = !this.$util.isEmpty(chunkArr[1])
          ? chunkArr[1]
          : [];
      }
    },

    async getLastSectionPosts() {
      if (this.postType !== "all") {
        let dataArr = this.posts.filter((type) => {
          return type.post_type == this.postType;
        });
        if (dataArr.length <= 9) {
          let chunkArr = await this.postsSliceIntoChunks(dataArr, [2, 2, 1000]);
          return !this.$util.isEmpty(chunkArr[2]) ? chunkArr[2] : [];
        } else if (dataArr.length >= 10) {
          let chunkArr = await this.postsSliceIntoChunks(dataArr, [3, 4, 1000]);
          return !this.$util.isEmpty(chunkArr[2]) ? chunkArr[2] : [];
        }
      } else {
        let chunkArr = await this.postsSliceIntoChunks(
          this.posts,
          [3, 4, 1000]
        );
        return !this.$util.isEmpty(chunkArr[2]) ? chunkArr[2] : [];
      }
    },

    async infiniteHandler($state) {
      var spliceData = [];
      let allPost = await this.getLastSectionPosts();

      if (allPost.length > this.per_page) {
        spliceData = this.paginate(allPost);
      } else {
        this.lastSectionPost.push(...allPost);
        setTimeout(() => {
          $state.complete();
        }, 500);
      }

      if (!this.$util.isEmpty(spliceData)) {
        this.page += 1;
        this.lastSectionPost.push(...spliceData);
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
  },
  mounted() {
    this.fetchPosts();
    this.getFeaturePosts();
    this.getPopularTags();
  },
};
</script>
