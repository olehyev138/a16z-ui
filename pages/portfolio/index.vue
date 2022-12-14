<template>
  <div id="wrapper">
    <Header></Header>

    <section class="portfolio">
      <header class="hero hero--sm">
        <div class="container">
          <picture class="bg">
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/bg-hero-green.png"
            />
            <source srcset="@/assets/images/bg-hero-green-sm.png" />
            <img src="@/assets/images/bg-hero-green.png" alt="" />
          </picture>
          <div class="highlight-display">
            <h1>Portfolio</h1>
          </div>
        </div>
      </header>

      <div class="container" v-if="!$util.isEmpty(companies)">
        <ul class="highlight-list has-alphabets has-divider">
          <template v-for="(val, i) in companies">
            <li
              :key="i + 'group'"
              class="has-alphabet"
              :class="i == 0 ? 'open' : i == 1 ? 'close' : ''"
            >
              <a href="#" class="alphabet" :key="i">{{ val.group }}</a>
            </li>
            <li v-for="(company, i) in val.children" :key="val.group + i">
              <a href="#" class="item">{{ company.post_title }}</a>
            </li>
          </template>
        </ul>
      </div>
    </section>

    <aside class="banner">
      <picture class="bg">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-banner-portfolio.jpg"
        />
        <source srcset="@/assets/images/bg-banner-portfolio-sm.jpg" />
        <img src="@/assets/images/bg-banner-portfolio.jpg" alt="" />
      </picture>
      <div class="container">
        <div class="highlight-display">
          <h3 class="h1" v-html="jobTitle"></h3>
        </div>
        <div class="btn-wrap">
          <a
            :href="
              !$util.isEmpty(general_data.jobs_button_link)
                ? general_data.jobs_button_link
                : 'javascript:void(0)'
            "
            class="btn btn--white"
            >{{
              !$util.isEmpty(general_data.jobs_button_text)
                ? general_data.jobs_button_text
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
  name: "PortfolioPage",
  head() {
    return {
      title: "Portfolio",
    };
  },
  data() {
    return {
      general_data: [],
      companies: [],
    };
  },
  computed: {
    jobTitle() {
      if (!this.$util.isEmpty(this.general_data.jobs_title)) {
        let str = this.general_data.jobs_title;

        return str.replace(/\s/g, "<br>");
      } else {
        return `Portfolio<br>Jobs`;
      }
    },
  },
  methods: {
    alphabeticalOrder(arr) {
      return arr.sort((a, b) =>
        a.post_title !== b.post_title
          ? a.post_title < b.post_title
            ? -1
            : 1
          : 0
      );
    },
    arrGroupAlphabeticalOrder(rawData) {
      let sortedArr = this.alphabeticalOrder(rawData);
      let data = sortedArr.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.post_title[0].toUpperCase();
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
    async getJobs() {
      const response = await this.$api.portfolio.getJobs();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_data = response;
      }
    },
    async getCompanies() {
      let payload = {
        post_type: ["company"],
        posts_per_page: "-1",
      };
      const response = await this.$api.portfolio.getCompanies(payload);
      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          this.companies = this.arrGroupAlphabeticalOrder(response.posts.data);
          // console.log(this.companies);
        }
      }
    },
  },
  mounted() {
    this.getCompanies();
    this.getJobs();
  },
};
</script>
<style scoped>
.container {
/*  overflow: hidden !important;*/
}
</style>
