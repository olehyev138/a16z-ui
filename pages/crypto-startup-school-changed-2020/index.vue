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
              {{
                !$util.isEmpty(general_content.intro_subtitle)
                  ? general_content.intro_subtitle
                  : "Build your product alongside fellow founders and experienced entrepreneurs."
              }}
            </h5>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p
                v-if="!$util.isEmpty(general_content.intro_description)"
                v-html="$util.showHtml(general_content.intro_description)"
              ></p>
              <p v-else>
                Work with industry experts as you navigate the startup terrain.
                Leverage the a16z network to help take your product mainstream.
                <a href="#">Crypto Startup School</a> (CSS23) will take place in
                Los Angeles, CA from March 6 - May 26, 2023<br />
                Sign up to stay in the loop on CSS news and updates:
              </p>

              <form class="subscribe-form" action="#">
                <div class="form-group">
                  <div class="input">
                    <input
                      type="email"
                      :placeholder="
                        !$util.isEmpty(general_content.intro_input_placeholder)
                          ? general_content.intro_input_placeholder
                          : 'Enter email address'
                      "
                    />
                    <button type="submit" value="subscribe">
                      {{
                        !$util.isEmpty(general_content.intro_input_button_text)
                          ? general_content.intro_input_button_text
                          : "subscribe"
                      }}
                    </button>
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
        <span class="block-title"
          >{{
            !$util.isEmpty(curriculum_content.curriculum_section_title)
              ? curriculum_content.curriculum_section_title
              : "Curriculum"
          }}
        </span>
      </div>
    </div>
    <section class="curriculums bg-grey">
      <CurriculumsList
        :curriculumsLists="curriculumsList"
        :curriculumsIntro="
          !$util.isEmpty(curriculum_content.curriculum_subtitle)
            ? curriculum_content.curriculum_subtitle
            : ''
        "
        :curriculumsFooter="
          !$util.isEmpty(curriculum_content.curriculum_disclaimer)
            ? curriculum_content.curriculum_disclaimer
            : ''
        "
      ></CurriculumsList>
    </section>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(curriculum_content.instructors_section_title)
            ? curriculum_content.instructors_section_title
            : "Instructors & Advisors"
        }}</span>
      </div>
    </div>
    <template v-if="!$util.isEmpty(instructors_list)">
      <Instructors
        key="instructors_list--2020"
        :instructorArr="instructors_list"
      ></Instructors>
    </template>

    <template v-if="!$util.isEmpty(advisors_list)">
      <Advisors
        key="advisor_list--2020"
        :advisorsArr="advisors_list"
      ></Advisors>
    </template>

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
    <div class="alumni-section" v-if="!$util.isEmpty(alumni_list)">
      <Alumni
        :alumniList="alumni_list"
        :alumniSectionSubtitle="general_content.alumni_section_subtitle"
        :alumniBottomText="general_content.alumni_bottom_text"
      ></Alumni>
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
    <section class="faq bg-grey" v-if="!$util.isEmpty(faqList)">
      <Faq
        :faqLists="faqList"
        :faqBottomText="general_content.faq_bottom_text"
      ></Faq>
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
      curriculum_content: [],
      curriculumsList: [],
      videoList: [],
      instructors_list: [],
      advisors_list: [],
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

        // curriculum content tab 2022
        if (!this.$util.isEmpty(response.curriculum_content)) {
          this.curriculum_content = response.curriculum_content;
          this.curriculumsList = response.curriculum_content.lectures;
          this.videoList = response.curriculum_content.videos;
          this.instructors_list = response.curriculum_content.instructors_list;
          this.advisors_list = response.curriculum_content.advisors;
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
