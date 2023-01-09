export default (axios) => ({
  getTypeWisePosts(postType) {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/${postType}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getFilterFocusArea() {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/focus-areas`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getFilterThemes() {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/themes`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getFilterSeries() {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/series`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
});
