export default (axios) => ({
  getCompanies() {
    return new Promise(function (resolve, reject) {
      axios
        .get("/wp/v2/company")
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getAllJobs(payload) {
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
});
