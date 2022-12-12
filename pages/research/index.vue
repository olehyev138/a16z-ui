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

    <div class="section-divider bg-grey" v-if="!$util.isEmpty(featured_posts)">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>

    <section class="profile-featured bg-grey">
      <div class="container">
        <div class="row">
          <div class="col-sm-4" v-for="(post, i) in featured_posts" :key="i">
            <PostThreeCol
              :postData="post"
              callFrom="researchpage"
            ></PostThreeCol>
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
      v-if="
        !$util.isEmpty(general_content.team_section_description) &&
        !$util.isEmpty(team_members)
      "
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
          <li
            v-for="(team, index) in team_members"
            :key="`${index}-researchpage`"
          >
            <team-member
              :teamMember="team"
              callFrom="researchpage"
              :key="`${index}-researchpage`"
            ></team-member>
          </li>
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
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
        this.our_focus_items = response.our_focus_items;
        this.featured_posts = response.featured_posts;
        this.resources_posts = response.resources;

        if (!this.$util.isEmpty(response.team_members)) {
          var teamMembers = response.team_members;
          for (var index = 0; index < teamMembers.length; index++) {
            teamMembers[index].name = teamMembers[index].post_title;
            try {
              let teamData = await this.getTeamMember(teamMembers[index].ID);

              teamMembers[index].photo = teamData.photoLink;
              teamMembers[index].role = teamData.roleName;
            } catch (error) {}
          }
          console.log(teamMembers);
          this.team_members = teamMembers;
        }
      }
    },
    async getTeamMember(id) {
      const response = await this.$api.teampage.getTeamMember(id);

      if (!this.$util.isEmpty(response)) {
        var role = "";
        if (!this.$util.isEmpty(response.acf)) {
          role = response.acf.role;
        }
        let featured_media_id = response.featured_media;
        let photo = await this.getTeamMemberPhoto(featured_media_id);
        // console.log("response getTeamMember photoLink = ", photoLink);
        return { photoLink: photo, roleName: role };
      }
    },
    async getTeamMemberPhoto(featured_media_id) {
      const response = await this.$api.teampage.getTeamMemberPhoto(
        featured_media_id
      );
      if (!this.$util.isEmpty(response)) {
        return response.source_url;
      }
    },
  },
  mounted() {
    this.getResearchContent();
  },
};
</script>
