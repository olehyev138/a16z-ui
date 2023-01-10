<!-- Please remove this file from your project -->
<template>
  <footer id="footer">
    <div class="footer-t">
      <div class="container">
        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <form class="subscribe-form" action="#">
                <div class="heading">
                  <h6>
                    <span>{{
                      general_content
                        ? general_content.newsletter_title
                        : "newsletter: web3 weekly"
                    }}</span>
                  </h6>
                  <p>
                    {{
                      general_content
                        ? general_content.newsletter_subtitle
                        : "A newsletter from a16z crypto, and your go-to guide to the next internet"
                    }}
                  </p>
                </div>
                <div class="form-group">
                  <div class="input">
                    <input type="email" placeholder="Enter email address" />
                    <button type="submit" value="Subscribe">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-md-6">
              <div class="podcast-box">
                <div class="heading">
                  <h6>
                    <span>
                      {{
                        general_content
                          ? general_content.podcast_title
                          : "podcast: web3 with a16z"
                      }}</span
                    >
                  </h6>
                  <p>
                    {{
                      general_content
                        ? general_content.podcast_subtitle
                        : "A show about building the next internet, from a16z crypto"
                    }}
                  </p>
                </div>

                <ul class="podcast-list" v-if="!$util.isEmpty(streamings)">
                  <li
                    v-for="(streaming, i) in streamings.slice(0, 3)"
                    :key="i + 'streaming'"
                  >
                    <a
                      :href="
                        !$util.isEmpty(streaming.link)
                          ? streaming.link
                          : 'javascript:void(0)'
                      "
                    >
                      <span class="text">{{ streaming.title }}</span>
                      <span :class="streaming.icon_class"></span>
                    </a>
                  </li>

                  <li>
                    <a class="more" data-more data-outside href="#">
                      <span class="text">More</span>
                    </a>
                    <div class="slide">
                      <ul class="podcast-list">
                        <li
                          v-for="(streaming, i) in streamings.slice(
                            3,
                            streamings.length
                          )"
                          :key="i + 'streaming-more'"
                        >
                          <a
                            :href="
                              !$util.isEmpty(streaming.link)
                                ? streaming.link
                                : 'javascript:void(0)'
                            "
                          >
                            <span class="text">{{ streaming.title }}</span>
                            <span :class="streaming.icon_class"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-m">
      <div class="container">
        <div class="follow-us-block">
          <div class="row">
            <div class="col-md-4">
              <span class="title">Follow us </span>
            </div>
            <div class="col-md-8">
              <ul class="follow-us">
                <li v-for="(social, i) in socials" :key="i">
                  <a :href="social.link"
                    ><span :class="social.icon_class"></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-nav-wrap">
          <div class="row items-center">
            <div class="col-md-4">
              <div class="logo">
                <a href="#"
                  ><img src="@/assets/images/logo01.svg" alt="a16zcrypto"
                /></a>
              </div>
            </div>
            <div class="col-md-8">
              <ul class="footer-nav">
                <li v-for="(menu, i) in footer_menu" :key="i">
                  <NuxtLink :to="menu.link">{{ menu.title }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-b">
      <div class="container">
        <p v-if="general_content">
          {{ general_content.disclaimer }}
        </p>
        <p>
          <span
            class="copyright"
            v-html="
              general_content
                ? general_content.copyright
                : '&copy; 2022 Andreessen Horowitz'
            "
          ></span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      general_content: null,
      footer_menu: [
        {
          title: "Crypto Startup School",
          link: "#",
        },
        {
          title: "Research",
          link: "/research",
        },
        {
          title: "Policy",
          link: "/policy",
        },
        {
          title: "Legal",
          link: "#",
        },
        {
          title: "a16z.com",
          link: "/",
        },
      ],
      socials: [
        {
          title: "Twitter",
          link: "#",
          icon_class: "icon-twitter",
        },
        {
          title: "YouTube",
          link: "#",
          icon_class: "icon-youtube",
        },
        {
          title: "GitHub",
          link: "#",
          icon_class: "icon-github",
        },
        {
          title: "LinkedIn",
          link: "#",
          icon_class: "icon-linkedin",
        },
        {
          title: "TikTok",
          link: "#",
          icon_class: "icon-tiktok",
        },
        {
          title: "Discord",
          link: "#",
          icon_class: "icon-discord",
        },
        {
          title: "Farcaster",
          link: "#",
          icon_class: "icon-farcaster",
        },
        {
          title: "Instagram",
          link: "#",
          icon_class: "icon-instagram",
        },
      ],
      streamings: [
        {
          title: "Apple Music",
          link: "",
          iconClass: "icon-apple-music",
        },
        {
          title: "Overcast",
          link: "",
          iconClass: "icon-overcast",
        },
        {
          title: "Spotify",
          link: "",
          iconClass: "icon-spotify",
        },
        {
          title: "Google Podcast",
          link: "",
          iconClass: "icon-podcasts",
        },
        {
          title: "Stitcher",
          link: "",
          iconClass: "icon-stitcher",
        },
        {
          title: "IHeartRadio",
          link: "",
          iconClass: "icon-iheart",
        },
        {
          title: "Apple Music",
          link: "",
          iconClass: "icon-music",
        },
      ],
    };
  },
  methods: {
    async getFooterContent() {
      const response = await this.$api.footer.get();
      // console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
        this.$store.dispatch(
          "common/storeCookieTxt",
          response.cookie_banner_text
        );
        if (!this.$util.isEmpty(response.footer_menu)) {
          this.footer_menu = response.footer_menu;
        }
        if (!this.$util.isEmpty(response.socials)) {
          let list = response.socials;
          this.socials = [];
          list.forEach((element) => {
            let iconClass = "";
            switch (element.title) {
              case "Twitter":
                iconClass = "icon-twitter";
                break;
              case "YouTube":
                iconClass = "icon-youtube";
                break;
              case "GitHub":
                iconClass = "icon-github";
                break;
              case "LinkedIn":
                iconClass = "icon-linkedin";
                break;
              case "TikTok":
                iconClass = "icon-tiktok";
                break;
              case "Discord":
                iconClass = "icon-discord";
                break;
              case "Farcaster":
                iconClass = "icon-farcaster";
                break;
              case "Instagram":
                iconClass = "icon-instagram";
                break;
              default:
                break;
            }
            this.socials.push({ ...element, icon_class: iconClass });
            this.$store.dispatch("common/storeSocialLinks", this.socials);
          });
        }
        if (!this.$util.isEmpty(response.streaming)) {
          // this.streaming = response.streaming;
          let list = response.streaming;
          this.streamings = [];
          list.forEach((element) => {
            let iconClass = "";
            switch (element.title) {
              case "Apple Music":
                iconClass = "icon-apple-music";
                break;
              case "Overcast":
                iconClass = "icon-overcast";
                break;
              case "Spotify":
                iconClass = "icon-spotify";
                break;
              case "Google Podcast":
                iconClass = "icon-podcasts";
                break;
              case "Stitcher":
                iconClass = "icon-stitcher";
                break;
              case "IHeartRadio":
                iconClass = "icon-iheart";
                break;
              case "Apple Music":
                iconClass = "icon-music";
                break;
              default:
                break;
            }
            this.streamings.push({ ...element, icon_class: iconClass });
          });
          this.$store.dispatch("common/storeStreaming", this.streamings);
        }
      }
    },
  },
  mounted() {
    this.getFooterContent();
  },
};
</script>
