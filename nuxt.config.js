export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: "static",
  head: {
    title: "a16zc",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
    ],
  },

  css: ["@assets/sass/app.scss"],

  plugins: [{ src: "~/plugins/custom.js", mode: "client", ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    { path: "~/components" },
    {
      path: "~/components/common",
      extensions: ["vue"],
      pathPrefix: false,
    },
  ],

  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["~assets/sass/app.scss"],
  },

  modules: ["@nuxtjs/axios"],
  axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
  },

  build: { postcss: null },
};
