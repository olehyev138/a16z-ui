<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <h6>
          {{
            !$util.isEmpty(alumniSectionSubtitle)
              ? alumniSectionSubtitle
              : "Participants in our 2020 cohort have gone on to raise over $300M and have founded some of the industry's leading companies, including:"
          }}
        </h6>
      </div>
      <div class="col-sm-6">
        <ul class="highlighted-list" v-if="!$util.isEmpty(alumniList)">
          <li v-for="(alumni, i) in alumniList" :key="i + 'alumni_list'">
            <h6>
              <a class="highlight" :href="alumni.link">{{ alumni.title }}</a>
            </h6>
            <p>{{ alumni.description }}</p>
          </li>
        </ul>
        <div class="info-text" v-if="!$util.isEmpty(alumniBottomText)">
          <p v-html="$util.showHtml(alumniBottomText)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    alumniSectionSubtitle: {
      type: String,
      required: true,
    },
    alumniBottomText: {
      type: String,
      required: true,
    },
    alumniList: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
