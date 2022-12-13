<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--follow-us">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-follow-us.svg"
          />
          <source srcset="@/assets/images/bg-hero-follow-us-sm.svg" />
          <img src="@/assets/images/bg-hero-follow-us.svg" alt="" />
        </picture>
        <div class="highlight-display hld--lavender">
          <h1>Follow Us</h1>
        </div>
      </div>
    </header>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.newsletter_section_title)
            ? general_content.newsletter_section_title
            : "newsletter"
        }}</span>
      </div>
    </div>

    <div class="content-body newsletter">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <h4>
              {{
                !$util.isEmpty(general_content.newsletter_title)
                  ? general_content.newsletter_title
                  : "newsletter: web3 weekly"
              }}
            </h4>
          </div>
          <div class="col-sm-5">
            <div class="desc">
              <p>
                {{
                  !$util.isEmpty(general_content.newsletter_desc)
                    ? general_content.newsletter_desc
                    : "A newsletter from a16z crypto, and your go-to guide to the next internet"
                }}
              </p>
            </div>
            <form class="subscribe-form" action="#">
              <div class="form-group">
                <div class="input">
                  <input
                    type="email"
                    :placeholder="
                      !$util.isEmpty(general_content.input_placeholder)
                        ? general_content.input_placeholder
                        : 'Enter email address'
                    "
                  />
                  <button type="submit" value="subscribe">
                    {{
                      !$util.isEmpty(general_content.button_title)
                        ? general_content.button_title
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

    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.podcast_section_title)
            ? general_content.podcast_section_title
            : "podcast"
        }}</span>
      </div>
    </div>

    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <h4>
              {{
                !$util.isEmpty(general_content.podcast_title)
                  ? general_content.podcast_title
                  : "podcast: web3 with a16z"
              }}
            </h4>
            <div class="desc">
              <p>
                {{
                  !$util.isEmpty(general_content.podcast_desc)
                    ? general_content.podcast_desc
                    : "A show about building the next internet, from a16z crypto"
                }}
              </p>
            </div>
          </div>
          <div class="col-sm-5" v-if="!$util.isEmpty(getStreamings)">
            <ul class="social-networks">
              <li
                v-for="(streaming, i) in getStreamings"
                :key="i + 'streaming'"
              >
                <a
                  :href="
                    !$util.isEmpty(streaming.link)
                      ? streaming.link
                      : 'javascript:void(0)'
                  "
                >
                  <span class="title">{{ streaming.title }}</span>
                  <i :class="streaming.icon_class"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">{{
          !$util.isEmpty(general_content.social_section_title)
            ? general_content.social_section_title
            : "social"
        }}</span>
      </div>
    </div>

    <div class="content-body">
      <div class="container">
        <h4>
          {{
            !$util.isEmpty(general_content.social_title)
              ? general_content.social_title
              : "in the cloud"
          }}
        </h4>
        <div class="row social-blocks" v-if="!$util.isEmpty(getSocialLinks)">
          <div
            class="col-sm-6 col-md-3"
            v-for="(social, i) in getSocialLinks"
            :key="i"
          >
            <a href="#">
              <span class="icon-wrap">
                <i :class="social.icon_class"></i>
              </span>
              {{ social.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "FollowUsPage",
  head() {
    return {
      title: "Follow us",
    };
  },
  data() {
    return {
      general_content: [],
    };
  },
  computed: {
    getSocialLinks() {
      return this.$store.getters["common/getSocialLinks"];
    },
    getStreamings() {
      return this.$store.getters["common/getStreaming"];
    },
  },
  methods: {
    async getFollowUsContent() {
      const response = await this.$api.followuspage.get();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
      }
    },
  },
  mounted() {
    this.getFollowUsContent();
  },
};
</script>
