<template>
  <div id="wrapper">
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
        <span class="block-title">podcast</span>
      </div>
    </div>

    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <h4>podcast: web3 with a16z</h4>
            <div class="desc">
              <p>A show about building the next internet, from a16z crypto</p>
            </div>
          </div>
          <div class="col-sm-5">
            <ul class="social-networks">
              <li>
                <a href="#">
                  <span class="title">Apple Music</span>
                  <i class="icon-apple-music"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="title">Overcast</span>
                  <i class="icon-overcast"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="title">Spotify</span>
                  <i class="icon-spotify"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="title">Google Podcast</span>
                  <i class="icon-podcasts"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="title">Stitcher</span>
                  <i class="icon-stitcher"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="title">Iheartradio</span>
                  <i class="icon-iheart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="title">Apple Music</span>
                  <i class="icon-music"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">social</span>
      </div>
    </div>

    <div class="content-body">
      <div class="container">
        <h4>in the cloud</h4>
        <div class="row social-blocks">
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-twitter"></i>
              </span>
              Twitter
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-github"></i>
              </span>
              Github
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-discord"></i>
              </span>
              Discord
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-youtube"></i>
              </span>
              Youtube
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-podcasts"></i>
              </span>
              Farcaster
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-tiktok"></i>
              </span>
              Tiktok
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-instagram"></i>
              </span>
              Instagram
            </a>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#">
              <span class="icon-wrap">
                <i class="icon-linkedin"></i>
              </span>
              LinkedIn
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
  methods: {
    async getFollowUsContent() {
      const response = await this.$api.followuspage.get();
      console.log(response);
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
