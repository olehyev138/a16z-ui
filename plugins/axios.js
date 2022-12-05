export default function ({ $axios, redirect, error: nuxtError }) {
  $axios.onRequest((config) => {
    config.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      //Authorization: store.state.auth.tokenlocal, // refers to nuxt.config.js->auth.token
    };
    console.log("Making request to " + config.url);
  });

  //   $axios.onError((error) => {
  //     const code = parseInt(error.response && error.response.status);
  //     if (code === 400) {
  //       redirect("/400");
  //     } else {
  //       this.$nuxt.error({ statusCode: 500, message: error.response });
  //     }
  //   });
  $axios.onError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message,
    });
    return Promise.resolve(false);
  });
  $axios.setBaseURL("http://a16z-crypto2-wp.approvemyviews.com/wp-json/wp/v2");
}
