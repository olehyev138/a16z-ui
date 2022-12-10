export default (axios) => ({
  getCompanies(payload) {
    return new Promise(function (resolve, reject) {
      const config = {
        params: payload,
      };
      axios
        .get("/api/v1/fetch-posts", config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getJobs() {
    return new Promise(function (resolve, reject) {
      axios
        .get("/wp/v2/pages/94")
        .then(function (response) {
          resolve(response.data.acf);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
});
