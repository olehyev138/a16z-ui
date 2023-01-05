<template>
  <div class="container">
    <div class="category-row">
      <div class="group-header bg-grey">
        <h6>{{ department }}</h6>
      </div>
      <div class="article" v-for="(job, i) in jobPosts" :key="i + department">
        <div class="row">
          <div class="col-sm-2">
            <span class="category-title">{{ job.department_name }} /</span>
          </div>
          <div class="col-sm-8 col-md-9">
            <h5>
              <a href="javascript:void(0)">{{ job.post_title }}</a>
            </h5>

            <span class="place">{{ job.location_details }}</span>
          </div>
          <div class="col-sm-2 col-md-1">
            <span class="cta-wrap">
              <a href="javascript:void(0)" class="btn-link underlined">
                Button
                <span class="icon-arrow-right"></span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "themePost",
  props: {
    jobPosts: {
      type: Array,
      required: true,
      default: [],
    },
    department: {
      type: String,
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
