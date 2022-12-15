<template>
  <div class="instructors-section">
    <div class="container">
      <h6>{{ !$util.isEmpty(title) ? title : "Instructors" }}</h6>
      <ul class="instructors-list">
        <li
          v-for="(instructor, i) in instructorArr"
          :key="i + instructor.post_title"
        >
          <a href="#" class="card-instructors">
            <div class="avatar">
              <img
                src="@/assets/images/avatar-brian.png"
                alt="Brian Armstrong"
              />
            </div>
            <div class="infos">
              <span class="name">{{
                !$util.isEmpty(instructor.post_title)
                  ? instructor.post_title
                  : ""
              }}</span>
              <span class="designation">Co-Founder and CEO, Coinbase</span>
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
};
</script>
