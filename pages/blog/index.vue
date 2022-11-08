<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="(val, key) in posts" :key="key">
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
          <NuxtLink :to="'/blog/' + val.id">
            <img
              alt="Placeholder"
              class="block h-auto w-full"
              :src="val['_embedded']['wp:featuredmedia'][0]['source_url']"
              style="height: 300px !important"
            />
          </NuxtLink>

          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <NuxtLink :to="'/blog/' + val.id" class="no-underline hover:underline text-black" href="#"
                >{{ val.title.rendered }}
              </NuxtLink>
            </h1>
          </header>

          <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <p v-html="truncate(val.content.rendered, 300, '...')"></p>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async addCompany() {
      await $fetch("http://wpheadless.test/wp-json/wp/v2/posts?_embed", {
        method: "GET",
      }).then((data) => {
        console.log(data);
        this.posts = data;
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
