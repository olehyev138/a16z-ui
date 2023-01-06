export const state = () => ({
  allJobsRawData: [],
  selectedCompanyName: "",
  selectedCompanyJobs: [],
  activeTab: "az16",
});

export const getters = {
  getAllJobsRawData(state) {
    return state.allJobsRawData;
  },
  getActiveTab(state) {
    return state.activeTab;
  },
  getSelectedCompanyName(state) {
    return state.selectedCompanyName;
  },
  getSelectedCompanyJobs(state) {
    return state.selectedCompanyJobs;
  },
};

export const mutations = {
  STORE_JOBS_RAW_DATA(state, jobsRawData) {
    state.allJobsRawData = jobsRawData;
  },
  STORE_ACTIVE_TAB(state, tab) {
    state.activeTab = tab;
  },
  STORE_SELECTED_COMPANY_NAME(state, companyName) {
    state.selectedCompanyName = companyName;
  },
  STORE_SELECTED_COMPANY_JOBS(state, companyJobs) {
    state.selectedCompanyJobs = companyJobs;
  },
};

export const actions = {
  storeAllJobsRawData({ commit }, jobsRawData) {
    commit("STORE_JOBS_RAW_DATA", jobsRawData);
  },
  storeActiveTab({ commit }, tab) {
    commit("STORE_ACTIVE_TAB", tab);
  },
  storeSelectedCompanyName({ commit }, companyName) {
    commit("STORE_SELECTED_COMPANY_NAME", companyName);
  },
  storeSelectedCompanyJobs({ commit }, companyJobs) {
    commit("STORE_SELECTED_COMPANY_JOBS", companyJobs);
  },
};
