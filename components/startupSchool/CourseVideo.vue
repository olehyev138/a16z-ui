<template>
  <li>
    <a href="#" class="video">
      <img v-if="!$util.isEmpty(thumb)" :src="thumb" alt="image description" />
      <img
        v-else
        src="@/assets/images/placeholder-image.jpg"
        alt="placeholder"
      />
      <span class="btn-play"></span>
    </a>
    <div class="desctiption">
      <h6>
        <a href="#">{{
          !$util.isEmpty(videoObj.post_title) ? videoObj.post_title : ""
        }}</a>
      </h6>
      <span class="instructor" v-if="!$util.isEmpty(instructor)"
        >instructor: <a href="#">{{ instructor }}</a></span
      >
    </div>
  </li>
</template>

<script>
export default {
  name: "CourseVideo",
  props: {
    videoObj: {
      type: Object,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      thumb: "",
      instructor: "",
    };
  },
  methods: {
    async getVideoContent(id = 0) {
      const response = await this.$api.video.getVideoContent(id);
      if (!this.$util.isEmpty(response)) {
        try {
          if (!this.$util.isEmpty(response.acf.instructor)) {
            this.instructor = response.acf.instructor[0].post_title;
          }
          let thumbnail = await this.getTeamMemberPhoto(
            response.featured_media
          );
          this.thumb = thumbnail;
        } catch (error) {}
      }
    },

    async getTeamMemberPhoto(featured_media_id) {
      const response = await this.$api.teampage.getTeamMemberPhoto(
        featured_media_id
      );
      if (!this.$util.isEmpty(response)) {
        return response.source_url;
      }
    },
  },
  mounted() {
    this.getVideoContent(this.videoObj.ID);
  },
  created() {},
};
</script>
