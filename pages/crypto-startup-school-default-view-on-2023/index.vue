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
              <p v-else>
                Work with industry experts as you navigate the startup terrain.
                Leverage the a16z network to help take your product mainstream.
                <a href="#">Crypto Startup School (CSS23)</a> will take place in
                Los Angeles, CA from March 6 - May 26, 2023 <br />
                Sign up to stay in the loop on CSS news and updates:
              </p>

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
    <section class="course">
      <div class="container">
        <div class="text">
          <h6>
            Course videos will be be posted after the program concludes in May
            2023.
          </h6>
          <p>View videos for <a href="#">2020</a> here.</p>
        </div>
      </div>
    </section>
    <div class="section-divider bg-gray">
      <div class="container">
        <span class="block-title">Curriculum </span>
      </div>
    </div>
    <section class="curriculums bg-gray">
      <div class="container">
        <div class="intro">
          <h6>
            We plan to cover the following topics through lectures, mentor
            office hours, and founder talks:
          </h6>
        </div>
        <ul class="curriculums-list" v-if="curriculumsList.length > 0">
          <li v-for="(lecture, i) in curriculumsList" :key="i">
            <span class="count">{{ $util.padDigits(i + 1) }} /</span>
            <h6>
              <a :href="lecture.link ? lecture.link : 'javascript:void(0)'">{{
                lecture.title
              }}</a>
            </h6>
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
    <section class="course">
      <div class="container">
        <div class="text">
          <h6>
            {{
              !$util.isEmpty(general_content.curriculum_subtitle)
                ? general_content.curriculum_subtitle
                : "The full list of 2023 CSS instructors and advisors is coming soon."
            }}
          </h6>
          <p>
            {{
              !$util.isEmpty(general_content.curriculum_description)
                ? general_content.curriculum_description
                : "In the meantime, we will be sharing program updates on our social channels. View 2020 instructors and advisors."
            }}
          </p>
        </div>
      </div>
    </section>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.instructors_section_title)
            ? general_content.instructors_section_title
            : "Course reader"
        }}</span>
      </div>
    </div>
    <section class="course">
      <div class="container">
        <div class="text">
          <h6>
            The course reader for 2023 will be posted after the program
            concludes in May 2023.
          </h6>
          <p>View <a href="#">2020</a> course reader.</p>
        </div>
      </div>
    </section>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.alumni_section_title)
            ? general_content.alumni_section_title
            : "Alumni"
        }}</span>
      </div>
    </div>
    <section class="course">
      <div class="container">
        <div class="text">
          <h6>
            Alumni for 2023 will be posted after the program concludes in May
            2023.
          </h6>
          <p>View <a href="#">2020</a> alumni.</p>
        </div>
      </div>
    </section>
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
  name: "cryptoStartupSchoolDefaultViewOn2023Page",
  head() {
    return {
      title: "Crypto Startup School Default ViewOn 2023",
    };
  },
  data() {
    return {
      general_content: [],
      curriculumsList: [],
      faqList: [],
    };
  },
  methods: {
    async cryptoStartupSchoolDefault() {
      const response = await this.$api.cryptoStartupSchoolDefaultPage.get();
      console.log(response);
      this.general_content = response;
      if (response && response.lectures.length > 0) {
        this.curriculumsList = response.lectures;
      }
      if (response && response.faq_list.length > 0) {
        let list = response.faq_list;
        list.forEach((element) => {
          this.faqList.push({ ...element, visible: false });
        });
      }
    },
  },
  mounted() {
    this.cryptoStartupSchoolDefault();
  },
};
</script>
