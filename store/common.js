export const state = () => ({
  job_ids: [],
});

export const getters = {
  getJobIds(state) {
    return state.job_ids;
  },
};

export const mutations = {
  STORE_JOB_IDS(state, job_ids) {
    state.job_ids = job_ids;
  },
};

export const actions = {
  storeJobIds({ commit }, job_ids) {
    commit("STORE_JOB_IDS", job_ids);
  },
};
