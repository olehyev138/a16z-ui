// plugins/api.js

import HomePage from "@/api/homepage.js";
import AboutPage from "@/api/aboutpage.js";
import PolicyPage from "@/api/policypage.js";
import cryptoStartupSchoolDefault from "@/api/cryptoStartupSchoolDefault";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    homepage: HomePage(context.$axios),
    aboutpage: AboutPage(context.$axios),
    cryptoStartupSchoolDefaultPage: cryptoStartupSchoolDefault(context.$axios),
    policyPage: PolicyPage(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
