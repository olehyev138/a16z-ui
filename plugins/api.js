// plugins/api.js

import HomePage from "@/api/homepage.js";
import AboutPage from "@/api/aboutpage.js";
// import Settings from "@/api/settings";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    homepage: HomePage(context.$axios),
    aboutpage: AboutPage(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
