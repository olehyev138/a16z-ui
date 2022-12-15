<template>
  <div class="container">
    <div class="intro">
      <h6 v-if="!$util.isEmpty(curriculumsIntro)">
        {{ curriculumsIntro }}
      </h6>
      <h6 v-else>
        We plan to cover the following topics through lectures, mentor office
        hours, and founder talks:
      </h6>
    </div>
    <ul class="curriculums-list" v-if="!$util.isEmpty(curriculumsLists)">
      <li
        v-for="(lecture, i) in curriculumsLists"
        :key="i + 'curriculumsLists'"
      >
        <span class="count">{{ $util.padDigits(i + 1) }} /</span>
        <h6>
          <a :href="lecture.link ? lecture.link : 'javascript:void(0)'">{{
            lecture.title
          }}</a>
        </h6>
      </li>
    </ul>
    <div class="curriculums-footer">
      <p v-if="!$util.isEmpty(curriculumsFooter)">{{ curriculumsFooter }}</p>
      <p v-else>
        *The final curriculum and instructor list are coming soon. In the
        meantime, we will be sharing program updates on our social channels.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    curriculumsIntro: {
      type: String,
      required: false,
    },

    curriculumsLists: {
      type: Array,
      required: true,
      default: [],
    },

    curriculumsFooter: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
