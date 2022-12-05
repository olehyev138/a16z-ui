export default (axios) => ({
  getFeaturedList() {
    // return axios
    //   .get("/pages/7")
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return new Promise(function (resolve, reject) {
      axios
        .get("/pages/7")
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
