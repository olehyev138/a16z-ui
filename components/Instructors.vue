<template>
  <div class="instructors-section">
    <div class="container">
      <h6>{{ !$util.isEmpty(title) ? title : "Instructors" }}</h6>
      <ul class="instructors-list">
        <li
          v-for="(instructor, i) in instractorList"
          :key="i + instructor.post_title"
        >
          <a href="#" class="card-instructors">
            <div class="avatar">
              <img
                v-if="!$util.isEmpty(instructor.photo)"
                alt="Adina Fischer"
                :src="instructor.photo"
              />
              <img
                v-else
                src="@/assets/images/placeholder-image.jpg"
                alt="placeholder"
              />
            </div>
            <div class="infos">
              <span class="name">{{
                !$util.isEmpty(instructor.post_title)
                  ? instructor.post_title
                  : ""
              }}</span>
              <span
                class="designation"
                v-if="!$util.isEmpty(instructor.role)"
                >{{ instructor.role }}</span
              >
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructors",
  props: {
    title: {
      type: Object,
      required: false,
    },
    instructorArr: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      instractorList: [],
    };
  },
  methods: {
    async getInstractorContent(instractors = []) {
      if (!this.$util.isEmpty(instractors)) {
        var instractorList = instractors;
        for (var index = 0; index < instractorList.length; index++) {
          try {
            let teamData = await this.getTeamMember(instractorList[index].ID);

            instractorList[index].photo = teamData.photoLink;
            instractorList[index].role = teamData.roleName;
          } catch (error) {}
        }
        console.log("getInstractorContent photo,role = ", instractorList);
        this.instractorList = instractorList;
      }
    },
    async getTeamMember(id) {
      const response = await this.$api.teampage.getTeamMember(id);

      if (!this.$util.isEmpty(response)) {
        var role = "";
        if (!this.$util.isEmpty(response.acf)) {
          role = response.acf.role;
        }
        let featured_media_id = response.featured_media;
        let photo = await this.getTeamMemberPhoto(featured_media_id);
        // console.log("response getTeamMember photoLink = ", photoLink);
        return { photoLink: photo, roleName: role };
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
    this.getInstractorContent(this.instructorArr);
  },
};
</script>
