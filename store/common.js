export const state = () => ({
  socials: [],
  streaming: [],
  cookie_banner_text: "",
});

export const getters = {
  getSocialLinks(state) {
    return state.socials;
  },
  getStreaming(state) {
    return state.streaming;
  },
  getCookieTxt(state) {
    return state.cookie_banner_text;
  },
};

export const mutations = {
  STORE_SOCIAL_LINK(state, socialList) {
    state.socials = socialList;
  },
  STORE_STREAMING_LINK(state, streaming) {
    state.streaming = streaming;
  },
  STORE_COOKIE_TXT(state, cookie_banner_text) {
    state.cookie_banner_text = cookie_banner_text;
  },
};

export const actions = {
  storeSocialLinks({ commit }, socialList) {
    commit("STORE_SOCIAL_LINK", socialList);
  },
  storeStreaming({ commit }, streaming) {
    commit("STORE_STREAMING_LINK", streaming);
  },
  storeCookieTxt({ commit }, cookie_banner_text) {
    commit("STORE_COOKIE_TXT", cookie_banner_text);
  },
};
