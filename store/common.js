export const state = () => ({
  socials: [],
});

export const getters = {
  getSocialLinks(state) {
    return state.socials;
  },
};

export const mutations = {
  STORE_SOCIAL_LINK(state, socialList) {
    state.socials = socialList;
  },
};

export const actions = {
  storeSocialLinks({ commit }, socialList) {
    commit("STORE_SOCIAL_LINK", socialList);
  },
};
