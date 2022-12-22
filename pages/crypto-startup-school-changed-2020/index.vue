<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--startup">
      <div class="container">
        <div class="highlight-display hld--style--1 hld--pacific-custom">
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

              <div class="btn-wrap">
                <a href="#" class="btn btn--outline-black">
                  apply here now
                  <i class="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.videos_section_title)
            ? general_content.videos_section_title
            : "Course videos"
        }}</span>
      </div>
    </div>

    <div class="sub-headline">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h6>
              {{
                !$util.isEmpty(general_content.videos_subtitle)
                  ? general_content.videos_subtitle
                  : "Course videos for 2023 will be posted after the program concludes in May. View videos for 2020 below."
              }}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <section class="videos-section">
      <div class="container">
        <ul class="videos">
          <CourseVideo
            v-for="(val, i) in videoList"
            :videoObj="val"
            :key="i + 'videos'"
          />
        </ul>
      </div>
    </section>

    <!-- Curriculum section start -->
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

    <!-- Instructors & Advisors section start -->
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

    <!-- Course reader section start -->
    <div class="section-divider" v-if="!$util.isEmpty(course_reader_content)">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(curriculum_content.course_reader_section_title)
            ? curriculum_content.course_reader_section_title
            : "Course reader"
        }}</span>
      </div>
    </div>
    <div class="course-reader" v-if="!$util.isEmpty(course_reader_content)">
      <CourseReader
        :courseReaderContent="course_reader_content"
        key="courseReaderContent2020"
      />
    </div>

    <!-- Alumni section start -->
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

    <!-- FAQ section start -->

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
      course_reader_content: [],
    };
  },
  methods: {
    async cryptoStartupSchoolDefault() {
      const response = await this.$api.cryptoStartupSchoolDefaultPage.get();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;

        // curriculum content tab 2022
        if (!this.$util.isEmpty(response.curriculum_content)) {
          this.curriculum_content = response.curriculum_content;
          this.curriculumsList = response.curriculum_content.lectures;
          this.videoList = response.curriculum_content.videos;
          this.instructors_list = response.curriculum_content.instructors_list;
          this.advisors_list = response.curriculum_content.advisors;

          let course_reader_content =
            response.curriculum_content.course_reader_content;
          if (!this.$util.isEmpty(course_reader_content)) {
            let couserTabData = [];
            course_reader_content.forEach((element) => {
              let genId = element.tab_title.replace(/\s/g, "-");
              couserTabData.push({ ...element, id: genId });
            });
            this.course_reader_content = couserTabData;
          }
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
