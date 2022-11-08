// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  css: ["~/assets/css/tailwind.css"],

  // axios: {
  //   baseURL: "http://wpheadless.test/wp-json/wp/v2/",
  //   proxy: false,
  // },

  modules: ["@nuxtjs/tailwindcss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
