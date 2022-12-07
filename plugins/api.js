// plugins/api.js

import HomePage from "@/api/homepage";
import AboutPage from "@/api/aboutpage";
import PolicyPage from "@/api/policypage";
import Researchpage from "@/api/researchpage";
import FollowusPage from "@/api/followus";
import CryptoStartupSchoolDefault from "@/api/cryptoStartupSchoolDefault";
import Footer from "@/api/footer";

export default (context, inject) => {
  // Initialize API factories
  const factories = {
    homepage: HomePage(context.$axios),
    aboutpage: AboutPage(context.$axios),
    cryptoStartupSchoolDefaultPage: CryptoStartupSchoolDefault(context.$axios),
    policyPage: PolicyPage(context.$axios),
    researchpage: Researchpage(context.$axios),
    footer: Footer(context.$axios),
    followuspage: FollowusPage(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
