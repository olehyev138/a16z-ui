<template>
  <div class="instructors-section">
    <div class="container">
      <h6>{{ !$util.isEmpty(title) ? title : "Advisors" }}</h6>
      <ul class="instructors-list">
        <li v-for="(advisor, i) in advisorsArr" :key="i + 'advisor'">
          <a href="#" class="card-instructors">
            <div class="avatar">
              <img
                src="@/assets/images/avatar-arianna.png"
                alt="Arianna Simpson"
              />
            </div>
            <div class="infos">
              <span class="name">Arianna Simpson</span>
              <span class="designation">General Partner, a16z crypto</span>
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
};
</script>
