<template>
  <NuxtLink :to="`/team/profile/${teamMember.id}`" class="card-people">
    <div class="avatar decor--1">
      <img
        v-if="!$util.isEmpty(teamMember.photo)"
        alt="Adina Fischer"
        :src="teamMember.photo"
      />
      <img
        v-else
        alt="Adina Fischer"
        src="https://a16zcrypto.com/wp-content/uploads/2022/05/Adina-Fischer-300x300.png"
      />
    </div>
    <div v-if="callFrom == 'teamPage'" class="name">
      {{ teamMember.name }}
    </div>
    <div v-else-if="callFrom == 'researchpage'" class="r-col">
      <div class="name">{{ teamMember.name }}</div>
      <span class="post">{{ teamMember.role }}</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "teamMember",
  props: {
    callFrom: {
      type: String,
      required: true,
    },
    teamMember: {
      type: Object,
      required: true,
      default: {},
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {},
  mounted() {},
};
</script>
