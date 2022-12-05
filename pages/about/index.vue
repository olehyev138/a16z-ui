<template>
  <div id="wrapper">
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
        <span class="block-title">{{ thesis_section_title }}</span>
      </div>
    </div>

    <section class="text-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>
              a16z crypto is a venture capital fund that invests in crypto and
              web3 startups.
            </h4>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p>
                We have over $7.6 billion assets under management across four
                funds, and have been investing in web3 – across all stages –
                since 2013, under the direction of founding general partner
                Chris Dixon, as part of <a href="#">Andreessen Horowitz</a>.
              </p>
              <p>
                The first era of the modern internet [~1990-2005] was about open
                protocols that were decentralized and community-governed. Most
                of the value accrued to the edges of the network: users and
                builders. The second era of the internet [~2005-2020] favored
                siloed, centralized services. Most of the value accrued to a
                handful of large tech companies. We are now beginning the third
                era of the internet – what many call web3 – which combines the
                decentralized, community-governed ethos of the first era with
                the advanced, modern functionality of the second era. This
                unlocks a new wave of creativity and entrepreneurship.
              </p>
              <p>
                a16z crypto supports our portfolio and the growth of web3
                through the following operations:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="highlight-list-wrap">
      <div class="container">
        <ul class="highlight-list three-cols">
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
          srcset="@/assets/images/bg-banner-about.jpg"
        />
        <source srcset="@/assets/images/bg-banner-about-sm.jpg" />
        <img src="@/assets/images/bg-banner-about.jpg" alt="" />
      </picture>
      <div class="container">
        <div class="highlight-display">
          <h3 class="h1">{{ jobs_cta_title }}</h3>
        </div>
        <div class="btn-wrap">
          <a :href="left_btn_link" class="btn btn--white"
            >{{ left_btn_title }} <i class="icon-arrow-right"></i
          ></a>
          <a :href="right_btn_link" class="btn btn--outline-white"
            >{{ right_btn_title }} <i class="icon-arrow-right"></i
          ></a>
        </div>
      </div>
    </aside>

    <section class="highlight-list-wrap">
      <div class="container">
        <h3 class="caption-1">{{ offices_section_title }}</h3>
        <ul class="highlight-list three-cols">
          <li>
            <a href="#" class="item">Menlo Park</a>
            <address>
              2865 Sand Hill Road, <br />
              Suite 101 Menlo <br />
              CA 94025.
            </address>
          </li>
          <li>
            <a href="#" class="item">San Francisco</a>
            <address>
              180 Townsend St San <br />
              Francisco, CA 94107.
            </address>
          </li>
          <li>
            <a href="#" class="item">New York</a>
            <address>
              525 Broadway, <br />
              6th Floor New <br />
              York, NY, 10012.
            </address>
          </li>
          <li>
            <a href="#" class="item">Miami</a>
            <address>(awaiting content)</address>
          </li>
          <li>
            <a href="#" class="item">Los Angeles</a>
            <address>
              3000 Olympic <br />
              Boulevard Santa <br />
              Monica, CA 90404
            </address>
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
      thesis_section_title: "Thesis",
      jobs_cta_title: "Jobs",
      left_btn_title: "a16z crypto jobs",
      right_btn_title: "a16z portfolio jobs",
      left_btn_link: "javascript:void(0)",
      right_btn_link: "javascript:void(0)",
      offices_section_title: "Offices",
      thesis_links: [],
    };
  },
  methods: {
    async getThesis() {
      const response = await this.$api.aboutpage.getThesis();
      // console.log(response);
      if (response.thesis_section_title) {
        this.thesis_section_title = response.thesis_section_title;
      }
      if (response.jobs_cta_title) {
        this.jobs_cta_title = response.jobs_cta_title;
      }
      if (response.left_btn_title) {
        this.left_btn_title = response.left_btn_title;
      }
      if (response.left_btn_link) {
        this.left_btn_link = response.left_btn_link;
      }
      if (response.right_btn_title) {
        this.right_btn_title = response.right_btn_title;
      }
      if (response.right_btn_link) {
        this.right_btn_link = response.right_btn_link;
      }
      if (response.offices_section_title) {
        this.offices_section_title = response.offices_section_title;
      }
      if (response.links.length > 0) {
        this.thesis_links = response.links;
      }
    },
  },
  mounted() {
    this.getThesis();
  },
};
</script>
