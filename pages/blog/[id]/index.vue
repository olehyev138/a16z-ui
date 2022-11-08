<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4" v-if="Object.keys(post).length > 0">
      <article class="overflow-hidden rounded-lg">
        <img
          alt="Placeholder"
          class="block h-auto w-full"
          :src="post['_embedded']['wp:featuredmedia'][0]['source_url']"
        />

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <a class="no-underline hover:underline text-black" href="#">{{ post.title.rendered }} </a>
          </h1>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <p v-html="truncate(post.content.rendered, 300, '...')"></p>
        </footer>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async addCompany() {
      await $fetch(`http://wpheadless.test/wp-json/wp/v2/posts/${this.$route.params.id}?_embed`, {
        method: "GET",
      }).then((data) => {
        console.log(data);
        this.post = data;
      });
    },
    truncate: function (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
  mounted() {
    this.addCompany();
  },
};
</script>
