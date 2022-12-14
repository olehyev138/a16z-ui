// plugins/api.js

import HomePage from "@/api/homepage";
import AboutPage from "@/api/aboutpage";
import PolicyPage from "@/api/policypage";
import Researchpage from "@/api/researchpage";
import FollowusPage from "@/api/followus";
import PortfolioPage from "@/api/portfoliopage";
import TeamPage from "@/api/teampage";
import NewsPage from "@/api/newspage";
import LawAndPolicyPage from "@/api/lawAndPolicyPage";
import Common from "@/api/common";
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
    common: Common(context.$axios),
    portfolio: PortfolioPage(context.$axios),
    teampage: TeamPage(context.$axios),
    newspage: NewsPage(context.$axios),
    lawAndPolicyPage: LawAndPolicyPage(context.$axios),
  };

  // Inject $api
  inject("api", factories);
};
