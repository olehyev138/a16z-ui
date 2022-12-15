<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--startup">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-banner-startup.svg"
          />
          <source srcset="@/assets/images/bg-banner-startup.svg" />
          <img src="@/assets/images/bg-banner-startup.svg" alt="" />
        </picture>
        <div class="highlight-display hld--pacific-custom">
          <h1><span>crypto</span><span>startup</span><span>school</span></h1>
        </div>
      </div>
    </header>
    <div class="text-block text-block--startup">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h5>
              Build your product alongside fellow founders and experienced
              entrepreneurs.
            </h5>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p>
                Work with industry experts as you navigate the startup terrain.
                Leverage the a16z network to help take your product mainstream.
                <a href="#">Crypto Startup School</a> (CSS23) will take place in
                Los Angeles, CA from March 6 - May 26, 2023
              </p>
              <p>Sign up to stay in the loop on CSS news and updates:</p>
              <form class="subscribe-form" action="#">
                <div class="form-group">
                  <div class="input">
                    <input type="email" placeholder="Enter email address" />
                    <button type="submit" value="subscribe">subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Course videos</span>
      </div>
    </div>

    <div class="sub-headline">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h6>
              Course videos for 2023 will be posted after the program concludes
              in May. View videos for 2020 below.
            </h6>
          </div>
        </div>
      </div>
    </div>

    <section class="videos-section">
      <div class="container">
        <ul class="videos">
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder01.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">crypto networks and why they matter</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Chris Dixon</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder02.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6>
                <a href="#"
                  >blockchain primitives: cryptography and consensus</a
                >
              </h6>
              <span class="instructor"
                >instructor: <a href="#">Dan Boneh</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder03.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">setting up and scaling a crypto company</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Brian Armstrong</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder04.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">applications: today & 2025</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Balaji Srinivasan</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder05.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">opportunities for crypto in gaming</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Josh Williams</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder06.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">business models and value capture</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Ali Yahya</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder07.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">cryptoeconomics 101</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Sam Williams</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder08.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6>
                <a href="#"
                  >deep dive: how and why to decentralize your roject</a
                >
              </h6>
              <span class="instructor"
                >instructor: <a href="#">Jesse Walden</a> and
                <a href="#">Robert Leshner</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder09.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">developer community building</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Tom Preston-Werner</a> and
                <a href="#">Chris Dixon</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder10.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">managing a distributed workforce</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Tina Ferguson</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder11.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">protocol to product</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Nitya Subramanian</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder12.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">secure smart contract development</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Jutta Steiner</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder13.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">crypto regulators and token securities</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Brian Brooks</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder14.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">fundraising</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Jesse Walden</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder15.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
            </a>
            <div class="desctiption">
              <h6><a href="#">Crypto Startup School documentary</a></h6>
              <span class="instructor">instructor: n/a</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="section-divider bg-grey">
      <div class="container">
        <span class="block-title">Curriculum </span>
      </div>
    </div>
    <section class="curriculums bg-grey">
      <div class="container">
        <div class="intro">
          <h6>
            We plan to cover the following topics through lectures, mentor
            office hours, and founder talks:
          </h6>
        </div>
        <ul class="curriculums-list">
          <li>
            <span class="count">01 /</span>
            <h6><a href="#">web3 big picture</a></h6>
          </li>
          <li>
            <span class="count">02 /</span>
            <h6><a href="#">protocol development</a></h6>
          </li>
          <li>
            <span class="count">03 /</span>
            <h6><a href="#">cryptographic and mechanism design tools</a></h6>
          </li>
          <li>
            <span class="count">04 /</span>
            <h6><a href="#">web3 go-to-market</a></h6>
          </li>
          <li>
            <span class="count">05 /</span>
            <h6><a href="#">state of crypto regulation</a></h6>
          </li>
          <li>
            <span class="count">06 /</span>
            <h6><a href="#">legal design & the role of decentralization</a></h6>
          </li>
          <li>
            <span class="count">07 /</span>
            <h6><a href="#">company building in web3</a></h6>
          </li>
          <li>
            <span class="count">08 /</span>
            <h6>
              <a href="#">community building & decentralized organizations</a>
            </h6>
          </li>
          <li>
            <span class="count">09 /</span>
            <h6><a href="#">smart contract & custody security</a></h6>
          </li>
          <li>
            <span class="count">10 /</span>
            <h6><a href="#">branding & design</a></h6>
          </li>
          <li>
            <span class="count">11 /</span>
            <h6><a href="#">fundraising best practices</a></h6>
          </li>
        </ul>
        <div class="curriculums-footer">
          <p>
            *The final curriculum and instructor list are coming soon. In the
            meantime, we will be sharing program updates on our social channels.
          </p>
        </div>
      </div>
    </section>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Instructors & Advisors</span>
      </div>
    </div>

    <Instructors></Instructors>
    <Advisors></Advisors>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Course reader</span>
      </div>
    </div>
    <div class="course-reader">
      <div class="container">
        <div class="tab-navs-container">
          <div class="hold">
            <div class="tab-nav-hold">
              <ul class="tab-nav style--01">
                <li>
                  <a class="active" href="#" data-tab="tab1">introduction</a>
                </li>
                <li>
                  <a href="#" data-tab="tab2">Consensus & cryptographhy</a>
                </li>
                <li><a href="#" data-tab="tab3">Apps & developer docs</a></li>
                <li><a href="#" data-tab="tab4">business models</a></li>
                <li>
                  <a href="#" data-tab="tab5">Decentralisation & secruity</a>
                </li>
                <li><a href="#" data-tab="tab6">REgulation</a></li>
                <li><a href="#" data-tab="tab7">Fundraising</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-contents">
        <div class="container">
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">why decentralization matters</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6><a href="#">the future of trust</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6><a href="#">what comes after open source</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6>
                  <a href="#"
                    >past, present, future: from co-ops to crypto networks</a
                  >
                </h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6><a href="#">crypto glossary</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6><a href="#">how bitcoin actually works</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6><a href="#">bitcoin white paper</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
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
                <h6><a href="#">ethereum white paper</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.alumni_section_title)
            ? general_content.alumni_section_title
            : "Alumni"
        }}</span>
      </div>
    </div>
    <div class="alumni-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h6>
              {{
                !$util.isEmpty(general_content.alumni_section_subtitle)
                  ? general_content.alumni_section_subtitle
                  : "Participants in our 2020 cohort have gone on to raise over $300M and have founded some of the industry's leading companies, including:"
              }}
            </h6>
          </div>
          <div class="col-sm-6">
            <ul class="highlighted-list" v-if="!$util.isEmpty(alumni_list)">
              <li v-for="(alumni, i) in alumni_list" :key="i + 'alumni_list'">
                <h6>
                  <a class="highlight" :href="alumni.link">{{
                    alumni.title
                  }}</a>
                </h6>
                <p>{{ alumni.description }}</p>
              </li>
            </ul>
            <div
              class="info-text"
              v-if="!$util.isEmpty(general_content.alumni_bottom_text)"
            >
              <p
                v-html="$util.showHtml(general_content.alumni_bottom_text)"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider bg-grey">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.faq_section_title)
            ? general_content.faq_section_title
            : "FAQ"
        }}</span>
      </div>
    </div>
    <section class="faq bg-grey">
      <div class="container">
        <ul class="faq-list" v-if="!$util.isEmpty(faqList)">
          <li v-for="(faq, i) in faqList" :key="i">
            <a
              href="javascript:void(0)"
              class="opener"
              @click="faq.visible = !faq.visible"
              :class="faq.visible ? 'active' : ''"
              >{{ faq.question }}</a
            >

            <span class="curriculums-footer" v-if="faq.visible">{{
              faq.answer
            }}</span>
          </li>
          <!-- add [active] class on opener to show active state  -->
        </ul>
        <div class="faq-footer">
          <template
            v-if="!$util.isEmpty(general_content.faq_bottom_text)"
            v-html="!$util.showHtml(general_content.faq_bottom_text)"
          ></template>
          <template>
            <p>
              Questions? Please email us at
              <a href="mailto:crypto-startup-school@a16z.com"
                >crypto-startup-school@a16z.com</a
              >
            </p>
          </template>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "cryptoStartupSchoolChanged2020Page",
  head() {
    return {
      title: "Crypto Startup School Changed 2020",
    };
  },
  data() {
    return {
      general_content: [],
      curriculumsList: [],
      faqList: [],
      alumni_list: [],
    };
  },
  methods: {
    async cryptoStartupSchoolDefault() {
      const response = await this.$api.cryptoStartupSchoolDefaultPage.get();
      console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;

        if (!this.$util.isEmpty(response.lectures)) {
          this.curriculumsList = response.lectures;
        }
        if (!this.$util.isEmpty(response.faq_list)) {
          let list = response.faq_list;
          list.forEach((element) => {
            this.faqList.push({ ...element, visible: false });
          });
        }
        if (!this.$util.isEmpty(response.alumni_list)) {
          this.alumni_list = response.alumni_list;
        }
      }
    },
  },
  mounted() {
    this.cryptoStartupSchoolDefault();
  },
};
</script>
