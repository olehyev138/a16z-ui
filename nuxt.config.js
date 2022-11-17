export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["@assets/css/main.css", "~assets/sass/app.scss"],
  css: ["@assets/sass/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/custom.js", mode: "client" }],

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

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["~assets/sass/app.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { postcss: null },
};
