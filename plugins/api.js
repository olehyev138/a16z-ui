// plugins/api.js

import HomePage from "@/api/homepage";
import AboutPage from "@/api/aboutpage";
import PolicyPage from "@/api/policypage";
import Researchpage from "@/api/researchpage";
import cryptoStartupSchoolDefault from "@/api/cryptoStartupSchoolDefault";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    homepage: HomePage(context.$axios),
    aboutpage: AboutPage(context.$axios),
    cryptoStartupSchoolDefaultPage: cryptoStartupSchoolDefault(context.$axios),
    policyPage: PolicyPage(context.$axios),
    researchpage: Researchpage(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
