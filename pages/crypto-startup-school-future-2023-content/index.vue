<template>
  <div id="wrapper">
    <Header></Header>

    <header
      class="hero hero--sm hero--startup"
      style="height: 515px"
      v-if="
        !$util.isEmpty(general_content.enable_new_hero) &&
        general_content.enable_new_hero == '1'
      "
    >
      <section style="height: 464px; background-color: #bfd66e">
        <div class="container">
          <picture class="bg" style="z-index: 1; left: -273px">
            <source
              media="(min-width: 768px)"
              srcset="@/assets/images/enable_new_hero_bg.png"
            />
            <source srcset="@/assets/images/enable_new_hero_bg.png" />
            <img src="@/assets/images/enable_new_hero_bg.png" alt="" />
          </picture>
          <div class="highlight-display hld--pacific-custom-new-hero">
            <h1>
              <span>crypto</span><span>startup</span><span>school</span>
              <span>
                {{
                  !$util.isEmpty(general_content.new_hero_location)
                    ? general_content.new_hero_location
                    : ""
                }}
              </span>
              <span
                >{{
                  !$util.isEmpty(general_content.new_hero_start_date)
                    ? general_content.new_hero_start_date + " - "
                    : ""
                }}
              </span>
              <span>
                {{
                  !$util.isEmpty(general_content.end_date)
                    ? general_content.end_date
                    : ""
                }}
              </span>
            </h1>
          </div>
        </div>
      </section>
    </header>
    <header class="hero hero--sm hero--startup" v-else>
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
              {{
                !$util.isEmpty(general_content.intro_subtitle)
                  ? general_content.intro_subtitle
                  : "Build your product alongside fellow founders and experienced entrepreneurs."
              }}
            </h4>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p
                v-if="!$util.isEmpty(general_content.intro_description)"
                v-html="$util.showHtml(general_content.intro_description)"
              ></p>
              <p>
                Work with industry experts as you navigate the startup terrain.
                Leverage the a16z network to help take your product mainstream.
                <a href="#">Crypto Startup School (CSS23)</a> will take place in
                Los Angeles, CA from March 6 - May 26, 2023 <br />
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
    <section class="videos-section">
      <div class="container">
        <ul class="videos">
          <li v-for="(val, i) in videoList" :key="i">
            <a href="#" class="video" :class="`thumbnail--${val.bg}`">
              <img
                src="@/assets/images/avatar-balaji.png"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span
                  class="instructor-name"
                  v-if="!$util.isEmpty(val.instructor)"
                  >{{ val.instructor }}</span
                >
                <span
                  class="title"
                  v-if="!$util.isEmpty(val.thumbnail_title)"
                  >{{ val.thumbnail_title }}</span
                >
              </div>
            </a>
            <div class="desctiption">
              <h6>
                <a href="#">{{ val.post_title }}</a>
              </h6>
              <span class="instructor" v-if="!$util.isEmpty(val.instructor)"
                >instructor: <a href="#">{{ val.instructor }}</a></span
              >
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Curriculum section start -->
    <div class="sticky-bar" v-if="showStickyDiv">
      <div class="container">
        <ul class="sticky-nav">
          <li class="title">curriculum by year</li>
          <li
            @click="curriculumFilterByYear('2020')"
            :class="[curriculumByYear == '2020' ? 'active' : '']"
          >
            2020
          </li>
          <li
            @click="curriculumFilterByYear('2023')"
            :class="[curriculumByYear == '2023' ? 'active' : '']"
          >
            2023
          </li>
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
      <Keep-alive>
        <CurriculumsList
          :curriculumsLists="curriculumsListFilterWise"
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
        />
      </Keep-alive>
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
        key="instructors_list--2023"
        :instructorArr="instructors_list"
      />
    </template>

    <template v-if="!$util.isEmpty(advisors_list)">
      <Advisors key="advisor_list--2023" :advisorsArr="advisors_list" />
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
        key="courseReaderContent2023"
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
  name: "cryptoStartupSchoolFuture2023ContentPage",
  head() {
    return {
      title: "Crypto Startup School Future 2023 Content",
    };
  },
  data() {
    return {
      videoTumbColors: [
        "anakiwa",
        "orange",
        "pompadour",
        "cyprus",
        "goldenrod",
        "greenhouse",
        "shamrock",
        "loghtseagreen",
        "mauve",
      ],
      showStickyDiv: false,
      curriculumByYear: 2023,
      general_content: [],
      curriculum_content: [],
      curriculumsListFilterWise: [],
      curriculumsList: [],
      curriculumsList2020: [],
      videoList: [],
      instructors_list: [],
      advisors_list: [],
      faqList: [],
      alumni_list: [],
      course_reader_content: [],
    };
  },
  computed: {},
  methods: {
    async cryptoStartupSchoolDefault() {
      const response = await this.$api.cryptoStartupSchoolDefaultPage.get();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;

        // curriculum content tab 2023
        if (
          !this.$util.isEmpty(response["2023_group"]) &&
          !this.$util.isEmpty(response["2023_group"].curriculum_content)
        ) {
          this.curriculum_content = response["2023_group"].curriculum_content;
          this.curriculumsList =
            response["2023_group"].curriculum_content.lectures;

          if (
            !this.$util.isEmpty(
              response["2023_group"].curriculum_content.videos
            )
          ) {
            var videoColorCounter = 0;
            var videoListData =
              response["2023_group"].curriculum_content.videos;
            for (var index = 0; index < videoListData.length; index++) {
              try {
                videoColorCounter++;
                if (videoColorCounter == this.videoTumbColors.length) {
                  videoColorCounter = 0;
                }
                let videoContent = await this.getVideoContent(
                  videoListData[index].ID
                );
                // console.log(
                //   "videoContent = ",
                //   this.videoTumbColors[videoColorCounter]
                // );
                this.videoList.push({
                  ...videoListData[index],
                  bg: this.videoTumbColors[videoColorCounter],
                  instructor: videoContent.instructor,
                  thumb: videoContent.thumb,
                  thumbnail_title: videoContent.thumbnail_title,
                  video_file: videoContent.video_file,
                });
              } catch (error) {}
            }
          }

          this.instructors_list =
            response["2023_group"].curriculum_content.instructors_list;
          this.advisors_list =
            response["2023_group"].curriculum_content.advisors;
          this.curriculumFilterByYear("2023");

          let course_reader_content =
            response["2023_group"].curriculum_content.course_reader_content;
          if (!this.$util.isEmpty(course_reader_content)) {
            let couserTabData = [];
            course_reader_content.forEach((element) => {
              let genId = element.tab_title.replace(/\s/g, "-");
              couserTabData.push({ ...element, id: genId });
            });
            this.course_reader_content = couserTabData;
          }
        }

        // curriculum content tab 2022
        if (!this.$util.isEmpty(response.curriculum_content)) {
          this.curriculumsList2020 = response.curriculum_content.lectures;
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
    async getVideoContent(id = 0) {
      const response = await this.$api.video.getVideoContent(id);
      var res = {
        instructor: "",
        thumb: "",
        thumbnail_title: "",
        video_file: [],
      };
      if (!this.$util.isEmpty(response)) {
        try {
          res.thumbnail_title = response.acf.thumbnail_title;
          if (!this.$util.isEmpty(response.acf.instructor)) {
            res.instructor = response.acf.instructor[0].post_title;
          }
          let thumbnail = await this.getTeamMemberPhoto(
            response.featured_media
          );
          res.thumb = thumbnail;
          res.video_file = response.acf.video_file;
        } catch (error) {}
      }
      return res;
    },

    async getTeamMemberPhoto(featured_media_id) {
      const response = await this.$api.teampage.getTeamMemberPhoto(
        featured_media_id
      );
      if (!this.$util.isEmpty(response)) {
        return response.source_url;
      }
    },
    curriculumFilterByYear(year = "2023") {
      this.curriculumByYear = year;
      if (year == 2023) {
        this.curriculumsListFilterWise = this.curriculumsList;
      } else {
        this.curriculumsListFilterWise = this.curriculumsList2020;
      }
    },

    handleScroll() {
      if (process.client) {
        var currentScrollPosition = window.scrollY;
        if (currentScrollPosition > 2000) {
          this.showStickyDiv = true;
        } else if (currentScrollPosition < 2000) {
          this.showStickyDiv = false;
        }
      }
    },
  },
  mounted() {
    this.cryptoStartupSchoolDefault();
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>
<style scoped></style>
