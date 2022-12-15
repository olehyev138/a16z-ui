<template>
  <div class="container">
    <ul class="faq-list" v-if="!$util.isEmpty(faqLists)">
      <li v-for="(faq, i) in faqLists" :key="i">
        <a
          href="javascript:void(0)"
          class="opener"
          @click="faq.visible = !faq.visible"
          :class="faq.visible ? 'active' : ''"
          >{{ faq.question }}</a
        >

        <span class="curriculums-footer" v-if="faq.visible">{{
          faq.answer
        }}</span>
      </li>
      <!-- add [active] class on opener to show active state  -->
    </ul>
    <div class="faq-footer">
      <template
        v-if="!$util.isEmpty(faqBottomText)"
        v-html="!$util.showHtml(faqBottomText)"
      ></template>
      <template>
        <p>
          Questions? Please email us at
          <a href="mailto:crypto-startup-school@a16z.com"
            >crypto-startup-school@a16z.com</a
          >
        </p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredPost",
  props: {
    faqLists: {
      type: Array,
      required: true,
      default: [],
    },
    faqBottomText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
