<template>
  <div class="cards-slider">
    <template v-if="!$util.isEmpty(announcements)">
      <a
        v-for="(announcement, i) in announcements"
        :key="i"
        href="#"
        class="card-news"
        :class="[`decor-style-${i + 1}`, announcements_colors[i]]"
      >
        <div class="content-t">
          <h5 style="display: inline-block; white-space: pre-wrap">
            <span>{{ announcement.post_title }}</span>
          </h5>
        </div>
        <div class="content-b">
          <time datetime="2022-11-12">{{
            formatDate(announcement.post_date)
          }}</time>
        </div>
      </a>
    </template>
    <!-- <a href="#" class="card-news decor-style-4">
      <div class="content-t">
        <div class="head">
          <span class="name">Jason Milionis</span>
          <span class="twiter-id">@handlehere</span>
        </div>
        <h5 class="sub-title">
          <span>We proudly contributed to the</span>
          <span>$165M Series B financing round</span>
          <span>that @uniswap Labs announced </span>
          <span>today...</span>
        </h5>
      </div>
      <div class="content-b">
        <time datetime="2022-11-12">12.11.22</time>
        <span class="icon-twitter"></span>
      </div>
    </a> -->
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    announcements: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      announcements_colors: ["", "purple", "maroon", "teal"],
    };
  },
  methods: {
    formatDate(date) {
      return this.$moment(date).format("YYYY.M.D");
    },
  },
  mounted() {},
};
</script>
