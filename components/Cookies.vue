<template>
  <div
    class="cookies"
    v-if="cookiesShow == true && !$util.isEmpty(cookieBannerText)"
  >
    <div class="container">
      <div class="txt-wrap">
        <p>
          {{ cookieBannerText }}
        </p>
      </div>
      <ul class="btns-wrap">
        <li>
          <a href="#" class="btn btn--sm btn--white" @click="acceptCookies()"
            >accept</a
          >
        </li>
        <li>
          <a
            href="#"
            class="btn btn--outline-white btn--sm"
            @click="declineCookie()"
            >decline</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "cookies",
  data() {
    return {
      cookiesShow: false,
    };
  },
  computed: {
    cookieBannerText() {
      return this.$store.getters["common/getCookieTxt"];
    },
  },
  methods: {
    acceptCookies() {
      if (process.client) {
        this.cookiesShow = false;
        localStorage.setItem("cookiesShow", false);
      }
    },
    declineCookie() {
      this.cookiesShow = false;
    },
  },
  mounted() {
    this.cookiesShow = true;
    if (process.client) {
      if (localStorage.getItem("cookiesShow")) {
        this.cookiesShow = localStorage.getItem("cookiesShow");
      }
    }
  },
};
</script>
