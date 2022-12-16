<template>
  <section>
    <div class="container">
      <div class="tab-navs-container">
        <div class="hold">
          <div class="tab-nav-hold">
            <ul class="tab-nav style--01">
              <li
                v-for="(tabTitle, i) in courseReaderContent"
                :key="i + 'tab-title'"
              >
                <a
                  :class="[activeTab == tabTitle.id ? 'active' : '']"
                  href="javascript:void(0)"
                  :id="tabTitle.id"
                  :data-tab="`tab${i + 1}`"
                  @click="specifiqTabData(tabTitle.id)"
                  >{{ tabTitle.tab_title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-contents">
      <div class="container">
        <template v-if="!$util.isEmpty(activeTabData)">
          <PostOneCol
            v-for="(post, i) in activeTabData"
            :featuredPostData="post"
            :key="i + activeTab"
            :callFrom="'courseReaderCom' + activeTab"
          ></PostOneCol>
        </template>
        <template v-else> data not found </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "courseReader",
  props: {
    courseReaderContent: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      activeTab: "",
      activeTabData: [],
    };
  },
  methods: {
    specifiqTabData(activeTab = "") {
      if (this.$util.isEmpty(activeTab)) {
        this.activeTab = this.courseReaderContent[0].id;
        this.activeTabData = this.courseReaderContent[0].resources;
      } else {
        let dataArr = this.courseReaderContent.filter((type) => {
          return type.id == activeTab;
        });

        this.activeTab = activeTab;
        this.activeTabData = dataArr[0].resources;
      }
    },
  },
  mounted() {
    this.activeTab = this.courseReaderContent[0].id;
    this.activeTabData = this.courseReaderContent[0].resources;
  },
};
</script>
