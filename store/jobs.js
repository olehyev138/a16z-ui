export const state = () => ({
  allJobsRawData: [],
});

export const getters = {
  getAllJobsRawData(state) {
    return state.allJobsRawData;
  },
};

export const mutations = {
  STORE_JOBS_RAW_DATA(state, allJobsRawData) {
    state.allJobsRawData = allJobsRawData;
  },
};

export const actions = {
  storeAllJobsRawData({ commit }, allJobsRawData) {
    commit("STORE_JOBS_RAW_DATA", allJobsRawData);
  },
};
