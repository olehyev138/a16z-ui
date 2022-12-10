export default (axios) => ({
  get() {
    // return axios
    //   .get("wp/v2/pages/7")
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return new Promise(function (resolve, reject) {
      axios
        .get("wp/v2/pages/7")
        .then(function (response) {
          resolve(response.data.acf);
        })
        .catch(function (error) {
          console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },

  getPopularTags() {
    return new Promise(function (resolve, reject) {
      axios
        .get("/api/v1/fetch-tags")
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
});
