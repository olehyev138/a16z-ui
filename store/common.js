export const state = () => ({
  socials: [],
  cookie_banner_text: "",
});

export const getters = {
  getSocialLinks(state) {
    return state.socials;
  },
  getCookieTxt(state) {
    return state.cookie_banner_text;
  },
};

export const mutations = {
  STORE_SOCIAL_LINK(state, socialList) {
    state.socials = socialList;
  },
  STORE_COOKIE_TXT(state, cookie_banner_text) {
    state.cookie_banner_text = cookie_banner_text;
  },
};

export const actions = {
  storeSocialLinks({ commit }, socialList) {
    commit("STORE_SOCIAL_LINK", socialList);
  },
  storeCookieTxt({ commit }, cookie_banner_text) {
    commit("STORE_COOKIE_TXT", cookie_banner_text);
  },
};
