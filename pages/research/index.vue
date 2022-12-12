<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--research">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-research.svg"
          />
          <source srcset="@/assets/images/bg-hero-research-sm.svg" />
          <img src="@/assets/images/bg-hero-research.svg" alt="" />
        </picture>
        <div class="highlight-display hld--teal">
          <h1>Research</h1>
        </div>
      </div>
    </header>

    <section class="text-block text-block--research">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h5
              v-html="
                !$util.isEmpty(general_content.subtitle)
                  ? $util.showHtml(general_content.subtitle)
                  : ''
              "
            ></h5>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p
                v-html="
                  !$util.isEmpty(general_content.intro_text)
                    ? $util.showHtml(general_content.intro_text)
                    : ''
                "
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!this.$util.isEmpty(our_focus_items)">
      <div class="container">
        <span class="block-title">our focus:</span>
      </div>
    </div>

    <section
      class="profile-featured"
      v-if="!this.$util.isEmpty(our_focus_items)"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-sm-4"
            v-for="(our_focus_item, i) in our_focus_items"
            :key="i"
          >
            <div class="box">
              <p>
                {{ our_focus_item.our_focus_text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider bg-grey">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>

    <section class="profile-featured bg-grey">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6><a href="#">on-chain trusted setup ceremony</a></h6>
              <div class="authors">
                <a href="#">Joseph Bonneau</a> and
                <a href="#">Valeria Nikolaenko</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6>
                <a href="#"
                  >a call to the SEC: treat crypto assets as if clients
                  matter</a
                >
              </h6>
              <div class="authors">
                <a href="#">Justin Thaler</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6>
                <a href="#">‘proof-of-merge’ NFT to commemorate ethereum</a>
              </h6>
              <div class="authors">
                <a href="#">Alex Immerman</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(resources_posts)">
      <div class="container">
        <span class="block-title">
          {{
            !$util.isEmpty(general_content.resources_title)
              ? general_content.resources_title
              : "Resources"
          }}</span
        >
      </div>
    </div>

    <section class="featured">
      <ResourchPosts
        v-for="(post, i) in resources_posts"
        :postData="post"
        :key="i"
      ></ResourchPosts>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(team_members)">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.team_section_title)
            ? general_content.team_section_title
            : "Team"
        }}</span>
      </div>
    </div>

    <section
      class="text-block-subheadline"
      v-if="!$util.isEmpty(general_content.team_section_description)"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="p2">{{ general_content.team_section_description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team" v-if="!$util.isEmpty(team_members)">
      <div class="container">
        <ul class="highlight-list style--1">
          <li v-for="(member, i) in team_members" :key="i">
            <a href="#" class="card-people">
              <div class="avatar decor--1">
                <img
                  alt="Tim Roughgarden"
                  src="https://a16zcrypto.com/wp-content/uploads/2022/05/Tim-Roughgarden-scaled-230x300.jpeg"
                />
              </div>
              <div class="r-col">
                <div class="name">{{ member.post_title }}</div>
                <span class="post">Head of research</span>
              </div>
            </a>
          </li>
          <!-- <li>
            <a href="#" class="card-people">
              <div class="avatar decor--1">
                <img
                  alt="Tim Roughgarden"
                  src="https://a16zcrypto.com/wp-content/uploads/2022/05/Tim-Roughgarden-scaled-230x300.jpeg"
                />
              </div>
              <div class="r-col">
                <div class="name">Tim Roughgarden</div>
                <span class="post">Head of research</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-people">
              <div class="avatar decor--2">
                <img
                  alt="Dan Boneh"
                  src="https://a16zcrypto.com/wp-content/uploads/2022/04/Dan-Boneh-headshot-203x300.jpeg"
                />
              </div>
              <div class="r-col">
                <div class="name">Dan Boneh</div>
                <span class="post">Senior Research Advisor</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-people">
              <div class="avatar decor--3">
                <img
                  alt="Valeria Nikolaenko"
                  src="https://a16zcrypto.com/wp-content/uploads/2022/05/Valeria-Nikolaenko-1-300x300.png"
                />
              </div>
              <div class="r-col">
                <div class="name">Valeria Nikolaenko</div>
                <span class="post">Research</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-people">
              <div class="avatar decor--4">
                <img
                  alt="Joseph Bonneau"
                  src="https://a16zcrypto.com/wp-content/uploads/2022/07/Joseph-Bonneau-400x400-1-300x300.png"
                />
              </div>
              <div class="r-col">
                <div class="name">Joseph Bonneau</div>
                <span class="post">Research</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-people">
              <div class="avatar decor--5">
                <img
                  alt="Scott Kominers"
                  src="https://a16zcrypto.com/wp-content/uploads/2022/05/scottkominers_pfp-1-300x300.png"
                />
              </div>
              <div class="r-col">
                <div class="name">Scott Kominers</div>
                <span class="post">Research</span>
              </div>
            </a>
          </li> -->
        </ul>
      </div>
    </section>

    <aside class="banner">
      <picture class="bg">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-banner-research.jpg"
        />
        <source srcset="@/assets/images/bg-banner-research-sm.jpg" />
        <img src="@/assets/images/bg-banner-research.jpg" alt="" />
      </picture>
      <div class="container" v-if="!$util.isEmpty(general_content)">
        <div class="highlight-display">
          <h3 class="h1" v-html="jobTitle(general_content.jobs_cta_title)"></h3>
        </div>
        <div class="btn-wrap">
          <a href="#" class="btn btn--white"
            >see available roles <i class="icon-arrow-right"></i
          ></a>
        </div>
      </div>
    </aside>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "ResearchPage",
  head() {
    return {
      title: "Research",
    };
  },

  data() {
    return {
      general_content: {},
      our_focus_items: [],
      resources_posts: [],
      team_members: [],
      featured_posts: [],
    };
  },
  computed: {},
  methods: {
    jobTitle(title) {
      if (!this.$util.isEmpty(title)) {
        let str = title;

        return str.replace("jobs", "<br>Jobs");
      } else {
        return `a16z crypto <br>Jobs`;
      }
    },
    async getResearchContent() {
      const response = await this.$api.researchpage.get();
      console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
        this.our_focus_items = response.our_focus_items;
        this.featured_posts = response.featured_posts;
        this.resources_posts = response.resources;
        this.team_members = response.team_members;
      }
    },
  },
  mounted() {
    this.getResearchContent();
  },
};
</script>
