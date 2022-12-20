<template>
  <div class="instructors-section">
    <div class="container">
      <h6>{{ !$util.isEmpty(title) ? title : "Advisors" }}</h6>
      <ul class="instructors-list">
        <li v-for="(advisor, i) in advisorList" :key="i + 'advisor'">
          <a href="#" class="card-instructors">
            <div class="avatar">
              <img
                v-if="!$util.isEmpty(advisor.photo)"
                alt="Adina Fischer"
                :src="advisor.photo"
              />
              <img
                v-else
                src="@/assets/images/placeholder-image.jpg"
                alt="placeholder"
              />
            </div>
            <div class="infos">
              <span class="name">{{
                !$util.isEmpty(advisor.post_title) ? advisor.post_title : ""
              }}</span>
              <span class="designation" v-if="!$util.isEmpty(advisor.role)">{{
                advisor.role
              }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advisors",
  props: {
    title: {
      type: Object,
      required: false,
    },
    advisorsArr: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      advisorList: [],
    };
  },
  methods: {
    async getAuthorContent(advisors = []) {
      if (!this.$util.isEmpty(advisors)) {
        var advisorList = advisors;
        for (var index = 0; index < advisorList.length; index++) {
          try {
            let teamData = await this.getTeamMember(advisorList[index].ID);

            advisorList[index].photo = teamData.photoLink;
            advisorList[index].role = teamData.roleName;
          } catch (error) {}
        }
        console.log("getAuthorContent photo,role = ", advisorList);
        this.advisorList = advisorList;
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
    this.getAuthorContent(this.advisorsArr);
  },
};
</script>
