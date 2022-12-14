<template>
  <div id="wrapper">
    <Header></Header>

    <section class="team">
      <header class="hero hero--sm">
        <div class="container">
          <picture class="bg">
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/bg-hero-purple.png"
            />
            <source srcset="@/assets/images/bg-hero-purple-sm.png" />
            <img src="@/assets/images/bg-hero-purple.png" alt="" />
          </picture>
          <div class="highlight-display hld--lime">
            <h1>Team</h1>
          </div>
        </div>
      </header>

      <div class="container">
        <ul class="alphabets">
          <li class="active"><a href="#" class="alphabet">a</a></li>
          <li><a href="#" class="alphabet">b</a></li>
          <li><a href="#" class="alphabet">c</a></li>
          <li><a href="#" class="alphabet">d</a></li>
          <li><a href="#" class="alphabet">e</a></li>
          <li><a href="#" class="alphabet">f</a></li>
          <li><a href="#" class="alphabet">g</a></li>
          <li><a href="#" class="alphabet">h</a></li>
          <li><a href="#" class="alphabet">i</a></li>
          <li><a href="#" class="alphabet">j</a></li>
          <li><a href="#" class="alphabet">k</a></li>
          <li><a href="#" class="alphabet">l</a></li>
          <li><a href="#" class="alphabet">m</a></li>
          <li><a href="#" class="alphabet">n</a></li>
          <li><a href="#" class="alphabet">o</a></li>
          <li><a href="#" class="alphabet">p</a></li>
          <li><a href="#" class="alphabet">q</a></li>
          <li><a href="#" class="alphabet">r</a></li>
          <li><a href="#" class="alphabet">s</a></li>
          <li><a href="#" class="alphabet">t</a></li>
          <li><a href="#" class="alphabet">u</a></li>
          <li><a href="#" class="alphabet">v</a></li>
          <li><a href="#" class="alphabet">w</a></li>
          <li><a href="#" class="alphabet">x</a></li>
          <li><a href="#" class="alphabet">y</a></li>
          <li><a href="#" class="alphabet">z</a></li>
        </ul>

        <ul class="highlight-list">
          <template v-for="(val, i) in teamMembers">
            <li
              :key="`${i + 2}-group`"
              class="has-alphabet"
              :class="i == 0 ? 'open' : i == 1 ? 'close' : ''"
            >
              <a href="#" class="alphabet">{{ val.group }}</a>
            </li>
            <li
              v-for="(member, index) in val.children"
              :key="`${index}-teamPage`"
            >
              <TeamMember
                :teamMember="member"
                :key="`${index}-teamPageC`"
                callFrom="teamPage"
              />
            </li>
          </template>
        </ul>
      </div>
    </section>

    <aside class="banner banner--jobs">
      <picture class="bg">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-banner-jobs.png"
        />
        <source srcset="@/assets/images/bg-banner-jobs-sm.png" />
        <img src="@/assets/images/bg-banner-jobs.png" alt="" />
      </picture>
      <div class="container">
        <div class="highlight-display">
          <h3 class="h1" v-html="jobTitle"></h3>
        </div>
        <div class="btn-wrap">
          <a
            :href="
              !$util.isEmpty(general_data.jobs_cta_button_link)
                ? general_data.jobs_cta_button_link
                : 'javascript:void(0)'
            "
            class="btn btn--white"
            >{{
              !$util.isEmpty(general_data.jobs_cta_button_text)
                ? general_data.jobs_cta_button_text
                : "see available roles"
            }}
            <i class="icon-arrow-right"></i
          ></a>
        </div>
      </div>
    </aside>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "TeamPage",
  head() {
    return {
      title: "Team members",
    };
  },
  data() {
    return {
      general_data: [],
      teamMembers: [],
    };
  },
  computed: {
    jobTitle() {
      if (!this.$util.isEmpty(this.general_data.jobs_cta_title)) {
        let str = this.general_data.jobs_cta_title;

        return str.replace("jobs", "<br>jobs");
      } else {
        return `a16z crypto <br>jjobs"`;
      }
    },
  },
  methods: {
    async getTeamJobData() {
      const response = await this.$api.teampage.get();
      if (!this.$util.isEmpty(response)) {
        this.general_data = response;
      }
    },
    async getTeamMembers() {
      const response = await this.$api.teampage.getTeamMembers();
      if (!this.$util.isEmpty(response)) {
        let teamMembers = response;

        for (var index = 0; index < teamMembers.length; index++) {
          teamMembers[index].name = this.$util.isEmpty(
            teamMembers[index].title.rendered
          )
            ? ""
            : teamMembers[index].title.rendered;
          teamMembers[index].photo = "";

          try {
            let photo = await this.getTeamMemberPhoto(
              teamMembers[index].featured_media
            );
            teamMembers[index].photo = photo;
          } catch (error) {}
        }
        this.teamMembers = this.arrGroupAlphabeticalOrder(teamMembers);
        this.$store.dispatch("teamMembers/storeTeamMembers", teamMembers);
      }
      // console.log(this.teamMembers);
    },
    async getTeamMemberPhoto(featured_media_id) {
      const response = await this.$api.teampage.getTeamMemberPhoto(
        featured_media_id
      );
      if (!this.$util.isEmpty(response)) {
        return response.source_url;
      }
    },
    alphabeticalOrder(arr) {
      return arr.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
    },
    arrGroupAlphabeticalOrder(rawData) {
      let sortedArr = this.alphabeticalOrder(rawData);
      let data = sortedArr.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.name[0].toUpperCase();
        // if there is no property in accumulator with this letter create it
        if (!r[group]) r[group] = { group, children: [e] };
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
      }, {});

      // since data at this point is an object, to get array of values
      // we use Object.values method
      let result = Object.values(data);
      return result;
    },
  },
  mounted() {
    this.getTeamMembers();
    this.getTeamJobData();
  },
};
</script>
