// plugins/api.js

import Homepage from "@/api/homepage.js";
// import Blog from "@/api/blog";
// import Settings from "@/api/settings";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    homepage: Homepage(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
