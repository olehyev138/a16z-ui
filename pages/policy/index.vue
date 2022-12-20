<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--policy">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-banner-policy.svg"
          />
          <source srcset="@/assets/images/bg-banner-policy-sm.svg" />
          <img src="@/assets/images/bg-banner-policy.svg" alt="" />
        </picture>
        <div class="highlight-display hld--lavender">
          <h1>Policy</h1>
        </div>
      </div>
    </header>

    <section class="text-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h5 v-if="!$util.isEmpty(general_content.intro_subtitle)">
              {{ general_content.intro_subtitle }}
            </h5>
          </div>
          <div class="col-sm-6">
            <div
              class="desc"
              v-if="!$util.isEmpty(general_content.intro_description)"
            >
              <p>
                {{ general_content.intro_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!this.$util.isEmpty(principles_list)">
      <div class="container">
        <span class="block-title">Principles</span>
      </div>
    </div>

    <div class="sub-headline" v-if="!this.$util.isEmpty(principles_list)">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h6 v-if="$util.isEmpty(general_content.principles_description)">
              To unlock the full potential of web3, we support the following
              core principles while working with lawmakers around the globe:
            </h6>
            <h6 v-else>{{ general_content.principles_description }}</h6>
          </div>
        </div>
      </div>
    </div>

    <section class="principles" v-if="!this.$util.isEmpty(principles_list)">
      <div class="container">
        <div class="row principle-boxes">
          <div
            class="col-sm-6"
            v-for="(principle, i) in principles_list"
            :key="i"
          >
            <div class="inner">
              <div class="icon-wrap">
                <img :src="principle.icon.url" width="24" alt="" />
              </div>
              <h6>
                {{ principle.title }}
              </h6>
              <p>
                {{ principle.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(team_members)">
      <div class="container">
        <span class="block-title"
          >{{
            !this.$util.isEmpty(general_content.team_section_title)
              ? general_content.team_section_title
              : "Team"
          }}
        </span>
      </div>
    </div>

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

    <div class="section-divider" v-if="!$util.isEmpty(resource_list)">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.resources_section_title)
            ? general_content.resources_section_title
            : "Resources"
        }}</span>
        <a href="#" class="btn-link underlined">
          see all
          <span class="icon-arrow-right"></span>
        </a>
      </div>
    </div>

    <section class="categories" v-if="!$util.isEmpty(resource_list)">
      <div class="container">
        <div
          class="category-row"
          v-for="(resource, i) in resource_list"
          :key="i"
        >
          <div class="group-header bg-grey">
            <h6>{{ resource.title }}</h6>
          </div>
          <div
            class="article"
            v-for="(post, index) in resource.postData"
            :key="index + '-post'"
          >
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title"
                  >{{ formatDate(post.date) }} / {{ post.type }}</span
                >
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#">{{ post.post_title }}</a>
                </h6>
                <span
                  class="posted-by"
                  v-if="!$util.isEmpty(post.authors) && post.authors.length > 1"
                >
                  <span v-for="(author, i) in post.authors" :key="i">
                    <a href="#">{{ author }}</a>
                    <template
                      v-if="
                        i !== post.authors.length - 1 &&
                        post.authors.length == 2
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
                <span v-else>
                  <a href="#">{{ post.authors[0] }}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider bg-grey" v-if="!$util.isEmpty(positions_items)">
      <div class="container">
        <span class="block-title">
          {{
            !$util.isEmpty(general_content.positions_section_title)
              ? general_content.positions_section_title
              : "Positions"
          }}</span
        >
      </div>
    </div>

    <section
      class="profile-featured bg-grey"
      v-if="!$util.isEmpty(positions_items)"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-4" v-for="(post, i) in positions_items" :key="i">
            <PostThreeCol :postData="post" callFrom="policypage"></PostThreeCol>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!$util.isEmpty(announcements)">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.announcements_section_title)
            ? general_content.announcements_section_title
            : "announcements"
        }}</span>
        <a href="#" class="btn-link underlined">
          {{
            !$util.isEmpty(general_content.announcements_cta_text)
              ? general_content.announcements_cta_text
              : "see all"
          }}
          <span class="icon-arrow-right"></span>
        </a>
      </div>
    </div>

    <section class="featured" v-if="!$util.isEmpty(announcements)">
      <div class="container">
        <PostOneCol
          v-for="(post, i) in announcements"
          :featuredPostData="post"
          :key="i"
          callFrom="policyPage"
        ></PostOneCol>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Policy",
  head() {
    return {
      title: "Policy",
    };
  },
  data() {
    return {
      general_content: {},
      principles_list: [],
      team_members: [],
      positions_items: [],
      announcements: [],
      resource_list: [],
    };
  },
  methods: {
    async getPolicyContent() {
      const response = await this.$api.policyPage.get();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
        this.principles_list = response.principles_list;
        this.positions_items = response.positions_items;

        if (!this.$util.isEmpty(response.team_members)) {
          var teamMembers = response.team_members;
          for (var index = 0; index < teamMembers.length; index++) {
            try {
              teamMembers[index].name = teamMembers[index].post_title;
              let teamData = await this.getTeamMember(teamMembers[index].ID);

              teamMembers[index].photo = teamData.photoLink;
              teamMembers[index].role = teamData.roleName;
            } catch (error) {}
          }
          // console.log(teamMembers);
          this.team_members = teamMembers;
        }

        if (!this.$util.isEmpty(response.resources)) {
          let resourcesPosts = response.resources;
          for (var index = 0; index < resourcesPosts.length; index++) {
            try {
              let resourceIds = resourcesPosts[index].resources;
              resourcesPosts[index].postData = [];
              if (!this.$util.isEmpty(resourceIds)) {
                for (var i = 0; i < resourceIds.length; i++) {
                  let authorArr = await this.getSinglePost(resourceIds[i]);
                  resourcesPosts[index].postData = [
                    ...resourcesPosts[index].postData,
                    authorArr,
                  ];
                }
              }
            } catch (error) {}
          }
          this.resource_list = resourcesPosts;
          console.log(resourcesPosts);
        }
      }
    },
    async getAnnouncements() {
      let payload = {
        post_type: ["announcement"],
        posts_per_page: "2",
        tax_query: {
          taxonomy: "focus-areas",
          field: "slug",
          terms: "policy",
        },
      };
      const response = await this.$api.common.getAnnouncements(payload);
      if (
        !this.$util.isEmpty(response.posts) &&
        !this.$util.isEmpty(response.posts.data)
      ) {
        this.announcements = response.posts.data;
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
    async getSinglePost(postId) {
      const response = await this.$api.common.getSinglePost(postId);
      if (!this.$util.isEmpty(response)) {
        let postData = response;
        postData.post_title = "";
        postData.authors = [];
        if (!this.$util.isEmpty(response.title)) {
          postData.post_title = response.title.rendered;
        }
        if (!this.$util.isEmpty(response.acf)) {
          if (!this.$util.isEmpty(response.acf.authors)) {
            var authors = response.acf.authors;
            var authorsArr = [];
            for (var index = 0; index < authors.length; index++) {
              authorsArr.push(authors[index].post_title);
            }
            postData.authors = authorsArr;
          }
        }
        return postData;
      }
    },

    formatDate(date) {
      return this.$moment(date).format("YYYY.M.D");
    },
  },
  mounted() {
    this.getPolicyContent();
    this.getAnnouncements();
  },
};
</script>
