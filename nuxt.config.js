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

  css: ["@assets/sass/app.scss", "@/assets/css/globals.css"],

  plugins: [
    { src: "~/plugins/custom.js", mode: "client", ssr: true },
    { src: "~/plugins/prism", mode: "client" },
    { src: "~/plugins/infiniteloading", ssr: false },
    { src: "~/plugins/axios" },
    { src: "@/plugins/api.js" },
    { src: "@/plugins/helper.js" },
    { src: "@/plugins/persistedState.client.js" },
    { src: "~/plugins/apex-chart.js", mode: "client" },
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
    {
      path: "~/components/job",
      extensions: ["vue"],
      pathPrefix: false,
    },
    {
      path: "~/components/chart",
      extensions: ["vue"],
      pathPrefix: false,
    },
  ],

  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/moment",
    "@nuxtjs/fontawesome",
  ],
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
    },
  },
  styleResources: {
    scss: ["~assets/sass/app.scss"],
  },

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/fontawesome",
    ["vue-scrollto/nuxt", { container: "body", offset: -200, duration: 300 }],
  ],
  axios: {
    // extra config e.g
    // baseURL: "https://a16z-crypto2-wp.approvemyviews.com/wp-json/",
    proxyHeaders: false,
    credentials: false,
    changeOrigin: true,
  },

  build: { postcss: null },
};
