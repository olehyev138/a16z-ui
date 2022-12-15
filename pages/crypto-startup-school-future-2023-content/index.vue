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
            <h4>
              Build your product alongside fellow founders and experienced
              entrepreneurs.
            </h4>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p>
                Work with industry experts as you navigate the startup terrain.
                Leverage the a16z network to help take your product mainstream.
                <a href="#">Crypto Startup School (CSS23)</a> will take place in
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
    <section class="videos-section">
      <div class="container">
        <ul class="videos">
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder16.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Brian Armstrong</span>
                <span class="title">building crypto companies</span>
              </div>
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
                src="@/assets/images/video-placeholder17.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Josh Williams</span>
                <span class="title">blockchain fundamentals</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">Opportunities for Crypto in Gaming</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Josh Williams</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder18.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Chris Dixon</span>
                <span class="title">the potential of crypto</span>
              </div>
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
                src="@/assets/images/video-placeholder19.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Balaji Srinivasan</span>
                <span class="title">the future of apps</span>
              </div>
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
                src="@/assets/images/video-placeholder20.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Josh Williams</span>
                <span class="title">gaming crypto</span>
              </div>
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
                src="@/assets/images/video-placeholder21.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Ali Yahya</span>
                <span class="title">economic flywheels</span>
              </div>
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
                src="@/assets/images/video-placeholder22.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Sam Williams</span>
                <span class="title">incentive engineering</span>
              </div>
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
                src="@/assets/images/video-placeholder23.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name"
                  >Tom Preston-Werner & Chris Dixon</span
                >
                <span class="title">developer evangelism</span>
              </div>
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
                src="@/assets/images/video-placeholder24.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Nitya Subramanian</span>
                <span class="title">protocols vs products</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">protocol to product</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Nitya Subramanian</a></span
              >
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="sticky-bar">
      <div class="container">
        <ul class="sticky-nav">
          <li class="title">curriculum by year</li>
          <li>2020</li>
          <li class="active">2023</li>
        </ul>
      </div>
    </div>
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
    <div
      class="alumni-section"
      v-if="!$util.isEmpty(general_content.alumni_list)"
    >
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
  name: "cryptoStartupSchoolFuture2023ContentPage",
  head() {
    return {
      title: "Crypto Startup School Future 2023 Content",
    };
  },
  data() {
    return {
      general_content: [],
      curriculum_content: [],
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

        // curriculum content tab 2022
        if (!this.$util.isEmpty(response.curriculum_content)) {
          this.curriculum_content = response.curriculum_content;
          this.curriculumsList = response.curriculum_content.lectures;
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
