export const state = () => ({
  teamMembers: [],
});

export const getters = {
  getTeamMembers(state) {
    return state.teamMembers;
  },
};

export const mutations = {
  STORE_TEAM_MEMBERS(state, teamMembers) {
    state.teamMembers = teamMembers;
  },
};

export const actions = {
  storeTeamMembers({ commit }, teamMembers) {
    commit("STORE_TEAM_MEMBERS", teamMembers);
  },
};
