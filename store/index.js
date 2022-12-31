export const strict = false;
export const state = () => ({
  dimension1Weight: 15,
  dimension2Weight: 10,
  dimension3Weight: 5,
  dimension4Weight: 5,
  dimension5Weight: 5,
  dimension6Weight: 7.5,
  dimension7Weight: 2.5,
  dimension8Weight: 10,
  dimension9Weight: 5,
  dimension10Weight: 10,
  dimension11Weight: 5,
  dimension12Weight: 5,
  dimension13Weight: 5,
  dimension14Weight: 10,
  dimension1Threshold: 5000,
  dimension2Threshold: 10000,
  dimension3Threshold: 1000,
  dimension4Threshold: 10000,
  dimension5Threshold: 500000,
  dimension6Threshold: 100,
  dimension7Threshold: 10,
  dimension8Threshold: 1000000,
  dimension9Threshold: 10000000,
  dimension10Threshold: 500000,
  dimension11Threshold: 10000000000,
  dimension12Threshold: 100000000,
  dimension13Threshold: 10000000000,
  dimension14Threshold: 10000000,
});

export const getters = {
  //   getSocialLinks(state) {
  //     return state.socials;
  //   },
};

export const mutations = {
  SET_DATA_INTO_STORE(state, action) {
    switch (action.type) {
      case "SET_DIMENSION1WEIGHT":
        state.dimension1Weight = action.payload;
        break;
      case "SET_DIMENSION1THRESHOLD":
        state.dimension1Threshold = action.payload;
        break;
      case "SET_DIMENSION2WEIGHT":
        state.dimension2Weight = action.payload;
        break;
      case "SET_DIMENSION2THRESHOLD":
        state.dimension2Threshold = action.payload;
        break;
      case "SET_DIMENSION3WEIGHT":
        state.dimension3Weight = action.payload;
        break;
      case "SET_DIMENSION3THRESHOLD":
        state.dimension3Threshold = action.payload;
        break;
      case "SET_DIMENSION4WEIGHT":
        state.dimension4Weight = action.payload;
        break;
      case "SET_DIMENSION4THRESHOLD":
        state.dimension4Threshold = action.payload;
        break;
      case "SET_DIMENSION5WEIGHT":
        state.dimension5Weight = action.payload;
        break;
      case "SET_DIMENSION5THRESHOLD":
        state.dimension5Threshold = action.payload;
        break;
      case "SET_DIMENSION6WEIGHT":
        state.dimension6Weight = action.payload;
        break;
      case "SET_DIMENSION6THRESHOLD":
        state.dimension6Threshold = action.payload;
        break;
      case "SET_DIMENSION7WEIGHT":
        state.dimension7Weight = action.payload;
        break;
      case "SET_DIMENSION7THRESHOLD":
        state.dimension7Threshold = action.payload;
        break;
      case "SET_DIMENSION8WEIGHT":
        state.dimension8Weight = action.payload;
        break;
      case "SET_DIMENSION8THRESHOLD":
        state.dimension8Threshold = action.payload;
        break;
      case "SET_DIMENSION9WEIGHT":
        state.dimension9Weight = action.payload;
        break;
      case "SET_DIMENSION9THRESHOLD":
        state.dimension9Threshold = action.payload;
        break;
      case "SET_DIMENSION10WEIGHT":
        state.dimension10Weight = action.payload;
        break;
      case "SET_DIMENSION10THRESHOLD":
        state.dimension10Threshold = action.payload;
        break;
      case "SET_DIMENSION11WEIGHT":
        state.dimension11Weight = action.payload;
        break;
      case "SET_DIMENSION11THRESHOLD":
        state.dimension11Threshold = action.payload;
        break;
      case "SET_DIMENSION12WEIGHT":
        state.dimension12Weight = action.payload;
        break;
      case "SET_DIMENSION12THRESHOLD":
        state.dimension12Threshold = action.payload;
        break;
      case "SET_DIMENSION13WEIGHT":
        state.dimension13Weight = action.payload;
        break;
      case "SET_DIMENSION13THRESHOLD":
        state.dimension13Threshold = action.payload;
        break;
      case "SET_DIMENSION14WEIGHT":
        state.dimension14Weight = action.payload;
        break;
      case "SET_DIMENSION14THRESHOLD":
        state.dimension14Threshold = action.payload;
    }
  },
};

export const actions = {
  setDataIntoStore({ commit }, action) {
    commit("SET_DATA_INTO_STORE", action);
  },
};
