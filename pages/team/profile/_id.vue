<template>
  <div id="wrapper">
    <Header></Header>
    <section class="hero-heading">
      <div class="container">
        <div class="highlight-display hld--lime">
          <h1
            v-html="
              fullName(!$util.isEmpty(getTeamMember) ? getTeamMember.name : '')
            "
          ></h1>
        </div>
      </div>
    </section>

    <section class="profile-detail">
      <div class="container">
        <div class="group-header has-dotted-border">
          <h6>
            {{
              !$util.isEmpty(general_content.role) ? general_content.role : ""
            }}
          </h6>
        </div>
        <div class="profile-body">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="img">
                <img
                  v-if="!$util.isEmpty(getTeamMember)"
                  :src="getTeamMember.photo"
                  alt=""
                />
                <img v-else src="@/assets/images/img-chris-dixon.png" alt="" />
              </div>
              <span class="des" v-if="!$util.isEmpty(general_content.ens)"
                >ENS / {{ general_content.ens }}</span
              >
              <ul
                class="social-networks"
                v-if="!$util.isEmpty(general_content.socials)"
              >
                <li v-for="(social, i) in general_content.socials" :key="i">
                  <a :href="social.social_link">{{ social.social_title }}</a>
                </li>
              </ul>
            </div>
            <div
              class="col-md-offset-1 col-sm-6"
              v-html="
                !$util.isEmpty(general_content.about)
                  ? $util.showHtml(general_content.about)
                  : ''
              "
            ></div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider bg-grey" v-if="!$util.isEmpty(featured_posts)">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>

    <section
      class="profile-featured bg-grey"
      v-if="!$util.isEmpty(featured_posts)"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-4" v-for="(post, i) in featured_posts" :key="i">
            <PostThreeCol
              :postData="post"
              callFrom="teamProfilePage"
            ></PostThreeCol>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(latest_posts)">
      <div class="container mt-3">
        <span class="block-title">Latest</span>
      </div>
    </div>

    <section class="featured" v-if="!$util.isEmpty(latest_posts)">
      <div class="container">
        <div
          class="article"
          v-for="(post, i) in latest_posts"
          :key="i + 'Latest'"
        >
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">{{ post.type }} /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6>
                <a href="javascript:void(0)"
                  ><span v-html="$util.showHtml(post.title.rendered)"></span
                ></a>
              </h6>
              <span
                class="posted-by"
                v-if="!$util.isEmpty(post.authors) && post.authors.length > 1"
              >
                <span v-for="(author, i) in post.authors" :key="i">
                  <a href="javascript:void(0)">{{ author.post_title }}</a>

                  <template
                    v-if="
                      i !== post.authors.length - 1 && post.authors.length == 2
                    "
                    >&nbsp;and&nbsp;</template
                  >
                  <template
                    v-if="
                      i !== post.authors.length - 1 && post.authors.length > 2
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
                <li><a class="tag small-tag" href="#">code releases</a></li>
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">open source</a></li>
                <li><a class="tag small-tag" href="#">a16z crypto</a></li>
              </ul> -->
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
  name: "TeamProfilePage",
  head() {
    return {
      title: "Team profile",
    };
  },
  data() {
    return {
      general_content: [],
      featured_posts: [],
      latest_posts: [],
    };
  },
  computed: {
    getTeamMember() {
      let storeData = this.$store.getters["teamMembers/getTeamMembers"];
      let memberId = this.$route.params.id;
      let member = storeData.find((member) => member.id == memberId);
      return member;
    },
  },
  methods: {
    fullName(name) {
      if (!this.$util.isEmpty(name)) {
        var fullName = name.split(" ");
        if (fullName.length == 1) {
          return fullName[0];
        } else {
          let lastName = fullName.slice(-1);
          return name.replace(
            lastName[0],
            `<span class="nxt-line">${lastName[0]}</span>`
          );
        }
      }
    },
    async getTeamMemberContent(id) {
      const response = await this.$api.teampage.getTeamMember(id);

      if (!this.$util.isEmpty(response) && !this.$util.isEmpty(response.acf)) {
        this.general_content = response.acf;
        this.featured_posts = response.acf.featured_posts;
      }
    },
    async getTeamMemberLatestPosts(id) {
      const response = await this.$api.teampage.getTeamMemberLatestPosts(id);
      if (!this.$util.isEmpty(response)) {
        response.forEach((element, i) => {
          if (!this.$util.isEmpty(element.acf.authors)) {
            response[i]["authors"] = element.acf.authors;
          }
        });
        this.latest_posts = response;
      }
    },
  },
  mounted() {
    this.getTeamMemberContent(this.$route.params.id);
    this.getTeamMemberLatestPosts(this.$route.params.id);
  },
};
</script>
