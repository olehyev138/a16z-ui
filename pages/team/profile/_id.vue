<template>
  <div id="wrapper">
    <Header></Header>
    <section class="hero-heading" v-if="!$util.isEmpty(getTeamMember)">
      <div class="container">
        <div class="highlight-display hld--lime">
          <h1 v-html="fullName(getTeamMember.name)"></h1>
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
            <PostThreeCol :postData="post"></PostThreeCol>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Latest</span>
      </div>
    </div>

    <section class="featured">
      <div class="container">
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6>
                <a href="#">Crypto Startup School: relaunched and expanded</a>
              </h6>
              <span class="posted-by">
                <a href="#">Anthony Albanese</a>, <a href="#">Bryan Chiang</a>,
                <a href="#">Sonal Chokshi</a>, <a href="#">Eddy Lazzarin</a>,
                <a href="#">Justin Thaler</a>, and
                <a href="#">Ali Yahya</a></span
              >
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6><a href="#">Richard Rosenblatt</a></h6>
              <span class="posted-by"><a href="#">Chris Dixon</a></span>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">a16z crypto</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6><a href="#">the can’t be evil NFT licenses</a></h6>
              <span class="posted-by"
                ><a href="#">Daren Matsuoka</a>, <a href="#">Chris Dixon</a>,
                <a href="#">Eddy Lazzarin</a>, and
                <a href="#">Robert Hackett</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">code releases</a></li>
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">open source</a></li>
                <li><a class="tag small-tag" href="#">a16z crypto</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6>
                <a href="#"
                  >blockspace: what comes after PCs, broadband, and
                  smartphones</a
                >
              </h6>
              <span class="posted-by"
                ><a href="#">Chris Dixon</a> and
                <a href="#">Mario Gabriele</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">a16z crypto</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6>
                <a href="#">introducing the 2022 state of crypto report</a>
              </h6>
              <span class="posted-by"
                ><a href="#">Daren Matsuoka</a>, <a href="#">Chris Dixon</a>,
                <a href="#">Eddy Lazzarin</a>, and
                <a href="#">Robert Hackett</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">gaming</a></li>
                <li><a class="tag small-tag" href="#">social media</a></li>
                <li>
                  <a class="tag small-tag" href="#">online communities</a>
                </li>
                <li>
                  <a class="tag small-tag" href="#">the creator community</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h6><a href="#">investing in lightspark</a></h6>
              <span class="posted-by"
                ><a href="#">Sriram Krishnan</a> and
                <a href="#">Chris Dixon</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web3</a></li>
                <li><a class="tag small-tag" href="#">announcements</a></li>
              </ul>
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

        console.log("response = ", response);
        this.featured_posts = response.acf.featured_posts;
      }
    },
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.getTeamMemberContent(this.$route.params.id);
  },
};
</script>
