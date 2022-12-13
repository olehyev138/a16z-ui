<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--about">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-about.svg"
          />
          <source srcset="@/assets/images/bg-hero-about-sm.svg" />
          <img src="@/assets/images/bg-hero-about.svg" alt="" />
        </picture>
        <div class="highlight-display">
          <h1>About</h1>
        </div>
      </div>
    </header>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_data.thesis_section_title)
            ? general_data.thesis_section_title
            : "Thesis"
        }}</span>
      </div>
    </div>

    <section class="text-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>
              {{
                !$util.isEmpty(general_data.thesis_title)
                  ? general_data.thesis_title
                  : "a16z crypto is a venture capital fund that invests in crypto and web3 startups."
              }}
            </h4>
          </div>
          <div class="col-sm-6">
            <div
              class="desc"
              v-html="
                !$util.isEmpty(general_data.thesis_paragraph)
                  ? $util.showHtml(general_data.thesis_paragraph)
                  : ''
              "
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="highlight-list-wrap">
      <div class="container">
        <ul class="highlight-list three-cols has-divider">
          <li v-for="(link, keys) in thesis_links" :key="keys">
            <a
              :href="link.thesis_link ? link.thesis_link : 'javascript:void(0)'"
              class="item"
              >{{ link.thesis_title }}</a
            >
          </li>
        </ul>
      </div>
    </section>

    <aside class="banner banner--about">
      <picture class="bg">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-banner-about.png"
        />
        <source srcset="@/assets/images/bg-banner-about-sm.png" />
        <img src="@/assets/images/bg-banner-about.png" alt="" />
      </picture>
      <div class="container">
        <div class="highlight-display">
          <h3 class="h1">
            {{
              !$util.isEmpty(general_data.jobs_cta_title)
                ? general_data.jobs_cta_title
                : "Jobs"
            }}
          </h3>
        </div>
        <div class="btn-wrap">
          <a
            :href="
              !$util.isEmpty(general_data.left_btn_link)
                ? general_data.left_btn_link
                : 'javascript:void(0)'
            "
            class="btn btn--white"
            >{{
              !$util.isEmpty(general_data.left_btn_title)
                ? general_data.left_btn_title
                : "a16z crypto jobs"
            }}
            <i class="icon-arrow-right"></i
          ></a>
          <a
            :href="
              !$util.isEmpty(general_data.right_btn_link)
                ? general_data.right_btn_link
                : 'javascript:void(0)'
            "
            class="btn btn--outline-white-azure"
            >{{
              !$util.isEmpty(general_data.right_btn_title)
                ? general_data.right_btn_title
                : "a16z portfolio jobs"
            }}<i class="icon-arrow-right"></i
          ></a>
        </div>
      </div>
    </aside>

    <section class="highlight-list-wrap" v-if="!$util.isEmpty(offices_list)">
      <div class="container">
        <h3 class="caption-1">
          {{
            !$util.isEmpty(general_data.offices_section_title)
              ? general_data.offices_section_title
              : "Offices"
          }}
        </h3>
        <ul class="highlight-list three-cols has-divider">
          <li v-for="(office, i) in offices_list" :key="i">
            <a href="javascript:void(0)" class="item">{{
              office.office_location
            }}</a>
            <address
              v-html="
                !$util.isEmpty(office.office_address)
                  ? $util.addressFormat(office.office_address)
                  : 'address not found!'
              "
            ></address>
          </li>
        </ul>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  head() {
    return {
      title: "About",
    };
  },
  data() {
    return {
      general_data: {},
      offices_list: [],
      thesis_links: [],
    };
  },
  methods: {
    async getThesis() {
      const response = await this.$api.aboutpage.getThesis();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_data = response;
        if (!this.$util.isEmpty(response.links)) {
          this.thesis_links = response.links;
        }
        if (!this.$util.isEmpty(response.offices_list)) {
          this.offices_list = response.offices_list;
        }
      }
    },
  },
  mounted() {
    this.getThesis();
  },
};
</script>
