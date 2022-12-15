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

  plugins: [
    { src: "~/plugins/custom.js", mode: "client", ssr: true },
    { src: "~/plugins/prism", mode: "client" },
    { src: "~/plugins/infiniteloading", ssr: false },
    { src: "~/plugins/axios" },
    { src: "@/plugins/api.js" },
    { src: "@/plugins/helper.js" },
    { src: "@/plugins/persistedState.client.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    { path: "~/components" },
    {
      path: "~/components/common",
      extensions: ["vue"],
      pathPrefix: false,
    },
    {
      path: "~/components/homepage",
      extensions: ["vue"],
      pathPrefix: false,
    },
    {
      path: "~/components/research",
      extensions: ["vue"],
      pathPrefix: false,
    },
    {
      path: "~/components/news",
      extensions: ["vue"],
      pathPrefix: false,
    },
    {
      path: "~/components/startupSchool",
      extensions: ["vue"],
      pathPrefix: false,
    },
  ],

  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/moment"],

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
