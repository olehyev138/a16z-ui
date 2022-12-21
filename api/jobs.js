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
});
